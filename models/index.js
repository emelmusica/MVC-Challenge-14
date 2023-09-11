const Sequelize = require('sequelize');

// Assuming you have the DATABASE_URL environment variable set
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // or your database dialect
  // other options...
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Import your models and define associations here

module.exports = {
  sequelize, // Export the Sequelize instance for use in your app
};
