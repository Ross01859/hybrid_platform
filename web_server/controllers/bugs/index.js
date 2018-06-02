/*
 * @Author: wangruishan
 * @Date:   2018-05-09 18:14:31
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-15 14:24:03
 */

const _model = require( '../../models/action' );
const bugsSequelize = require( '../../models/index' ).bugs;
module.exports = {
    init: async function ( req, res ) {
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
    add: async function ( req, res, next ) {
        let param = JSON.parse( req.body.data || req.query.data || req.params.data )
        // let param = str.parseJSON()
        var body = { error_code: 0, result: '' }
        // console.log( param.name )
        try {
            let attr = {
                bug_name: param.name || '未定义',
                bug_type: param.type || 0,
                solve_way: param.solve_way || '暂无方法',
                bug_des: param.desc || '这是一个bug',
                bug_img: JSON.stringify( param.fileList ) || null,
                author: param.author || 'wers',
                rate: param.rate_val || null,
                slider: param.slider_val || null,
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
    del: async function ( req, res, next ) {
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
    sea: async function ( req, res, next ) {
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
    rev: async function ( req, res, next ) {
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