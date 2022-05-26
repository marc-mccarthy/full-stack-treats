const pg = require('pg');
const Pool = pg.Pool;
const config = {
  database: 'treats_example', // the name of the database
  host: 'localhost', // where is your database
  port: 5432, // the port number for your database, 5432 is the default
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 // 30 seconds to try to connect
};

// one instance to rul them all!
const pool = new Pool(config);

pool.on('connect', (client) => {
  console.log('pg connected');
})

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle pg client', err);
  process.exit(-1);
});

module.exports = pool;