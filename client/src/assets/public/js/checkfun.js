// 检查支持svg
function isSupportSVG() {
    var SVG_NS = 'http://www.w3.org/2000/svg'
    return !!document.createElementNS && !!document.createElementNS( SVG_NS, 'svg' ).createSVGRect
}
if ( !isSupportSVG() ) {
    console.log( '不支持svg' )

}

// 检测支持canvas
function isSupportCanvas() {
    if ( document.createElement( 'canvas' ).getContext ) {
        return true
    } else {
        return false
    }
}
if ( !isSupportCanvas() ) {
    console.log( '不支持canvas' )

}
