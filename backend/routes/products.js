const router = require('express').Router()
const productController = require('../controllers/productsControllers');

router.get('/', productController.getAllProduct)
router.get('/:id', productController.getProducts)
router.get('/search/:key', productController.searchProduct)
router.get('/', productController.createProduct)

module.exports = router