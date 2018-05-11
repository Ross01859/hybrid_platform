<template>
    <div class="wers-menu-box">
        <el-row>
            <el-col :span="24">
                <!-- <el-radio-group v-model="isCollapse">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
 -->
                <el-menu default-active="/home/curd" class="el-menu-vertical-demo
" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ff403c" :unique-opened="true" :router="true" align="left" :collapse="isCollapse">
                    <el-menu-item index="/home/curd">
                        <i class="iconfont el-icon-tubiaozhizuomobanyihuifu-19"></i>
                        <span slot="title">我的Bug</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">功能模块二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                    </el-menu-item>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>功能模块四</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="4-1">选项4</el-menu-item>
                            <el-menu-item index="4-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="4-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="4-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="4-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            isCollapse: false,
            screenHeight: document.documentElement.clientHeight
        }
    },
    mounted() {
        window.onresize = () => {
            const that = this
            return ( () => {
                window.screenHeight = document.documentElement.clientHeight
                that.screenHeight = window.screenHeight
                $( '.el-menu-vertical-demo' ).height( that.screenHeight - 200 )
            } )()
        }
    },
    methods: {
        handleOpen( key, keyPath ) {
            console.log( key, keyPath )
        },
        handleClose( key, keyPath ) {
            console.log( key, keyPath )
        }
    }
}

</script>
<style type="text/css">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}

</style>
<style lang="scss" scoped>
.wers-menu-box {
    height: 100%;
    .el-menu-vertical-demo {
        box-shadow: 0px 5px 10px #ee3;
    }
}

</style>
