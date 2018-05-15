/*
 * @Author: wangruishan
 * @Date:   2018-05-09 18:03:01
 * @Last Modified by:   ruishanwang
 * @Last Modified time: 2018-05-14 18:59:25
 */
module.exports = function ( sequelize, DataTypes ) {
    let control_bugs = sequelize.define( 'bugs', {
        bug_name: { type: DataTypes.STRING( 100 ), allowNull: false },
        bug_type: { type: DataTypes.STRING( 8 ), allowNull: false },
        solve_way: { type: DataTypes.STRING( 255 ), allowNull: false },
        bug_des: { type: DataTypes.STRING( 255 ), allowNull: false },
        bug_img: { type: DataTypes.STRING( 1024 ), allowNull: true },
        author: { type: DataTypes.STRING( 64 ), allowNull: false },
        rate: { type: DataTypes.INTEGER( 20 ), allowNull: true },
        slider: { type: DataTypes.INTEGER( 20 ), allowNull: true },
        author_tel: { type: DataTypes.INTEGER( 20 ), allowNull: true },
    }, {
        freezeTableName: true,
        timestamps: true
    } )
    // let bugs = control_bugs.sync( { force: false } )//慎用！！！！！会爆炸
    return control_bugs
}