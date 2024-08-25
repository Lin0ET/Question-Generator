import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function QuestionPage() {
  const location = useLocation();
  const [content, setContent] = useState(location.state?.questions?.[0] || '');

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'questions.txt';
    link.click();
  };

  return (
    <div className="w-full p-4 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 mt-2 text-center">題目編輯和查看</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <textarea
          className="w-full h-96 p-4 border border-gray-300 rounded-lg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="mt-4 btn btn-primary"
          onClick={handleDownload}
        >
          下載為文件
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;
