const express = require('express');
const routes = express.Router();

const CategoryController = require('./controllers/CategoryController');
const ProductController = require('./controllers/ProductController');

//Categories
routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.list);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.destroy);

//Products
routes.post('/categories/:categories_id/products', ProductController.store);
routes.get('/products', ProductController.list);
routes.get('/categories/:categories_id/products', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;