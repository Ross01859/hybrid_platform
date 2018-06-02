<template>
    <div>
        <el-tabs :tab-position="tabPosition" @tab-click="f">
            <el-tab-pane label="记录bug">
                <CreateBug/>
            </el-tab-pane>
            <el-tab-pane label="bugs列表">
                <ListBug/>
            </el-tab-pane>
            <el-tab-pane label="信息修改">
                <UpdateBug/>
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script type="text/javascript">
import api from '../../../fetch/api'
import CreateBug from './Bug_create'
import ListBug from './Bug_list'
import UpdateBug from './Bug_update'
export default {
    name: 'bug_sys',
    data() {
        return {
            tabPosition: 'top',
        }
    },
    components: {
        CreateBug,
        ListBug,
        UpdateBug
    },
    mounted() {
        console.log( api.name )
    },
    methods: {
        f( tab, event ) {
            return
            // if ( tab.index == 0 ) { // return // } else if ( tab.index == 1 ) { // this.fetchdata() // } else { // this.openmessage( '正在开发' ) // }

        },
        openmessage( msg ) {
            this.$message( msg )
        }
    }

}

</script>
<style type="text/css" media="screen">


</style>
<style lang="scss" scoped>


</style>
