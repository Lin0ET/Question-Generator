// src/api.js
import axios from 'axios';

export const fetchQuestions = () => {
  return axios.get('http://localhost:5000/questions');
};

export const addQuestion = (question) => {
  return axios.post('http://localhost:5000/questions', question);
};
