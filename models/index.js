const Sequelize = require("sequelize");
const Category = require("./Category");
const User = require("./User");


const sequelize = new Sequelize(process.env.DATABASE_URL, {
});


Category.init(sequelize, Sequelize);
User.init(sequelize, Sequelize);


Category.hasMany(User);
User.belongsTo(Category);

module.exports = { sequelize, Category, User };
