const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3050;

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const DBURL = 'mongodb://localhost/omdbdb';
mongoose.connect(DBURL, { useNewUrlParser: true }, { useUnifiedTopology: true });

app.listen(PORT, () => {
  debug(`Server is running on port ${chalk.blue(PORT)}`);
});
