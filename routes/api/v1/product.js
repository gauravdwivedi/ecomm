const express = require('express');
const router = express.Router();

const productController = require('../../../controllers/api/v1/productController');


//Add a new product in database
router.post('/create', productController.create);

//get all products
router.get('/', productController.getAllProducts);

//update quantity of a product 
router.post('/:id/update_quantity/:number', productController.update);

//delete a product from database 
router.delete('/:id',productController.delete);

module.exports = router;