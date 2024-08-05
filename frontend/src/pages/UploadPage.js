import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import q4 from '../assets/img/q4.png';

function UploadPage() {
  const [uploadStatus, setUploadStatus] = useState(null);
  const navigate = useNavigate();
  const apiKey = "3b452f29c1aa47ce9279b42177a5ea58";
  const apiEndpoint = "https://wulab1121017openai.openai.azure.com/";

  const handleFileUpload = async () => {
    setUploadStatus('正在请求生成题目...');

    try {
      const response = await axios.post(
        `${apiEndpoint}openai/deployments/gpt-35-turbo/completions?api-version=2023-03-15-preview`,
        {
          prompt: "請生成三題國小自然題目。",
          max_tokens: 150,
          model: "gpt-35-turbo"
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey
          }
        }
      );

      setUploadStatus('题目生成成功！');
      const generatedQuestions = response.data.choices[0].text.trim().split('\n').map((text, index) => ({
        id: index + 1,
        text,
        options: [],
        answer: null
      }));
      navigate('/questions', { state: { questions: generatedQuestions } });
    } catch (error) {
      console.error('Error generating completion:', error.response ? error.response.data : error.message);
      setUploadStatus('生成题目失败，请重试。');
    }
  };

  return (
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">生成新測驗題目</h1>
        <button className="btn btn-primary" onClick={handleFileUpload}>生成题目</button>
        {uploadStatus && <p className="text-center text-lg mt-4">{uploadStatus}</p>}
      </div>
      <div className="flex justify-center mt-8">
        <img src={q4} alt="Upload Illustration" style={{ width: '600px' }} />
      </div>
    </div>
  );
}

export default UploadPage;