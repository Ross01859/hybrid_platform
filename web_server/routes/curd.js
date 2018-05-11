const express = require('express')
const router = express.Router()
const URL = require('url')
const db = require('../config/db.js')

//SQL语句
//增

router.get('/c', function(req, res, next) {
    db.query(sql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message)
            return
        }
        //把搜索值输出
        res.send(result)
    })
})
//更新
let modSql = 'UPDATE websites SET name = ?,sex = ?,age=?,tel=? WHERE name = ?'
let modSqlParams = ['王诗龄', '女', '14', '18893458694', '阿斯顿']
router.get('/u', function(req, res, next) {
    db.query(modSql, modSqlParams, function(err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message)
            return
        }
        console.log('--------------------------UPDATE----------------------------')
        console.log('UPDATE affectedRows', result.affectedRows)
        console.log('-----------------------------------------------------------------\n\n')
        res.send(result)

    })
})
//读
let sql = 'SELECT * FROM user'
router.get('/r', function(req, res, next) {
    //查
    db.query(sql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message)
            return
        }
        //把搜索值输出
        res.send(result)
    })
})
//删除
router.get('/d', function(req, res, next) {
    //查
    db.query(sql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message)
            return
        }
        //把搜索值输出
        res.send(result)
    })
})
module.exports = router