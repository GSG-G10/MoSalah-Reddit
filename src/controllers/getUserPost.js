/* eslint-disable no-console */
const { getUserPosts, getUserNameByName } = require('../database/queries');

const userPosts = (req, res) => {
  const { user } = req.cookies;
  getUserNameByName(user)
    .then((results) => results.rows[0].id)
    .then((userId) => {
      getUserPosts(userId)
        .then((result) => res.json(result.rows))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
};

module.exports = userPosts;
