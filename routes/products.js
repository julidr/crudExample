var express = require('express');
var router = express.Router();
var categoriesModel = require('../models/categories');
var productsModel = require('../models/products');

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

router.post("/createProduct", function(req, res, next){
    
    var productsData = JSON.parse(req.body.info);
    var product = {
        name: productsData.name,
        price: productsData.price,
        available: productsData.available,
        best_seller: productsData.best_seller,
        image: productsData.image,
        description: productsData.description
    };
    productsModel.createProduct(product, function(error, data){
        var idProduct = data.id;
        for(i = 0; i<productsData.categories.length; i++){
            var productsCategory = {
                products_id: idProduct,
                category_id: productsData.categories[i].category_id
            };
            productsModel.createProductCategory(productsCategory, function(error, data){
                if(error){
                    console.log(error);
                }else{
                    console.log(data);
                }
            });
        }
    });
    res.sendStatus(200);
});

router.get("/listProducts", function(req, res){
      productsModel.listProducts(function(error, response){
        if(error){
            console.log("Error:!!!" + error);
            res.render('products/listProducts', {listProducts: [], error: "No hay registro de Productos"});
        } else{
            console.log("Todo bien hasta ahora");
            var listProducts = [];
            listProducts = response || [];
            console.log("Respuesta:" + response);
            res.render('products/listProducts', {listProducts: listProducts});
            console.log("Re dirigiendo");
        }
    });
});

module.exports = router;