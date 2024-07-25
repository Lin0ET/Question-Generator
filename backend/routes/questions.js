const express = require('express');
const router = express.Router();

// POST 路由，用于添加新问题
router.post('/', (req, res) => {
    const question = req.body;
    // 此处添加将问题保存到数据库的逻辑
    console.log(question);
    res.status(201).send({ message: 'Question added successfully!', question });
});

module.exports = router;
