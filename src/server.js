const path = require('path');
const express = require('express');
const compression = require('compression');
const router = require('./routers');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.disable('x-powerd-by');
app.use(express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));

app.use(router);

app.set('port', process.env.PORT || 9000);
module.exports = app;
