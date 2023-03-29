class UsersDao {
    constructor() {
        this.users = [];
    }

    async create(payload) {
        const user = {
            id: this.users.length + 1,
            ...payload
        }
        this.users.push(user);
        return user;
    }

    async getAll() {
        return this.users;
    }

    async getById(id) {
        const user = this.users.find(user => user.id === id);
        return user;
    }
}

const usersDao = new UsersDao();
module.exports = usersDao;