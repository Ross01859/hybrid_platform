<template>
    <div class="container demo-2">
        <div class="content">
            <div class="large-header">
                <div class="main-title" @click="login_show"><span>Wers</span></div>
                <canvas id="demo-canvas"></canvas>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import '../../static/bg/js/rAF'
export default {
    data() {
        return {
            width: null,
            height: null,
            largeHeader: null,
            circles: null,
            canvas: null,
            ctx: null,
            target: null,
            animateHeader: true,
            form_show: false
        }
    },
    mounted() {
        this.initHeader()
        this.addListeners()
    },
    methods: {
        login_show() {
            this.form_show = true
            $( '.main-title' ).children( 'span' ).hide()
            this.$emit( 'listen_form_show', this.form_show )

        },
        initHeader() {
            var ctrl = this
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.target = { x: 0, y: this.height }
            this.largeHeader = $( '.large-header' )[ 0 ]
            this.largeHeader.style.height = this.height + 'px'

            this.canvas = $( '#demo-canvas' )[ 0 ]
            this.canvas.width = this.width
            this.canvas.height = this.height
            this.ctx = this.canvas.getContext( '2d' )

            // create particles
            this.circles = []
            for ( let x = 0; x < this.width * 0.5; x++ ) {

                let c = new this.Circle( ctrl )
                this.circles.push( c )

            }
            // console.log(this.circles)
            this.animate()
        },
        // Event handling
        addListeners() {
            window.addEventListener( 'scroll', this.scrollCheck )
            window.addEventListener( 'resize', this.resize )
        },
        scrollCheck() {
            if ( document.body.scrollTop > this.height ) this.animateHeader = false
            else this.animateHeader = true
        },
        animate() {
            if ( this.animateHeader ) {
                this.ctx.clearRect( 0, 0, this.width, this.height )
                for ( var i in this.circles ) {
                    this.circles[ i ].draw()
                }
            }
            requestAnimationFrame( this.animate )

        },
        resize() {

            this.width = window.innerWidth
            this.height = window.innerHeight
            this.largeHeader.style.height = this.height + 'px'
            this.canvas.width = this.width
            this.canvas.height = this.height
        },
        Circle( ctrl ) {

            let that = ctrl
            let _this = this
            // constructor
            _this.pos = {}
            init()

            function init() {
                _this.pos.x = Math.random() * that.width
                _this.pos.y = that.height + Math.random() * 100
                _this.alpha = 0.1 + Math.random() * 0.3
                _this.scale = 0.1 + Math.random() * 0.3
                _this.velocity = Math.random()
            }
            _this.draw = function () {
                if ( _this.alpha <=
                    0 ) {

                    init()
                }
                _this.pos.y -= _this.velocity
                _this.alpha -= 0.00005
                that.ctx.beginPath()
                that.ctx.arc( _this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false )

                that.ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')'
                that.ctx.fill()
            }
        },
    }
}

</script>
<style type="text/css" scoped>
@import '../../static/bg/css/component';

@font-face {
    font-weight: normal;
    font-style: normal;
    font-family: 'codropsicons';
    src: url('../../static/bg/fonts/codropsicons/codropsicons.eot');
    src: url('../../static/bg/fonts/codropsicons/codropsicons.eot?#iefix') format('embedded-opentype'),
    url('../../static/bg/fonts/codropsicons/codropsicons.woff') format('woff'),
    url('../../static/bg/fonts/codropsicons/codropsicons.ttf') format('truetype'),
    url('../../static/bg/fonts/codropsicons/codropsicons.svg#codropsicons') format('svg');
}

*,
*:after,
*:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.clearfix:before,
.clearfix:after {
    content: '';
    display: table;
}

.clearfix:after {
    clear: both;
}

body {
    background: #fff;
    color: #383a3c;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.25;
    font-family: 'Raleway', Calibri, Arial, sans-serif;
}

a,
button {
    outline: none;
}

a {
    color: #566473;
    text-decoration: none;
}

a:hover,
a:focus {
    color: #34495e;
}

section {
    padding: 1em;
    text-align: center;
}

p.ref {
    text-align: center;
    padding: 2em 1em;
}

.codrops-header {
    margin: 0 auto;
    padding: 2em;
    text-align: center;
    max-width: 900px;
}

.codrops-header h1 {
    margin: 0;
    font-size: 4.5em;
    line-height: 1;
    font-weight: 200;
}

.codrops-header h1 span {
    display: block;
    padding: 1em 0 1.5em;
    font-size: 36%;
    color: #95a5a6;
    line-height: 1.4;
}

.codrops-top {
    width: 100%;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.69em;
    text-align: center;
    padding: 3em 0;
}

.codrops-top a {
    display: inline-block;
    padding: 1.5em;
    text-decoration: none;
    letter-spacing: 1px;
}

.codrops-icon:before {
    margin: 0 4px;
    text-transform: none;
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    font-family: 'codropsicons';
    line-height: 1;
    speak: none;
    -webkit-font-smoothing: antialiased;
}

.codrops-icon-drop:before {
    content: "\e001";
}

.codrops-icon-prev:before {
    content: "\e004";
}

.codrops-demos {
    padding-top: 1em;
    font-size: 0.8em;
}

.codrops-demos a {
    display: inline-block;
    margin: 0.35em 0.1em;
    padding: 0.5em 1.2em;
    outline: none;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    border-radius: 2px;
    font-size: 110%;
    border: 2px solid transparent;
}

.codrops-demos a:hover,
.codrops-demos a.current-demo {
    border-color: #383a3c;
}

.codrops-demos h3 {
    margin: 0;
    padding: 1em 0 0.5em 0;
    font-size: 0.9em;
    float: left;
    min-width: 90px;
    clear: left;
}

.codrops-demos div:not(:first-child) h3 {
    padding-top: 2em;
}

.codrops-demos a:hover,
.codrops-demos a.current-demo {
    color: inherit;
    border-color: initial;
}


.related {
    padding: 10em 0;
}

.related p {
    font-size: 1.5em;
}

.related>a {
    display: inline-block;
    text-align: center;
    margin: 20px 10px;
    padding: 25px;
    vertical-align: middle;
}

.related a img {
    max-width: 100%;
    opacity: 0.8;
    border-radius: 10px;
}

.related a:hover img,
.related a:active img {
    opacity: 1;
}

.related a h3 {
    margin: 0;
    min-height: 63px;
    padding: 0.5em 0 0.3em;
    max-width: 300px;
    text-align: center;
    font-weight: 400;
    font-size: 1em;
}

@media screen and (max-width: 40em) {

    .codrops-header h1 {
        font-size: 2.5em;
    }
}

.main-title>span {
    cursor: pointer;
}

</style>
