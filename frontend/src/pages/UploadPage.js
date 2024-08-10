import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import q4 from '../assets/img/q4.png';
import { TextDecoder } from 'text-encoding';  // 确保已安装并导入此库

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
        const decoder = new TextDecoder('big5');
        const text = decoder.decode(new Uint8Array(e.target.result));
        const cleanText = text.replace(/[\r\n]+/g, " ").trim();
        console.log("清理后的文件内容:", cleanText);
        setUploadStatus('正在请求生成题目...');

        const promptText = `以下是一段文字描述，请根据这段描述生成四题相关的中文选择题。每个问题需详细地按以下格式生成并以 '---' 结尾：题号、题目、四个选项（标记为A、B、C、D）和答案。确保每个问题的内容紧密结合描述中的详细信息。\n描述内容：\n${cleanText}`;

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

          const generatedQuestions = response.data.choices[0].text.trim().split('---').map((part, index) => {
            const parts = part.trim().split('\n').filter(line => line);
            return {
              id: index + 1,
              text: parts[0], // 假设第一行是题目描述
              options: parts.slice(1, parts.length - 1), // 选项
              answer: parts[parts.length - 1] // 假设最后一行是答案
            };
          });
          console.log("AI生成的题目:", generatedQuestions);
          setUploadStatus('题目生成成功！');
          navigate('/questions', { state: { questions: generatedQuestions } });
        } catch (error) {
          console.error('Error generating completion:', error.response ? error.response.data : error.message);
          setUploadStatus('生成题目失败，请重试。');
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
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
