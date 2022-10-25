const { Pool } = require('pg'); 

const pool = new Pool({
    host: 'localhost', 
    user: 'postgres', 
    database: 'postgres', 
    password: '', 
    port: 5432
}); 

const pool2 = new Pool({
    user: "mypxmarsiudmwb", 
    host: "ec2-3-213-66-35.compute-1.amazonaws.com", 
    database: "d6mimvoaeqn6vr", 
    password: "94db8bed09b82792a78bc014ff509c694ea5cc30c3d33ec49faa6f96c60bb9b8", 
    port: 5432
}); 

module.exports = pool; 