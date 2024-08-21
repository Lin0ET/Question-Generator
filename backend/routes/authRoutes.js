const express = require('express');
const cors = require('cors'); // 确保引入 cors 模块
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// 使用 cors 处理跨域问题
router.options('*', cors());

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
