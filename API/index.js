const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = 1000;
const cors = require('cors');
app.use(cors());

require('./DB/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('port is running', PORT);
  });