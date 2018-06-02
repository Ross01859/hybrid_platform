/*
 * @Author: wangruishan
 * @Date:   2018-05-16 11:22:14
 * @Last Modified by:   wangruishan
 * @Last Modified time: 2018-05-18 18:05:41
 */

let fs = require( 'fs' )　　　　
let path = 'public/resources/views/headPortrait/' + Date.now() + '.wers.png' //从app.js级开始找--在我的项目工程里是这样的

console.log( 'dataBuffer是否是Buffer对象：' + Buffer.isBuffer( dataBuffer ) )
let img_base => ( path, dataBuffer ) {
    let base64 = data.replace( /^data:image\/\w+;base64,/, '' ) //去掉图片base64码前面部分data:image/png;base64
    let dataBuffer = new Buffer( base64, 'base64' ) //把base64码转成buffer对象，
    fs.writeFile( path, dataBuffer, function ( err ) { //用fs写入文件
        if ( err ) {
            console.log( err )
        } else {
            console.log( '写入成功！' )
        }
    } )
}


module.exports upload_img