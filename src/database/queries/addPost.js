const connection = require('../config/connection');

const insertPost = (userId, title, content) => connection.query('INSERT INTO posts (users_id, title, content) VALUES ($1,$2,$3)', [userId, title, content]);

module.exports = insertPost;
