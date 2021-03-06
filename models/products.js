var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '172.30.10.27',
    user: 'prueba',
    password: 'prueba',
    database: 'store'
});

var productsModel = {};

productsModel.createProduct = function(productData, callback){
    if(connection){
        connection.query('INSERT INTO products SET ?',  productData, function(error, result){
            if(error){
                callback(error, null);
            } else {
                callback(null, {id:result.insertId});
            }
        });
    }
}

productsModel.createProductCategory = function(productCategoryData, callback){
    if(connection){
        connection.query('INSERT INTO products_categories SET ?',  productCategoryData, function(error, result){
            if(error){
                callback(error, null);
            } else {
                callback(null, {id:result.insertId});
            }
        });
    }
}

productsModel.listProducts = function(callback){
    if(connection){
        connection.query('SELECT * FROM products', function(error, result){
            if(error){
                callback(error, result);
            }else{
                callback(null, result);
            }
        });
    }
}

productsModel.listCategoriesProducts = function(callback){
        if(connection){
        connection.query('SELECT * FROM products_categories', function(error, result){
            if(error){
                callback(error, result);
            }else{
                callback(null, result);
            }
        });
    }
}

module.exports = productsModel;