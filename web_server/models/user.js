'use strict'
module.exports = function( sequelize, DataTypes ) {
    //模型
    var User = sequelize.define( 'goods', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        number: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    } )
}