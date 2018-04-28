<template>
    <div class="wers-home-box">
        <el-container>
            <el-header>
                <headernav></headernav>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <menunav></menunav>
                </el-aside>
                <el-main>
                    <transition name="fade">
                        <router-view/>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import headernav from './HeaderNav'
import menunav from './MenuNav'
export default {
    name: 'home',
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        openFullScreen() {
            const loading = this.$loading( {
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 1)'
            } )
            setTimeout( () => {
                loading.close()
            }, 1000 )
        }
    },
    components: {
        menunav,
        headernav
    }
}

</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s linear;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
    transform: translateX(50px);
}

</style>
<style type="text/css" media="screen">
.el-header,
.el-footer {
    background-color: rgba(50, 200, 30, .7);
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
    overflow: hidden;
}


.el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    height: 100%;
}

body>.el-container {
    height: 100%;
    background-color: #f3f3f3;
}

.el-container:nth-child(2) .el-aside,
.el-container:nth-child(2) .el-main {
    height: 100%;
    padding-right: 0px;
    /* margin-top: 20px; margin-right: 20px;
*/
}

</style>
<style lang="scss" scoped>
.wers-home-box {
    height: 100%;
}

</style>
