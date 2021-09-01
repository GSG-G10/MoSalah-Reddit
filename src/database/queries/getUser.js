const connection = require('../config/connection');

const getUser = (email) => connection.query(`SELECT email FROM users WHERE email='${email}'`);
module.exports = getUser;
