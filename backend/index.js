const express = require('express');
const cors = require('cors');
const app = express();
const questionRoutes = require('./routes/questions'); // 确保路径正确

app.use(cors());
app.use(express.json());
app.use('/questions', questionRoutes); // 使用问题路由

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the Question Generator API!');
  });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
