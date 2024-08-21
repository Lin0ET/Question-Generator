// config/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  // 设置本地策略
  passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return done(null, false, { message: 'That email is not registered!' });
      }

      // 使用 bcrypt 的方法来验证用户输入的密码是否正确
      const isMatch = await user.validPassword(password);
      if (!isMatch) {
        return done(null, false, { message: 'Email or password incorrect.' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }));

  // 序列化用户到 session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // 反序列化用户信息
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};
