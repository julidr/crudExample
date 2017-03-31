var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '172.30.10.27',
    user: 'prueba',
    password: 'prueba',
    database: 'store'
});

var categoriesModel = {};

categoriesModel.createCategory = function(categoryData, callback){
    if(connection){
        connection.query('INSERT INTO categories SET ?',  categoryData, function(error, result){
            if(error){
                callback(error, null);
            } else {
                callback(null, {id:result.insertId});
            }
        });
    }
}

categoriesModel.listCategories = function(callback){
    if(connection){
        connection.query('SELECT * FROM categories', function(error, result){
            if(error){
                callback(error, result);
            }else{
                callback(null, result);
            }
        });
    }
}

categoriesModel.deleteCategory = function(id, callback){
        if(connection){
        connection.query('DELETE FROM categories WHERE category_id ='+connection.escape(id), function(error, result){
            if(error){
                callback(error, null);
            } else {
                callback(null, {id:0});
            }
        });
    }
}

module.exports = categoriesModel;