/**
 * Created by lenovo on 2017/7/27.
 */
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var pool = mysql.createPool({
    host:'127.0.0.1',//localhost
    user:'root',//用户名
    password:'',//密码
    database:'components',//数据库
    port:3306
});
router.get('/substance',function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    pool.query('select * from substance',function (err,rows,fields) {
        if(err)throw err;
        res.send(rows);
    });

// res.send(
//      [{name:'nange',title:'11111'},
//       {name:'aa',title:'22222'},
//       {name:'bb',title:'33333'},
//       {name:'cc',title:'44444'},
//       {name:'dd',title:'55555'}]
// );
});
module.exports=router;