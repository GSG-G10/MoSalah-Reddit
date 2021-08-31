const router = require('express').Router();
const { join } = require('path');
const { notFound, internalServer, add } = require('../controllers');

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signUp.html'));
});

router.post('/signup', add);

router.use(notFound);
router.use(internalServer);

module.exports = router;
