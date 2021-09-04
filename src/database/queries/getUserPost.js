const connection = require('../config/connection');

const getUserPosts = (userId) => connection.query('SELECT posts.*, users.user_name FROM posts INNER JOIN users ON posts.users_id = users.id WHERE users.id = ($1)', [userId]);

module.exports = getUserPosts;
