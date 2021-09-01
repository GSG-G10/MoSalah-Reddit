const insertPost = require('../database/queries/addPost');

const addPost = (req, res) => {
  const { title, content } = req.body;
  insertPost(title, content)
    .then(() => {
      res.redirect('/');
    }).catch((err) => {
      res.json(err.detail);
    });
};

module.exports = addPost;
