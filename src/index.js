/* eslint-disable no-console */
require('env2')('.env');
const app = require('./server');

const port = app.get('port');
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}}`);
});
