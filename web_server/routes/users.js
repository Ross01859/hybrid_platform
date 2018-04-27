var express = require('express')
var router = express.Router()
//引入mysql模块
var mysql = require('mysql')
var db = require('../config/db')
var sql = require('../config/Sql')
var user_module = require('../modules/users/user_module')
//创建连接池
//响应json
var responseJSON = function(res, ret) {
    if (ret.length == 0) {
        res.json({
            error_code: '-200',
            msg: '操作失败'
        })
    } else {
        res.json(ret)
    }
}
// 添加用户
router.get('/login', function(req, res, next) {
    var param = req.query || req.params
    db.query(sql.usersql.login, [param.username, param.password], function(err, result) {
        // console.log(Array.isArray(result))
        if (Array.isArray(result)) {
            console.log(result === undefined)
            if (result.length != 0) {
                result = {
                    error_code: 200,
                    msg: '登陆成功',
                }
                // 以json形式，把操作结果返回给前台页面     
                return responseJSON(res, result)
            }
            if (result.length == 0) {
                // 以json形式，把操作结果返回给前台页面     
                return responseJSON(res, result)
            }
        }


    })
})
// 添加用户
router.post('/login', function(req, res, next) {
    var param = req.query || req.params
    db.query(sql.usersql.login, [param.username, param.password], function(err, result) {
        // console.log(Array.isArray(result))
        if (Array.isArray(result)) {
            console.log(result === undefined)
            if (result.length != 0) {
                result = {
                    error_code: 200,
                    msg: '登陆成功',
                }
                // 以json形式，把操作结果返回给前台页面     
                return responseJSON(res, result)
            }
            if (result.length == 0) {
                // 以json形式，把操作结果返回给前台页面     
                return responseJSON(res, result)
            }
        }


    })
})
// 添加用户
router.get('/add_u', function(req, res, next) {
    db.query(sql.usersql.queryAll, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            result = {
                error_code: 200,
                msg: '获取成功',
                data: result
            }
        }
        // 以json形式，把操作结果返回给前台页面     
        responseJSON(res, result)
    })
})
// 批量添加用户
router.get('/add_us', function(req, res, next) {
    db.query(sql.usersql.queryAll, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            result = {
                error_code: 200,
                msg: '获取成功',
                data: result
            }
        }
        // 以json形式，把操作结果返回给前台页面     
        responseJSON(res, result)
    })
})
// 删除用户
router.get('/del_u', function(req, res, next) {
    db.query(sql.usersql.queryAll, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            result = {
                error_code: 200,
                msg: '获取成功',
                data: result
            }
        }
        // 以json形式，把操作结果返回给前台页面     
        responseJSON(res, result)

    })

})
// 更新用户
router.get('/upd_u', function(req, res, next) {
    db.query(sql.usersql.queryAll, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            result = {
                error_code: 200,
                msg: '获取成功',
                data: result
            }
        }
        // 以json形式，把操作结果返回给前台页面     
        responseJSON(res, result)

    })

})
// 查看用户列表
router.get('/ser_us', function(req, res, next) {
    db.query(sql.usersql.queryAll, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            result = {
                error_code: 200,
                msg: '获取成功',
                data: result
            }
        }
        // 以json形式，把操作结果返回给前台页面     
        responseJSON(res, result)
    })
})
// 查看单用户
router.get('/ser_u', function(req, res, next) {
    db.query(sql.usersql.queryAll, function(err, result) {
        if (result) {
            result = {
                error_code: 200,
                msg: '获取成功',
                data: result
            }
        }
        // 以json形式，把操作结果返回给前台页面     
        return responseJSON(res, result)
    })

})
module.exports = router