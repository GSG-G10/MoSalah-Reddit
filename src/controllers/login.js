/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const getUser = require('../database/queries/getUser');
const getHash = require('../database/queries/getHash');
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
            .then((hashedPassword) => comparPassword(password, hashedPassword.rows[0].password)
              .then(() => res.redirect('/')));
        } else {
          res.json({ message: 'Email or Password are wrong Try Again' });
        }
      })
      .catch((err) => res.json(err));
  }
};

module.exports = login;
