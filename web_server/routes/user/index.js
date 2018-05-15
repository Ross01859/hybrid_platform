/*
 * @Author: wangruishan
 * @Date:   2018-05-08 22:27:52
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-08 22:27:59
 */
var userContoller = require( '../../controllers/user' )

module.exports = function( router ) {

    router.post( '/users', userContoller.init )
    router.post( '/login', userContoller.login )
    router.post( '/register', userContoller.register )
    router.post( '/withdraw', userContoller.withdraw )
}