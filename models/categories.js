var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
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

module.exports = categoriesModel;