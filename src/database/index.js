const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Category = require('../models/Category');
const Product = require('../models/Product');

const connection = new Sequelize(dbConfig);

Category.init(connection);
Product.init(connection);

Category.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;