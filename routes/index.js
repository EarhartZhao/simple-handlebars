var express = require('express');
var router = express.Router();
var getCase = require('../lib/dealData');

// 允许跨域访问
router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//页面路由
router.get('/', function (req, res, next) {
    res.type('html');
    res.render('index', {
        css: ['/css/index.css'],
        js: ['/js/index.js'],
        title: '首页',
        data: {
            index: 1
        }
    });
});
router.get('/index', function (req, res, next) {
    res.type('html');
    res.render('index', {
        css: ['/css/index.css'],
        js: ['/js/index.js'],
        title: '首页',
        data: {
            index: 1
        }
    });
});
router.get('/case', function (req, res, next) {
    res.type('html');
    res.render('case', {
        css: ['/css/case.css'],
        js: ['/js/case.js'],
        title: '列表页',
        data: {
            index: 2
        }
    });
});
router.get('/getCase', function (req, res, next) {
    var resp = {
        data: getCase.dealData(req.query.name)
    }
    res.end(JSON.stringify(resp));
});


module.exports = router;