const joi = require('joi');

const signUpSchema = joi.object({
  user_name: joi.string().alphanum().lowercase().min(4)
    .max(15)
    .required(),
  email: joi.string().email().lowercase().required(),
  password: joi.string()
    .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{9,}$'))
    .required(),
  confermPassword: joi.ref('password'),

});

module.exports = signUpSchema;
