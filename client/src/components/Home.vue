<template>
    <div class="wers-home-box">
        <el-container>
            <el-header>
                <headernav></headernav>
            </el-header>
            <el-container>
                <el-aside width="150px">
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
.el-header {
    background-color: rgba(66, 73, 81, 1);
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0px;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
}

.el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    text-align: center;
    height: 100%;
    overflow: hidden;
    margin-top: 20px;
    position: fixed;
    top: 70px;
    left: 0px;
    z-index: 999;
}


.el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    height: 100%;
    margin-left: 170px;
    margin-top: 70px;
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
