const { Sequelize } = require('sequelize'); 
require('dotenv').config(); 

const isProduction = process.env.NODE_ENV === 'production'
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const sequelize = new Sequelize(
    `${process.env.DB_DATABASE}`, 
    `${process.env.DB_USER}`, 
    `${process.env.DB_PASSWORD}`, 
    {
        host: `${process.env.DB_HOST}`, 
        dialect: 'postgres'
    }
    // ssl: { rejectUnauthorized: false }
); 

module.exports = sequelize; 