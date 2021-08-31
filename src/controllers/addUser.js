/* eslint-disable no-console */
const signUpSchema = require('../utils/validation');
const addusers = require('../database/queries/addUser');
const hashPassword = require('../utils/hashPassword');

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
      .then(() => res.redirect('/login'))
      .catch((err) => console.log(err));
  }
};

module.exports = add;
