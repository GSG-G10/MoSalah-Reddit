const { notFound, internalServer } = require('./error');
const add = require('./addUser');
const login = require('./login');

module.exports = {
  notFound, internalServer, add, login,
};
