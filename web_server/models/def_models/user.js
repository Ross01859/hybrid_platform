/*
 * @Author: wangruishan
 * @Date:   2018-05-08 21:45:28
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-10 17:35:47
 */

var bcrypt = require( 'bcrypt-nodejs' )
module.exports = function( sequelize, DataTypes ) {
    var control_user = sequelize.define( 'user', {
        username: { type: DataTypes.STRING( 255 ), allowNull: true },
        password: {
            type: DataTypes.STRING( 255 ),
            allowNull: true,
            set: function( val ) {
                // 进行加密（加盐）

                /*  // 异步方式
                  var self = this
                  bcrypt.genSalt( 10, function( err, salt ) {
                      if ( err ) {
                          self.setDataValue( 'password', val )
                      }
                      bcrypt.hash( val, salt, null, function( err, hash ) {
                          if ( err ) {
                              self.setDataValue( 'password', val )
                          }
                          self.setDataValue( 'password', hash )
                      } )
                  } )*/
                var salt = bcrypt.genSaltSync( 10 )
                var hash = bcrypt.hashSync( val, salt )
                this.setDataValue( 'password', hash )
            },
        },
        sex: {
            type: DataTypes.INTEGER( 2 ),
            allowNull: true
        },
        tel: {
            type: DataTypes.INTEGER( 11 ),
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER( 4 ),
            allowNull: true
        },
        crealname: { type: DataTypes.STRING( 255 ), allowNull: true },
    }, {
        freezeTableName: true,
        timestamps: true,
        hooks: {
            beforeCreate: function( user, options ) {
                user.crealname = '客户:' + user.crealname
            }
        }
    } )
    // let user = control_user.sync( { force: true } )
    return control_user
}