class ProductsDao {
    constructor() {
        this.products = [];
    }

    async create(payload) {
        const product = {
            id: this.products.length + 1,
            ...payload
        }
        this.products.push(product);
        return product;
    }

    async getAll() {
        return this.products;
    }

    async getById(id) {
        const product = this.products.find(product => product.id === id);
        return product;
    }
}

const productsDao = new ProductsDao();
module.exports = productsDao;