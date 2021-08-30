const express = require('express');

const router = express.Router();
const { notFound, internalServer } = require('./error');

router.use(notFound);
router.use(internalServer);

module.exports = router;
