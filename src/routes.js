const express = require('express');
const routes = express.Router();

const CategoryController = require('./controllers/CategoryController');

routes.post('/categories/new', CategoryController.store);
routes.get('/categories', CategoryController.list);
routes.put('/categories/update/:id', CategoryController.update);
routes.delete('/categories/destroy/:id', CategoryController.destroy);

module.exports = routes;