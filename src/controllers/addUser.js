/* eslint-disable no-console */
const jwt = require('jsonwebtoken');
const { signUpSchema } = require('../utils/validation');
const addusers = require('../database/queries/addUser');
const { hashPassword } = require('../utils/hashPassword');

// eslint-disable-next-line no-unused-vars
const add = (req, res) => {
  const { user_name: username, email, password } = req.body;
  console.log(req.body);
  const { error } = signUpSchema.validate(req.body);
  if (error) {
    console.log(error);
  } else {
    console.log('tesssssssss');
    hashPassword(password).then((hashedPassword) => addusers(username, email, hashedPassword))
      .then(() => jwt.sign({ is_user: true }, 'sha125', (errors, token) => {
        if (errors) {
          console.log(error);
          res.status(500).json({ msg: 'internal server error !' });
        } else {
          res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 900000 }).cookie('user', true).redirect('/');
        }
      }))
      .catch((err) => res.json(err));
  }
};

module.exports = add;
