const { insertPost, getUserNameByName } = require('../database/queries');

const addPost = (req, res) => {
  const { title, content } = req.body;
  const { user } = req.cookies;
  getUserNameByName(user)
    .then((result) => result.rows[0].id)
    .then((userId) => {
      insertPost(userId, title, content)
        .then(() => {
          res.redirect('/');
        }).catch((err) => {
          res.json(err.detail);
        });
    });
};

module.exports = addPost;
