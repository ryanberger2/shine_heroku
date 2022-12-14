require('dotenv').config(); 

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({ 
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString, 
    // ssl: { rejectUnauthorized: false }
}); 
console.log(`production is ${isProduction}`); 
console.log(`connection string is ${connectionString}`); 
console.log(`databaseURL is ${process.env.DATABASE_URL}`); 

module.exports = { pool } 