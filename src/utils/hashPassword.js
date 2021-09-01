const bcrypt = require('bcryptjs');

const hashPassword = (password) => bcrypt.hash(password, 10);
const comparPassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

module.exports = { hashPassword, comparPassword };
