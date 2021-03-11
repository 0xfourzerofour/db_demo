const { Pool } = require('pg');

const pool = new Pool({
  host: '',
  port: 5432,
  database: '',
  user: '',
  password: '',
});

pool.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to Postgres');
  }
});

pool.on('error', (e) => {
  console.log(e);
});

module.exports = {
  query: async (text, params) => {
    try {
      const res = await pool.query(text, params);
      return res;
    } catch (err) {
      throw err;
    }
  },
};
