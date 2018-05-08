var express = require( 'express' )
var router = express.Router()

/* GET home page. */
router.get( '/', function( req, res, next ) {
    res.render( 'index' )
} )

router.post( '/add/user', function( req, res, next ) {
    console.log( '+++++++++++++++++++++++++++++++++++' )
    var saveUser = {
        username: req.body.name,
        password: req.body.password,
        age: req.body.age,
        sex: req.body.sex,
        tel: req.body.weight
    }
    return db.sequelize.transaction( function( t ) {
        console.log( '+++++++++++++++++++++++++++' )
        return User.create( saveUser, {
            transaction: t
        } ).then( function( result ) {
            res.send( result )
        } ).catch( function( err ) {
            console.log( '发生错误：' + err )
        } )
    } )
} )
module.exports = router