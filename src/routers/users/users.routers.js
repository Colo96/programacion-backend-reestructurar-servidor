const Router = require('express');
const UsersController = require('../../controllers/users.controllers');

const router = Router();

router.get('/', UsersController.getAll);
router.get('/:id', UsersController.getById);
router.post('/', UsersController.create);

module.exports = router;