const usersDao = require("../models/users/users.dao");

class UsersService {
    static async create(payload) {
        if (!payload.name || !payload.lastname) {
            throw new Error('Missing fields');
        }
        const user = {
            ...payload,
            active: true
        }
        const response = await usersDao.create(user);
        return response;
    }

    static async getAll() {
        return await usersDao.getAll();
    }

    static async getById(id) {
        if (!id || isNaN(id)) {
            throw new Error('Id not valid');
        }
        const user = await usersDao.getById(+id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
}

module.exports = UsersService;