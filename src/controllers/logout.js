const logout = (req, res) => {
  res.clearCookie('token');
  res.clearCookie('user');
  res.redirect('/');
};
module.exports = logout;
