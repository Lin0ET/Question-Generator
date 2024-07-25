import React, { useState } from 'react';
import axios from 'axios';

function AddQuestion() {
  const [question, setQuestion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/questions', { text: question })
      .then(response => {
        alert('Question added!');
        setQuestion('');  // 清空输入框
      })
      .catch(error => {
        alert('Failed to add question');
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form bg-base-200 p-4 rounded-box">
      <label htmlFor="question" className="label">
        <span className="label-text">Enter your question:</span>
      </label>
      <input
        type="text"
        id="question"
        className="input input-bordered w-full max-w-xs"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
  );
}

export default AddQuestion;
