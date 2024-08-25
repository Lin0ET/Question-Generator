import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import q4 from '../assets/img/q4.png';
import { TextDecoder } from 'text-encoding';

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
        console.log("清理後的文件內容:", cleanText);
        setUploadStatus('正在請求生成題目...');

        const promptText = `
        忘掉先前的所有聊天內容，請直接根據以下描述生成五道中文選擇題。嚴格按照以下格式，返回的內容僅包括問題和答案的純文字，不要添加任何額外的前言或解釋：
        1. 題目
            A. 選項一
            B. 選項二
            C. 選項三
            D. 選項四
            答案：X
        
        描述內容：${cleanText}
        `;
        try {
          const response = await axios.post(
            `${apiEndpoint}openai/deployments/gpt-35-turbo/completions?api-version=2023-03-15-preview`,
            {
              prompt: promptText,
              max_tokens: 700,
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
            console.error('沒有從AI返回有效的文字');
            setUploadStatus('生成題目失敗，請重試。');
            return;
          }

          const textResponse = response.data.choices[0].text.trim();
          console.log("AI 生成的文字:", textResponse);

          // 直接將生成的文字傳遞到 QuestionPage，而不是解析為多個問題
          setUploadStatus('題目生成成功！');
          navigate('/questions', { state: { questions: [textResponse] } });
        } catch (error) {
          console.error('生成題目過程中發生錯誤:', error.response ? error.response.data : error.message);
          setUploadStatus('生成題目失敗，請重試。');
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      setUploadStatus('請上傳文件。');
    }
  };

  return (
    <div className="w-full p-4 bg-blue-50 min-h-screen">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">生成新測驗題目</h1>
        <input type="file" accept=".txt" onChange={handleFileUpload} className="w-full max-w-lg mx-auto block" />
        {uploadStatus && <p className="text-center text-lg mt-4">{uploadStatus}</p>}
      </div>
      <div className="flex justify-center mt-8">
        <img src={q4} alt="Upload Illustration" className="w-full max-w-md" />
      </div>
    </div>
  );
}

export default UploadPage;
