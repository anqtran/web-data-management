var express    = require('express');
var app        = express();
var connection = require('./connected');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// console.log("get hereeee");

//---------------------------------------------------------//

// DISPLAY TABLES
// User Table
app.get('/user', function(req, res){
    var sql = 'SELECT * FROM user';
    // var sql = 'show tables';
    connection.query(sql, function(err, rows){
       if(err){
           res.json({"Error": true, "Message":"Error Execute Sql"});
       }else{
           res.json({"Error": false, "Message": "Success", "user" : rows});
           console.log(res.user);
       }
    });
})

// Property Table
app.get('/property', function(req, res){
    var sql = 'SELECT * FROM property';
    connection.query(sql, function(err, rows){
       if(err){
           res.json({"Error": true, "Message":"Error Execute Sql"});
       }else{
           res.json({"Error": false, "Message": "Success", "user" : rows});
           console.log(res.user);
       }
    });
})

// FarmItem Table
app.get('/farmItem', function(req, res){
    var sql = 'SELECT * FROM farmItem';
    connection.query(sql, function(err, rows){
       if(err){
           res.json({"Error": true, "Message":"Error Execute Sql"});
       }else{
           res.json({"Error": false, "Message": "Success", "user" : rows});
           console.log(res.user);
       }
    });
})

// Has Table
app.get('/has', function(req, res){
    var sql = 'SELECT * FROM has';
    connection.query(sql, function(err, rows){
       if(err){
           res.json({"Error": true, "Message":"Error Execute Sql"});
       }else{
           res.json({"Error": false, "Message": "Success", "user" : rows});
           console.log(res.user);
       }
    });
})

// Visit Table
app.get('/visit', function(req, res){
    var sql = 'SELECT * FROM visit';
    connection.query(sql, function(err, rows){
       if(err){
           res.json({"Error": true, "Message":"Error Execute Sql"});
       }else{
           res.json({"Error": false, "Message": "Success", "user" : rows});
           console.log(res.user);
       }
    });
})

//---------------------------------------------------------//

// EXAMPLES
// post = insert into
app.post('/insert', function(req, res){
    var sql  = 'INSERT INTO user(Username, Email, Hashed_Password,UserType) VALUES (?, ?, ?, ?)';
    var body = [req.body.username, req.body.email,req.body.hashpassword,req.usertype];
    connection.query(sql, body, function(err){
       if(err){
           res.json({"Error": true, "Message": "SQL Error"});
       } else {
           res.json({"Error": false, "Message": "Success"})
       }
    });
})

// get = select
app.get('/user/:id_user', function(req, res){
    var sql       = 'SELECT * FROM user WHERE Username = ?';
    var id_movie  = [req.params.id_user];
    connection.query(sql, id_movie, function(err, row){
        //var num = row.affectedRows;
        if(err){
            res.json({"Error": true, "Message":"Error Execute Sql"});
        }else{
            //if(num == 1) {
                res.json({"Error": false, "Message": "Success", "movie": row});
           // }else{
                //res.json({"Error": false, "Message": "Not Found"});
            //}
        }
    })

})

// put = update
app.put('/update', function(req, res){
    var sql  = 'UPDATE t_movie SET movie_title = ?, movie_rate = ? WHERE id_movie = "'+req.body.id_movie+'"';
    var body = [req.body.movie_title, req.body.movie_rate];
    con.query(sql, body, function(err){
       if(err){
           res.json({"Error": true, "Message": "Error execute sql"});
       } else {
           res.json({"Error": false, "Message": "Success"});
       }
    });
})

// delete = delete from
app.delete('/delete/:id_movie', function(req, res){
   var sql      = 'DELETE FROM t_movie WHERE id_movie = ?';
   var id_movie = [req.params.id_movie];
   con.query(sql, id_movie, function(err){
       if(err){
           res.json({"Error": true, "Message": "Error execute sql"});
       } else {
           res.json({"Error": false, "Message": "Success"});
       }
   });
});

//---------------------------------------------------------//

// Test Queries -- MINE
app.get('/test', function(req, res){
    var sql = 'INSERT INTO user (Email, Username, Password, UserType) VALUES("abc@gmail.com", "xyz", "d68fae04506bde7857ff4aa40ebad49d", "VISITOR")';
    connection.query(sql, function(err, rows){
       if(err){
           res.json({"Error": true, "Message":"Error Execute Sql"});
       }else{
           res.json({"Error": false, "Message": "Success", "user" : rows});
           console.log(res.user);
       }
    });
})

//---------------------------------------------------------//


app.listen(3000);