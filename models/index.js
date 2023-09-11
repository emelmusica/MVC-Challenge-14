const Sequelize = require("sequelize");
const Category = require("./Category");
const User = require("./User");

// Create a Sequelize instance and configure it here
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  // Sequelize options
});

// Define your models and associations here
Category.init(sequelize, Sequelize);
User.init(sequelize, Sequelize);

// Define associations (if needed) here
Category.hasMany(User);
User.belongsTo(Category);

module.exports = { sequelize, Category, User };
