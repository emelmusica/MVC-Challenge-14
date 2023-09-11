const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Comment extends Model {}

Comment.init(
  {
    // Define your Comment model 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // You may want to add more attributes, such as user_id or post_id for associations
  },
  {
    sequelize,
    timestamps: true, // timestamps
    underscored: true, 
    modelName: 'comment', 
    tableName: 'comments', 
  }
);

module.exports = Comment;
