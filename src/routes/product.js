const express = require('express')
const router = express.Router()

const product = require('../controllers/product')

router.get('/', product.all)
router.get('/:id', product.show)
router.post('/', product.store)
router.put('/:id', product.update)
router.delete('/:id', product.destroy)

module.exports = router