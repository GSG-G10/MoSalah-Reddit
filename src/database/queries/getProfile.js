const connection = require('../config/connection');

const getProfile = (username) => connection.query(`select * from users where user_name='${username}'`);

module.exports = getProfile;
