const { notFound, internalServer } = require('./error');
const add = require('./addUser');

module.exports = { notFound, internalServer, add };
