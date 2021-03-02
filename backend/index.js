const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Movie = require('./src/models/movieModel');
const movieRouter = require('./src/routes/movieRoutes')(Movie);

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3075;

const DBURL = process.env.simplifica || 'mongodb://localhost/simplifica';
mongoose.connect(DBURL, { useNewUrlParser: true }, { useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/movies', movieRouter);

app.listen(PORT, () => {
  debug(`Server is running on port ${chalk.blue(PORT)}`);
});
