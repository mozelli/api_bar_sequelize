const Product = require('../models/Product');
const Category = require('../models/Category');

module.exports = {
	//Create - Method POST
	async store(req, res) {
		const { categories_id } = req.params;
		const { name } = req.body;
		
		const category = await Category.findByPk(categories_id);

		if (!category) {
			return res.status(400).json({ error: 'Category not found.' });
		}

		const product = await Product.create({ 
			name, 
			categories_id
		});
		return res.json(product);
	},
	//Show products by categories ID
	async show(req, res) {
		const { categories_id } = req.params;

		const category = await Category.findByPk(categories_id, {
			include: { 
				association: 'products' 
			}
		});

		return res.json(category);
	},
	//Read All - Method GET
	async list(req, res) {
		products = await Product.findAll();
		return res.json(products);
	},
	//Update - Method PUT
	async update(req, res) {
		const product = await Product.update(
			req.body, {
				where: {
					id: req.params.id
				}
			}
		);
		return res.json(product);
	},
	//Delete - Method DELETE
	async destroy(req, res) {
		const result = await Product.destroy({
			where: {
				id: req.params.id
			}
		});

		return res.json(result);
	}
}