/**
 * Created by lenovo on 2017/7/17.
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
router.get('/text',function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    pool.query('select * from lunbo',function (err,rows,fields) {
        if(err)throw err;
        res.send(rows);
    });
});
module.exports=router;