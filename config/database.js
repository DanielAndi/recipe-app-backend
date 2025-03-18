const { Sequelize } = require("sequelize");
require("dotenv").config();

// Create a new Sequelize instance with database connection details
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "postgres", // Specifies the database dialect (PostgreSQL in this case)
    logging: false, // Set to true for debugging SQL queries
});
// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;
