const insertPost = require('../database/queries/addPost');

const addPost = (req, res) => {
  const { user_id: userId, title, content } = req.body;
  insertPost(userId, title, content)
    .then(() => {
      res.send('done');
    }).catch((err) => {
      res.json(err.detail);
    });
};

module.exports = addPost;
