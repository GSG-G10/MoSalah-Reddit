const router = require('express').Router();
const { join } = require('path');
const {
  notFound, internalServer, add, login, getPost, addPost, logout,
} = require('../controllers');

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signUp.html'));
});

router.get('/addpost', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'addPost.html'));
});
router.get('/posts', getPost);
router.post('/post', addPost);
router.post('/signup', add);
router.post('/login', login);
router.post('/logout', logout);

router.use(notFound);
router.use(internalServer);

module.exports = router;
