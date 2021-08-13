const express = require('express');
const registerRouter = require('./router');

const app = express();
const port = 7000;

registerRouter(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${7000}`);
});
