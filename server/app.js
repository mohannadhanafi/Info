const express = require('express');
const path = require('path');5
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const controller = require('./controller');

const app = express();


app.set('port', process.env.PORT || 3000)
  .disable('x-powered-by')
  .use(express.static(path.join(__dirname, '..', 'public')))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/api/v1', controller)
  .use(express.static(path.join(__dirname, '..', 'client', 'build')))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });

module.exports = app;
