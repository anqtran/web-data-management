var express    = require('express');
var app        = express();
var con        = require('./connected');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/user', function(req, res){
    var sql = 'SELECT * FROM user';
    con.query(sql, function(err, rows){
       if(err){
           res.json({"Error": true, "Message":"Error Execute Sql"});
       }else{
           res.json({"Error": false, "Message": "Success", "user" : rows});
           console.log(res.user);
       }
    });
})

app.post('/insert', function(req, res){
    var sql  = 'INSERT INTO user(Username, Email, Hashed_Password,UserType) VALUES (?, ?, ?, ?)';
    var body = [req.body.username, req.body.email,req.body.hashpassword,req.usertype];
    con.query(sql, body, function(err){
       if(err){
           res.json({"Error": true, "Message": "SQL Error"});
       } else {
           res.json({"Error": false, "Message": "Success"})
       }
    });
})

app.get('/user/:id_user', function(req, res){
    var sql       = 'SELECT * FROM user WHERE Username = ?';
    var id_movie  = [req.params.id_user];
    con.query(sql, id_movie, function(err, row){
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

// need to be changed
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


app.listen(3000);