/*
 * @Author: wangruishan
 * @Date:   2018-05-09 10:49:02
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-09 16:42:35
 */
module.exports = function( sequelize, DataTypes ) {
    let control_good = sequelize.define( 'goods', {
        id: { type: DataTypes.INTEGER( 20 ), allowNull: false, primaryKey: true, autoIncrement: true, comment: '主键ID' },
        name: { type: DataTypes.STRING( 50 ), allowNull: true },
        goods_des: { type: DataTypes.STRING( 255 ), allowNull: true },
        goods_price: { type: DataTypes.DECIMAL( 12, 2 ), allowNull: true },
        number: { type: DataTypes.INTEGER( 12 ), allowNull: true }
    }, {
        freezeTableName: true,
        timestamps: false
    } )
    return control_good
}