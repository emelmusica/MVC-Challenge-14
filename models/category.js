const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    // Define model attributes/columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false, // You can set this to true if you want createdAt and updatedAt columns
    underscored: true, // Use snake_case for column names
    modelName: 'category', // This will set the table name to 'categories'
  }
);

module.exports = Category;
