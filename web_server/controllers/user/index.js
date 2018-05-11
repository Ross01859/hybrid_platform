/*
 * @Author: wangruishan
 * @Date:   2018-05-08 22:17:43
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-10 18:18:51
 */
const bcrypt = require( "bcrypt-nodejs" );
const jwt = require( "jsonwebtoken" );
const _model = require( '../../models/action' );
const userSequelize = require( '../../models/index' ).user;
module.exports = {

    init: async function( req, res ) {
        var body = { error_code: 0, result: '' };
        try {
            var result = await _model.findAll( userSequelize );
            body.result = result;
        } catch ( e ) {
            body.error_code = 1;
            body.result = e.message;
        } finally {
            res.json( body );
        }
    },
    login: async function( req, res, next ) {
        var param = req.query || req.params || req.body
        var body = { error_code: 0, result: '' };
        try {
            var condition = {
                attributes: [ 'username', 'password' ],
                where: {
                    username: param.username
                }
            }
            var user = await _model.findOne( userSequelize, condition );
            if ( !!user ) {
                if ( bcrypt.compareSync( param.password, user.password ) ) {
                    // if (req.body.password === user.password) {
                    var token = jwt.sign( { username: user.username }, req.session.secret, {
                        expiresIn: 60 * 30
                    } )
                    body.result = user.username;
                    body.token = token;
                } else {
                    body.error_code = 1;
                    body.result = '密码输入有误';
                }
            } else {
                body.error_code = 1;
                body.result = '用户不存在,请先注册';
            }
        } catch ( e ) {
            body.error_code = 1;
            body.result = e.message;
        } finally {
            res.json( body );
        }
    },
    register: async function( req, res ) {
        var param = req.query || req.params || req.body
        var body = { error_code: 0, result: '' };
        try {
            var attr = {
                username: param.username,
                password: param.password,
                sex: param.sex || null,
                age: param.age || null,
                tel: param.tel || null,
            }
            var result = await _model.create( userSequelize, attr );
            body.result = result;
        } catch ( e ) {
            body.error_code = 1;
            body.result = e.message;
        } finally {
            res.json( body );
        }
    },
    withdraw: async function( req, res ) {
        var body = { error_code: 0, result: '' };
        try {
            var result = await _model.deleteAll( userSequelize, { where: { crealname: req.body.crealname } } );
            body.result = result;
        } catch ( e ) {
            body.error_code = 1;
            body.result = e.message;
        } finally {
            res.json( body );
        }
    },
}