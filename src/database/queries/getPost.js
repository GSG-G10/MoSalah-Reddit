const connection = require('../config/connection');

const getPostDB = () => connection.query('SELECT posts.*,users,user_name FROM posts INNER JOIN users ON users.id= posts.users_id');

module.exports = getPostDB;
