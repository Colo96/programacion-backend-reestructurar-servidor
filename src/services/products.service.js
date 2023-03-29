const productsDao = require("../models/products/products.dao");

class ProductsService {
    static async create(payload) {
        if (!payload.name || !payload.price) {
            throw new Error('Missing fields');
        }
        const product = {
            ...payload,
            active: true
        }
        const response = await productsDao.create(product);
        return response;
    }

    static async getAll() {
        return await productsDao.getAll();
    }

    static async getById(id) {
        if (!id || isNaN(id)) {
            throw new Error('Id not valid');
        }
        const product = await productsDao.getById(+id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }
}

module.exports = ProductsService;