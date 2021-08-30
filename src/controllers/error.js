/* eslint-disable no-unused-vars */
const path = require('path');

function notFound(req, res) {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
}
function internalServer(error, req, res, next) {
  res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
}

module.exports = { notFound, internalServer };
