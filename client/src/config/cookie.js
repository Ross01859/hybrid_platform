export function addCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    console.info(cname + '=' + cvalue + '; ' + expires)
    document.cookie = cname + '=' + cvalue + '; ' + expires
    console.info(document.cookie)
}
export function getCookie(cname) { //获取指定名称的cookie的值
    let name = cname + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        console.log(c)
        while (c.charAt(0) == ' ') c = c.substring(1)
        console.log(c.indexOf(name))
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length)
        } else {
            return ''
        }
    }
}
export function delCookie(name) { //为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
    let date = new Date()
    date.setTime(date.getTime() - 10000)
    document.cookie = name + '=a;expires=' + date.toGMTString()
}

export function allCookie() { //读取所有保存的cookie字符串
    let str = document.cookie
    if (str == '') {
        str = '没有保存任何cookie'
    }
    console.log(str)
}
