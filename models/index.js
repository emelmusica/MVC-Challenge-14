const Sequelize = require("sequelize");
const Category = require("./Category");
const User = require("./User");

// Initialize Sequelize with DATABASE_URL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

Category.init(sequelize, Sequelize);
User.init(sequelize, Sequelize);

Category.hasMany(User);
User.belongsTo(Category);

module.exports = { sequelize, Category, User };