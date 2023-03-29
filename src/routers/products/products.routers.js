const Router = require('express');
const ProductsController = require('../../controllers/products.controller');

const router = Router();

router.get('/', ProductsController.getAll);
router.get('/:id', ProductsController.getById);
router.post('/', ProductsController.create);

module.exports = router;