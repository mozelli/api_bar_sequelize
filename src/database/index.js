const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Category = require('../models/Category');

const connection = new Sequelize(dbConfig);

Category.init(connection);

module.exports = connection;