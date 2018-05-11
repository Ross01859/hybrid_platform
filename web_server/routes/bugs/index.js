/*
 * @Author: wangruishan
 * @Date:   2018-05-09 18:51:48
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-10 19:11:13
 */
var bugsContoller = require( '../../controllers/bugs' )

module.exports = function( router ) {
    router.post( '/bug', bugsContoller.init )
    router.post( '/bug_c', bugsContoller.add )
    router.post( '/bug_d', bugsContoller.del )
    router.post( '/bug_r', bugsContoller.sea )
    router.post( '/bug_u', bugsContoller.rev )
}