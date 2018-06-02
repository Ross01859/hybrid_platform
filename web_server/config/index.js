'use strict'
const Sequelize = require( 'sequelize' )

const all = {
    sequelize: {
        username: 'root',
        password: 'F1n2g90',
        database: 'test_db',
        host: '127.0.0.1',
        dialect: 'mysqli',
        operatorsAliases: false,
        define: {
            underscored: false,
            freezeTableName: false,
            charset: 'utf8',
            dialectOptions: {
                collate: 'utf8_general_ci'
            },
            timestamps: true
        },
        pool: {
            max: 5,
            idle: 30000,
            acquire: 60000,
        },
        secret: 'wers'
    }


}
module.exports = all
