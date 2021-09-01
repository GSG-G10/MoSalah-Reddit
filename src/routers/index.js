const router = require('express').Router();
const { join } = require('path');
const {
  notFound, internalServer, add, login, getPost,
} = require('../controllers');

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signUp.html'));
});
router.get('/post', getPost);
router.post('/signup', add);
router.post('/login', login);

router.use(notFound);
router.use(internalServer);

module.exports = router;
