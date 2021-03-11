const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/post-test', (req, res) => {
  const query = 'INSERT INTO customers(customer_name) VALUES($1) RETURNING *';
  const params = [req.body.name];

  db.query(query, params).then((resp) => {
    res.json(resp.rows[0]);
  });
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
