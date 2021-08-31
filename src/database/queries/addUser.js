const connection = require('../config/connection');

const addusers = (username, email, password) => connection.query(
  'INSERT INTO users (user_name ,email, password) VALUES ($1,$2,$3);',
  [username, email, password],
);

module.exports = addusers;
