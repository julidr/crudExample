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

router.get('/listCategories', function(req, res) {
  categoriesModel.listCategories(function(error, response){
    if(error){
      console.log(error);
      res.render('categories/listCategories', {listCategories: [], error: "No hay registro de categorias"});
    } else{
      var listCategories = [];
      listCategories = response || [];
      console.log(response);
      res.render('categories/listCategories', {listCategories: listCategories});
    }
  });
});

router.post('/deleteCategory', function(req, res){
  var id = req.body.id
  categoriesModel.deleteCategory(id, function(error, response){
    if(error){
      console.log(error);
      res.render('categories/listCategories', {listCategories: listCategories, error: "Error en eliminar Categoria"});
    } else {
      console.log(response);
          categoriesModel.listCategories(function(error, response){
              if(error){
                  console.log(error);
                  res.render('categories/listCategories', {listCategories: [], error: "No hay registro de categorias"});
              } else{
                  var listCategories = [];
                  listCategories = response || [];
                  console.log(response);
                  res.render('categories/listCategories', {listCategories: listCategories});
              }
            });
    }
  });
});

module.exports = router;
