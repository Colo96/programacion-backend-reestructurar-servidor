const ProductsService = require("../services/products.service");

class ProductsController {
    static async create(req, res, next) {
        const payload = req.body;
        try {
            const response = await ProductsService.create(payload);
            return res.status(201).json({
                success: true,
                payload: response
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    static async getAll(req, res, next) {
        try {
            const response = await ProductsService.getAll();
            return res.status(201).json({
                success: true,
                payload: response
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    static async getById(req, res, next) {
        const { id } = req.params;
        try {
            const response = await ProductsService.getById(id);
            return res.status(201).json({
                success: true,
                payload: response
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = ProductsController;