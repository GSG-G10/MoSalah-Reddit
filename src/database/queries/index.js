const addusers = require('./addUser');
const getUser = require('./getUser');
const getHash = require('./getHash');
const getPostDB = require('./getPost');
const insertPost = require('./addPost');
const getProfile = require('./getProfile');
const getUserPosts = require('./getUserPost');
const getUserName = require('./getUserName');
const getUserNameByName = require('./getUserNamebyName');

module.exports = {
  addusers,
  getUser,
  getHash,
  getPostDB,
  insertPost,
  getProfile,
  getUserPosts,
  getUserName,
  getUserNameByName,
};
