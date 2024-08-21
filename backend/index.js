const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();  // 读取 .env 文件中的配置

const app = express();

// 使用 CORS 中间件，允许来自 'http://localhost:3000' 的请求
app.use(cors({
  origin: 'http://localhost:3000',  // 允许的前端来源
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // 允许的 HTTP 方法
  allowedHeaders: ['Content-Type', 'Authorization'],  // 允许的头部信息
  credentials: true,  // 允许传递凭证（如 cookies）
}));

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }) // 设置为 true 将重新创建表
  .then(() => {
    app.listen(PORT, () => {
      console.log(`服务器运行在端口 ${PORT}`);
    });
  })
  .catch(err => console.error('数据库同步失败:', err.message));
