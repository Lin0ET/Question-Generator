import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function QuestionPage() {
  const location = useLocation();
  const [questions, setQuestions] = useState(location.state?.questions || []);

  return (
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 mt-2 text-center">题目编辑和查看</h1>
      {questions.map(question => (
        <div key={question.id} className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title">题目 {question.id}: {question.text}</h2>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
            <p>答案: {question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionPage;
