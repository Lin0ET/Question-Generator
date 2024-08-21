require('dotenv').config();
const { Sequelize } = require('sequelize');

// 从环境变量中读取数据库连接信息
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, 'happy12347', {
  host: process.env.DB_HOST,
  dialect: 'postgres', // 这里你可以替换为你使用的数据库
});

sequelize.authenticate()
  .then(() => console.log('数据库连接成功'))
  .catch(err => console.log('数据库连接失败', err));

module.exports = sequelize;
