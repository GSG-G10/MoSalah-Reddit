/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken');
const { getUser, getHash, getUserName } = require('../database/queries');
const { comparPassword } = require('../utils/hashPassword');
const { loginSchema } = require('../utils/validation');

const login = (req, res) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate(req.body);
  if (error) {
    res.json({ message: error.details[0].message });
  } else {
    getUser(email)
      .then((result) => {
        if (result.rowCount) {
          getHash(email)
            .then((hashedPassword) => comparPassword(password, hashedPassword.rows[0].password));
          getUserName(email)
            .then((resalus) => resalus.rows[0].user_name)
            .then((userName) => {
              console.log(userName);
              jwt.sign({ is_user: true, user: userName },
                process.env.SECRET_KEY, (errors, token) => {
                  if (errors) {
                    console.log(error);
                    res.status(500).json({ msg: 'internal server error !' });
                  } else {
                    res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 900000 })
                      .cookie('user', userName)
                      .cookie('is_user', true)
                      .redirect('/');
                  }
                });
            });
        } else {
          res.json({ message: 'Email or Password are wrong Try Again' });
        }
      })
      .catch((err) => res.json(err));
  }
};

module.exports = login;
