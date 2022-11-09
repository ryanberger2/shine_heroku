const { Sequelize } = require('sequelize'); 
require('dotenv').config(); 

// const isProduction = process.env.NODE_ENV === 'production'
// const connectionString = 'postgresql://rberger:password@localhost:5432/shine'

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


// sequelize.authenticate().then(() => {
//     console.log('Connection established successfully.');
//   }).catch(err => {
//     console.error('Unable to connect to the database:', err);
//   }).finally(() => {
//     sequelize.close();
//   });

module.exports = sequelize; 