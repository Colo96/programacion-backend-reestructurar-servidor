const UsersService = require("../services/users.service");

class UsersController {
    static async create(req, res, next) {
        const payload = req.body;
        try {
            const response = await UsersService.create(payload);
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
            const response = await UsersService.getAll();
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
            const response = await UsersService.getById(id);
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

module.exports = UsersController;