<template>
    <div class="wers-main-box">
        <el-row>
            <el-col :span="16" class="main-left-box">
                <el-carousel class="carousel-box" :interval="10000" :height="Height" indicator-position="inside">
                    <el-carousel-item v-for="item in 5" :key="item" :label="imgs.des[item-1]">
                        <div class="swiper-img-box" :style="{ background:'url('+imgs.url[item-1] +') no-repeat'} ">
                            <div class="img-des-box">{{imgs.des[item-1]}}</div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="8" class="main-right-box">
                <el-row>
                    <el-col :span="24" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
                        <el-card :body-style="{ padding: '0px' }" shadow="none">
                            <img src="../../assets/logo.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-button @click="submit">提交</el-button>
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'container',
    data() {
        return {
            textarea: '',
            currentDate: new Date(),
            Height: ( document.body.clientWidth / 60 ) + 'rem',
            imgs: {
                url: [
                    require( '../../assets/public/imgs/bg/1.jpg' ),
                    require( '../../assets/public/imgs/bg/2.jpg' ),
                    require( '../../assets/public/imgs/bg/3.jpg' ),
                    require( '../../assets/public/imgs/bg/4.jpg' ),
                    require( '../../assets/public/imgs/bg/5.jpg' )
                ],
                des: [
                    '图片一',
                    '图片二',
                    '图片三',
                    '图片四',
                    '图片五'
                ]
            }
        }
    },
    mounted() {
        // console.log(this.Height)
    },
    methods: {
        submit() {
            let that = this
            that.$ajax( {
                method: 'GET',
                url: '/users/ser_u'
            } ).then( function( res ) {
                that.textarea = res.data.data[ 1 ].tel
            } ).catch( function( err ) {
                that.textarea = err
            } )
        }
    }
}

</script>
<style type="text/css" media="screen">
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {}

.el-carousel__item:nth-child(2n+1) {}


.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

</style>
<style lang="scss" scoped>
.wers-main-box {
    .main-left-box {
        padding: 5px;
        .carousel-box {
            box-shadow: 2px 3px 10px #3c3c3c;
            border-radius: 5px;
        }
        .swiper-img-box {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background-repeat: no-repeat !important; // background-position: center !important;
            background-size: cover !important;
            .img-des-box {
                width: 100%;
                background-color: rgba(10, 10, 10, .5);
                box-shadow: 0px 3px 5px #3c3c3c;
                color: #fff;
                font-size: 16px;
                line-height: 50px;
            }
        }
    }
    .main-right-box {
        padding: 5px;
    }
}

</style>
