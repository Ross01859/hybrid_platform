<template>
    <div class="wers-header-box">
        <div class="header-left-box">
            <img src="../assets/public/imgs/logo.png" @click="jump_router('/home')" alt="">
        </div>
        <div class="header-right-box">
            <div class="demo-input-size">
                <el-input placeholder="search" size="mini" v-model="input_value" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <div class="demo-input-size">
                <el-button icon="iconfont el-icon-tubiaozhizuomobanyihuifu-12">消息
                </el-button>
                <el-button icon="iconfont el-icon-tubiaozhizuomobanyihuifu-2">
                    <el-popover placement="bottom" title="" width="200" trigger="click" content="">
                        <el-button slot="reference">{{login_name}}</el-button>
                        <div class="wers-control-box">
                            <span class="wers-button">
                                <i class="iconfont el-icon-tubiaozhizuomobanyihuifu-11"></i> 我的账号
                            </span>
                            <span class="wers-button">
                                <i class="iconfont el-icon-tubiaozhizuomobanyihuifu-16"></i> 个人中心
                            </span>
                            <hr>
                            <span class="wers-button">
                                <i class="iconfont el-icon-tubiaozhizuomobanyihuifu-3"></i> 系统管理
                            </span>
                            <span class="wers-button">
                                <i class="iconfont el-icon-tubiaozhizuomobanyihuifu-10"></i> 更新缓存
                            </span>
                            <div class="wers-logout-box" @click="logout">
                                <i class="iconfont el-icon-tubiaozhizuomobanyihuifu-4"></i> 退出系统
                            </div>
                        </div>
                    </el-popover>
                </el-button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            input_value: '',
            login_name: ''
        }
    },
    created() {
        this.login_name = $.parseJSON( sessionStorage.getItem( 'user' ) )
    },
    methods: {
        logout() {
            sessionStorage.removeItem( 'user' )
            this.$store.dispatch( 'logout' )
            this.$router.push( '/' )
        },
        jump_router( url ) {
            this.$router.push( url )
        }
    }
}

</script>
<style type="text/css" media="screen">


</style>
<style lang="scss" scoped>
.wers-header-box {
    color: #fff;
    height: 60px;
    box-shadow: 0px 3px 6px #9f9f9f;
    .header-left-box {
        width: 200px;
        float: left;
        height: 100%;
        text-align: centr;
        >img {
            cursor: pointer;
            width: 100%;
            height: 70px;
            padding-left: 30px;
            display: block;
        }
    }
    .header-right-box {
        float: right;
        height: 100%;
        padding-right: 15px;
        .demo-input-size {
            display: table-cell;
        }
        .demo-input-size:nth-of-type(1) {
            padding-right: 20px;
        }
    }
}

.el-button {
    background-color: rgba(0, 0, 0, 0);
    padding: 10px 0px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
}

.wers-control-box {
    text-align: center;
    >hr {
        height: 1px;
        border: none;
        border-top: 1px dashed gray;
    }
    .wers-button {
        display: inline-block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: rgba(10, 10, 10, 1);
        cursor: pointer;
    }

    .wers-button:hover {
        color: rgb(150, 200, 255);
    }

    .wers-logout-box {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        width: 100%;
        color: #ffffff;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        margin-left: -12px;
        margin-top: 10px;
        margin-bottom: -13px;
        padding-right: 23px;
        text-align: center;
        background-color: rgb(30, 230, 30);
        cursor: pointer;
    }

    .wers-logout-box:hover {
        background-color: rgb(50, 240, 50);
    }
}

</style>
