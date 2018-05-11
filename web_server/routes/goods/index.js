/*
 * @Author: wangruishan
 * @Date:   2018-05-09 11:17:53
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-09 12:05:10
 */
var goodsContoller = require( '../../controllers/goods' )

module.exports = function( router ) {
    router.post( '/goods', goodsContoller.init )
}