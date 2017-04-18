var express = require('express');
var router = express.Router();
var categoriesModel = require('../models/categories');

router.get('/createProduct', function(req, res, next){
    res.render('products/createProduct');
});

module.exports = router;