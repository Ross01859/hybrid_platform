/*
 * @Author: wangruishan
 * @Date:   2018-05-09 18:14:31
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-10 19:13:57
 */

const _model = require( '../../models/action' );
const bugsSequelize = require( '../../models/index' ).bugs;
module.exports = {
    init: async function( req, res ) {
        var body = { error_code: 0, result: '' }
        try {
            var condition = {
                attributes: [ 'id', 'bug_name', 'bug_type', 'bug_title', 'bug_des', 'bug_img', 'author', 'author_wx', 'author_qq', 'author_tel', 'created_at', 'updated_at' ],
            };
            var result = await _model.findAll( bugsSequelize, condition );
            body.result = result;
        } catch ( e ) {
            body.error_code = 1
            body.result = e.message
        } finally {
            res.json( body )
        }
    },
    add: async function( req, res, next ) {
        let param = req.body || req.query || req.params
        var body = { error_code: 0, result: '' }
        try {
            let attr = {
                bug_name: param.name || '未定义',
                bug_type: param.type || 0,
                bug_title: param.title || 'bugs',
                bug_des: param.describe || '这是一个bug',
                bug_img: param.img || null,
                author: param.author || 'wers',
                author_wx: param.wx || null,
                author_qq: param.qq || null,
                author_tel: param.tel || null,
            }
            var result = await _model.create( bugsSequelize, attr )
            body.result = result ? '添加成功' : '添加失败'
        } catch ( e ) {
            body.error_code = 1
            body.result = e.message
        } finally {
            res.json( body )
        }
    },
    del: async function( req, res, next ) {
        let param = req.body || req.query || req.params
        var body = { error_code: 0, result: '' }
        try {
            var result = await _model.findOne( bugsSequelize )
            body.result = result
        } catch ( e ) {
            body.error_code = 1
            body.result = e.message
        } finally {
            res.json( body )
        }
    },
    sea: async function( req, res, next ) {
        var body = { error_code: 0, result: '' }
        try {
            var result = await _model.findOne( bugsSequelize )
            body.result = result
        } catch ( e ) {
            body.error_code = 1
            body.result = e.message
        } finally {
            res.json( body )
        }
    },
    rev: async function( req, res, next ) {
        var body = { error_code: 0, result: '' }
        try {
            var result = await _model.findOne( bugsSequelize )
            body.result = result
        } catch ( e ) {
            body.error_code = 1
            body.result = e.message
        } finally {
            res.json( body )
        }
    }
}