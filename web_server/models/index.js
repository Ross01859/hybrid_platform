/*
 * @Author: wangruishan
 * @Date:   2018-05-08 21:46:06
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-09 16:19:43
 */


const config = require( '../config' );
var fs = require( 'fs' );
var path = require( 'path' );
var Sequelize = require( 'sequelize' );
var username = config.sequelize.database.username;
var password = config.sequelize.database.password;
var options = { // TODO -- pull from config
    host: config.sequelize.database.host,
    dialect: "mysql",
    timezone: "+08:00",
    dialectOptions: {
        charset: "utf8",
        collate: "utf8_general_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    port: 3306,
    define: {
        freezeTableName: true,
        syncOnAssociation: true,
        timestamps: false,
        underscored: true
    },
};


var client = new Sequelize( config.sequelize.database, username, password, options );


var models = {};

// read all models and import them into the "db" object
fs
    .readdirSync( __dirname + '/def_models' )
    .filter( function( file ) {
        return ( file.indexOf( '.' ) !== 0 ) && ( file !== 'index.js' );
    } )
    .forEach( function( file ) {
        var model = client.import( path.join( __dirname + '/def_models', file ) );
        models[ model.name ] = model;
    } );

Object.keys( models ).forEach( function( modelName ) {
    if ( models[ modelName ].options.hasOwnProperty( 'associate' ) ) {
        models[ modelName ].options.associate( models );
    }
} );
module.exports = models;
module.exports.client = client;