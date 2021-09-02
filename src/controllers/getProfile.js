const { getProfile } = require('../database/queries');

const profile = (req, res) => {
  const { user } = req.cookies;
  getProfile(user)
    .then((result) => res.json(result.rows))
    .catch((err) => res.json(err));
};

module.exports = profile;
