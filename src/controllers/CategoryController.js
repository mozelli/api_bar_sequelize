const Category = require('../models/Category');

module.exports = {
	//Create - Method POST
	async store(req, res) {
		const { name } = req.body;
		const category = await Category.create({ name });
		return res.json(category);
	},
	//Read All - Method GET
	async list(req, res) {
		const categories = await Category.findAll();
		return res.json(categories);
	},
	//Update - Method PUT
	async update(req, res) {
		const category = await Category.update(
			req.body, {
				where: {
					id: req.params.id
				}
			}
		);
		return res.json(category);
	},
	//Delete - Method DELETE
	async destroy(req, res) {
		const { id } = req.params;

		const category = await Category.destroy({
			where: {
				id
			}
		});

		return res.json(category);
	}
}