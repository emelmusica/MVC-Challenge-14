// Import required packages
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');