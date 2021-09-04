const connection = require('../config/connection');

const getUserNameByName = (userName) => connection.query('SELECT * FROM users WHERE user_name=($1)', [userName]);
module.exports = getUserNameByName;
