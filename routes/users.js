var userDao = require('../dao/userDao');
var express = require('express');
var router = express.Router();
var mysql = require("mysql");

/**
 * 用户增加的路由控制接口
 */
router.get('/addUserAction', function (req, res, next) {
  userDao.addUserAction(req, res, next)
});

router.get('/showAll', function (req, res, next) {
  userDao.showAllAction(req, res, next)
});

/* GET users listing. */
router.get('/', function (req, res, next) {

  var con = mysql.createConnection({
    connectionLimit: 10,
    host: '192.168.3.93',
    user: 'rambo',
    password: '11111111',
    port: '3306',
    database: 'mockschema'
  });

  con.connect(function (err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('connecting success');
  });

  con.query('SELECT * FROM user', [], function (err, results, fields) {
    if (err) {
      return console.log('error:' + err.message);
    }
    if (results.length > 0) {
      res.send(results);
    }
  });

  con.end(function (err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
  });

});

module.exports = router;
