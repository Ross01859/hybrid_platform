/*
 * @Author: wangruishan
 * @Date:   2018-05-09 11:12:54
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-09 19:02:40
 */
const _model = require( '../../models/action' );
const goodsSequelize = require( '../../models/index' ).goods;
module.exports = {
    init: async function( req, res ) {
        var body = { error_code: 0, result: '' }
        try {
            var condition = {
                attributes: [ 'id', 'name', 'goods_des', 'goods_price', 'number' ],
            };
            var result = await _model.findAll( goodsSequelize, condition );
            body.result = result;
        } catch ( e ) {
            body.error_code = 1
            body.result = e.message
        } finally {
            res.json( body )
        }
    },
    add: async function( req, res, next ) {
        var body = { error_code: 0, result: '' }
        try {
            var result = await _model.findOne( goodsSequelize )
            body.result = result
        } catch ( e ) {
            body.error_code = 1
            body.result = e.message
        } finally {
            res.json( body )
        }
    },
    del: async function( req, res, next ) {
        var body = { error_code: 0, result: '' }
        try {
            var result = await _model.findOne( goodsSequelize )
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
            var result = await _model.findOne( goodsSequelize )
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
            var result = await _model.findOne( goodsSequelize )
            body.result = result
        } catch ( e ) {
            body.error_code = 1
            body.result = e.message
        } finally {
            res.json( body )
        }
    }
}