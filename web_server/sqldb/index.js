'use strict'
const Sequelize = require( 'sequelize' )
const config = require( '../config/index' )

const db = {
    sequelize: new Sequelize( config.sequelize.database, config.sequelize.username, config.sequelize.password, config.sequelize )
}
db.User = db.sequelize.import( '../model/user' )
module.exports = db