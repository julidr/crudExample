var express = require('express');
var router = express.Router();
var categoriesModel = require('../models/categories');

/* GET home page. */
router.get('/createCategory', function(req, res, next) {
  res.render('categories/createCategory');
});

router.post('/createCategory', function(req, res){
  var categoryData ={
    category_name: req.body.category_name
  };
  categoriesModel.createCategory(categoryData, function(error, response){
    if(error){
      console.log(error);
      res.render('categories/createCategory',{mensaje: "La categoria no fue Creada"});
    } else {
      console.log(response);
      res.render('categories/createCategory',{mensaje: "La categoria fue creada"});
    }
  });
});

module.exports = router;
