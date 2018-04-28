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
                <el-button icon="el-icon-info" class="wers-button">{{login_name}}
                </el-button>
                <el-button icon="el-icon-bell" class="wers-button">消息
                </el-button>
                <el-button icon="el-icon-close" class="wers-button" @click="logout">EXIT
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
        this.login_name = $.parseJSON(sessionStorage.getItem('user'))
    },
    methods: {
        logout() {
            sessionStorage.removeItem('user')
            this.$store.dispatch('logout')
            this.$router.push('/')
        },
        jump_router(url) {
            this.$router.push(url)
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

</style>
