const express = require( 'express' );
const jwt = require( "jsonwebtoken" );
const config = require( '../config' );
// 建立 Router 物件
const router = express.Router();

// 在每一个请求被处理之前都会执行的middleware
router.use( function( req, res, next ) {
    req.session.secret = config.sequelize.secret;
    if ( req.url != '/login' && req.url != '/register' ) {
        //&& req.url != '/goods' && req.url != '/bugs_sea'
        let token = req.query.token || req.params.token || req.headers[ 'x-access-token' ];
        if ( !token ) {
            jwt.verify( token, req.session.secret, function( err, decoded ) {
                if ( !err ) {
                    return res.json( { error_code: 3, result: 'Failed to authenticate token.' } )
                } else {
                    next();
                }
            } )
        } else {
            return res.json( { error_code: 3, result: 'No token provided.' } )
        }
    } else {
        // 输出记录信息
        // console.log( req.method, req.url );
        // 继续路由处理
        next();
    }
} );

const userRouter = require( './user' )( router );
const goodsRouter = require( './goods' )( router );
const bugsRouter = require( './bugs' )( router );
module.exports = router;