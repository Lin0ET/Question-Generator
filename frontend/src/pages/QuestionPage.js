// src/pages/QuestionPage.js
import React, { useState } from 'react';

function QuestionPage() {
  const [questions, setQuestions] = useState([
    { id: 1, text: '1.我們太陽系中最大的行星是哪一個？', options: ['水星', '木星', '天王星', '巨星'], answer: 1 },
    { id: 2, text: '2.地球上的水主要存在於哪裡？', options: ['海洋', '河流', '冰川', '湖泊'], answer: 0 },
    // 添加更多問題
  ]);

  return (
    <div className="container mx-auto p-4  bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 mt-2 text-center">題目生成結果</h1>
      {questions.map(question => (
        <div key={question.id} className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title">{question.text}</h2>
            <ul>
              {question.options.map((option, index) => (
                <li key={index} className={index === question.answer ? 'text-blue-600' : ''}>
                  {String.fromCharCode(65 + index)}. {option}
                </li>
              ))}
            </ul>
            <button className="btn btn-outline mt-4">編輯</button>
          </div>
        </div>
      ))}
      <div className="text-center">      
        <button className="btn btn-accent text-center">下載</button>
      </div>
    </div>
  );
}

export default QuestionPage;
