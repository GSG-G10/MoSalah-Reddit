const path = require('path');
const express = require('express');
const compression = require('compression');
const cookie = require('cookie-parser');
const router = require('./routers');

const app = express();
app.use(cookie());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.disable('x-powerd-by');
app.use(express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));

app.use(router);

app.set('port', process.env.PORT || 5050);
module.exports = app;
