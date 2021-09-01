const { notFound, internalServer } = require('./error');
const add = require('./addUser');
const login = require('./login');
const getPost = require('./getPost');

module.exports = {
  notFound, internalServer, add, login, getPost,
};
