const Sequelize = require("sequelize");
const Category = require("./Category");
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

// Initialize Sequelize with DATABASE_URL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

Category.init(sequelize, Sequelize);
User.init(sequelize, Sequelize);
Post.init(sequelize, Sequelize);
Comment.init(sequelize, Sequelize);

Category.hasMany(User);
User.belongsTo(Category);


Post.belongsTo(User); // Each post belongs to a user
User.hasMany(Post);   // Each user can have multiple posts

Post.hasMany(Comment); // Each post can have multiple comments
Comment.belongsTo(Post); // Each comment belongs to a post

Comment.belongsTo(User); // Each comment belongs to a user
User.hasMany(Comment);   // Each user can have multiple comments

module.exports = { sequelize, Category, User, Post, Comment };
