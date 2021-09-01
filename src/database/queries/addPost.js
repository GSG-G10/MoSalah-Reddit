const connection = require('../config/connection');

const insertPost = (title, content) => connection.query('INSERT INTO posts (users_id, title, content) VALUES ($1,$2,$3)', [1, title, content]);

module.exports = insertPost;
