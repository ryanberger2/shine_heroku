const initOptions = {
    // global event notification; 
    error(err, e) {
      if (e.cn) {
        console.log('CN:', e.cn); 
        console.log('EVENT:', error.message || error); 
      }
    }
}; 
const pgp = require('pg-promise')(initOptions); 
const db = pgp('postgresql://rberger:password@localhost:5432/shine'); 
module.exports = db;