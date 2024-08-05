import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function QuestionPage() {
  const location = useLocation();
  const [questions, setQuestions] = useState(location.state?.questions || []);
  const [editId, setEditId] = useState(null);

  const saveChanges = (id, newText) => {
    setQuestions(
      questions.map(question => question.id === id ? { ...question, text: newText } : question)
    );
    setEditId(null); // Exit edit mode
  };

  return (
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 mt-2 text-center">題目編輯和查看</h1>
      {questions.map(question => (
        <div key={question.id} className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            {editId === question.id ? (
              <>
                <textarea
                  value={question.text}
                  onChange={e => setQuestions(
                    questions.map(q => q.id === question.id ? { ...q, text: e.target.value } : q)
                  )}
                  className="textarea textarea-bordered w-full"
                />
                <button className="btn btn-primary mt-2" onClick={() => saveChanges(question.id, question.text)}>保存修改</button>
              </>
            ) : (
              <>
                <h2 className="card-title">{question.text}</h2>
                <button className="btn btn-outline mt-2" onClick={() => setEditId(question.id)}>编辑</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionPage;
