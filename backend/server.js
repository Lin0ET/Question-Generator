// server.js or app.js
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'JWT_SECRET=af368ebd7b2b303c619079733385a3568aab2d8effeb565f09470a166dd733c86a980006d6ec00bade1a019b134a2e0ac6b4202d0e22bf35e5b90f215654feeb',
  resave: false,
  saveUninitialized: true
}));

// 初始化 Passport
passport(app);

// 用户相关路由
app.use('/api/auth', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// server.js or app.js
const sequelize = require('./config/db');

sequelize.sync().then(() => {
  console.log('Database synchronized');
});
