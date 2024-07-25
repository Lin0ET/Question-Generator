const Sequelize = require('sequelize');
const sequelize = new Sequelize('question_generator_db', 'postgres', 'happy12347', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Export models here
// db.User = require('./user')(sequelize, Sequelize);

module.exports = db;
