/** ---- DO NOT MODIFY THIS FILE ---- **/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

const treats = require('./routes/treats.router');

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/treats', treats);

app.listen(PORT, () => {
  console.log('Now listening on port: ', PORT);
});