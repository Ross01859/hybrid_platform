/*
 * @Author: wangruishan
 * @Date:   2018-05-08 22:27:52
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-27 23:48:31
 */
var userContoller = require( '../../controllers/user' )

module.exports = function ( router ) {

    router.post( '/users', userContoller.init )
    router.post( '/login', userContoller.login )
    router.get( '/login_get', userContoller.login_get )
    router.post( '/register', userContoller.register )
    router.post( '/withdraw', userContoller.withdraw )
}