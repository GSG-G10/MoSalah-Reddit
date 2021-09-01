/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const getPostDB = require('../database/queries/getPost');

const getPost = (req, res) => {
  getPostDB().then((posts) => res.json(posts.rows))
    .catch((err) => res.json(err));
};
module.exports = getPost;
