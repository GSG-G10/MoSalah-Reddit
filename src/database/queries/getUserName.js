const connection = require('../config/connection');

const getUserName = (email) => connection.query(`SELECT * FROM users WHERE email='${email}'`);
module.exports = getUserName;
