import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import q4 from '../assets/img/q4.png';
import { TextDecoder } from 'text-encoding';  // 確保已安裝並導入此庫

function UploadPage() {
  const [uploadStatus, setUploadStatus] = useState(null);
  const navigate = useNavigate();
  const apiKey = "3b452f29c1aa47ce9279b42177a5ea58";
  const apiEndpoint = "https://wulab1121017openai.openai.azure.com/";

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const decoder = new TextDecoder('utf-8');
        const text = decoder.decode(new Uint8Array(e.target.result));
        const cleanText = text.replace(/[\r\n]+/g, " ").trim();
        console.log("清理后的文件内容:", cleanText);
        setUploadStatus('正在请求生成题目...');
  
        const promptText = `
          以下是一段描述，请根据这段描述生成五题中文选择题。每题需以下格式并以 '###' 结尾：
          题号、题目（不超过50字）、四个选项（每选项不超过10字），并明确标出正确答案。
          例如：
          1. 下列哪一种金属最早被人类使用？###A. 铁 B. 铜 C. 金 D. 银###答案：B
          描述内容：${cleanText}
        `;
  
        try {
          const response = await axios.post(
            `${apiEndpoint}openai/deployments/gpt-35-turbo/completions?api-version=2023-03-15-preview`,
            {
              prompt: promptText,
              max_tokens: 500,
              model: "gpt-35-turbo"
            },
            {
              headers: {
                "Content-Type": "application/json",
                "api-key": apiKey
              }
            }
          );
  
          if (!response.data || !response.data.choices || response.data.choices.length === 0 || !response.data.choices[0].text) {
            console.error('No valid text returned from the AI');
            setUploadStatus('生成题目失败，请重试。');
            return;
          }
  
          const textResponse = response.data.choices[0].text.trim();
          console.log("AI generated text:", textResponse);  // Print the AI-generated text
          
          const generatedQuestions = textResponse.split('###').filter(part => part.trim()).map((part, index) => {
            const lines = part.trim().split('\n').filter(line => line);
            if (lines.length < 2) return null;  // Ensure there are enough lines for a question and at least one option
            return {
              id: index + 1,
              text: lines[0],
              options: lines.slice(1, 5),
              answer: lines[5] ? lines[5].split('：')[1].trim() : 'Unknown'
            };
          }).filter(question => question);
  
          console.log("Processed questions:", generatedQuestions);
          setUploadStatus('题目生成成功！');
          navigate('/questions', { state: { questions: generatedQuestions } });
        } catch (error) {
          console.error('Error generating completion:', error.response ? error.response.data : error.message);
          setUploadStatus('生成题目失败，请重试。');
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      setUploadStatus('请上传文件。');
    }
  };

  return(
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">生成新测验题目</h1>
        <input type="file" accept=".txt" onChange={handleFileUpload} />
        {uploadStatus && <p className="text-center text-lg mt-4">{uploadStatus}</p>}
      </div>
      <div className="flex justify-center mt-8">
        <img src={q4} alt="Upload Illustration" style={{ width: '600px' }} />
      </div>
    </div>
  );
}

export default UploadPage;
