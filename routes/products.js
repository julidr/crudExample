var express = require('express');
var router = express.Router();
var categoriesModel = require('../models/categories');

router.get('/createProduct', function(req, res, next){
    res.render('products/createProduct');
});

router.get('/getCategories',function(req, res, next){
    categoriesModel.listCategories(function(error, data){
        if(error){
            res.status(400).json({'error': "Request Not Found"});
        }else{
            var categoriesList = data || [];
            res.status(200).json(categoriesList);
        }
    });
});

module.exports = router;