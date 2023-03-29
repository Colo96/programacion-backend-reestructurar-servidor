const Router = require('express');
const usersRouter = require('./users/users.routers');
const productsRouter = require('./products/products.routers');

const router = Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);

module.exports = router;