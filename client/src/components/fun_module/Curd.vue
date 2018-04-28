<template>
    <div>
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="用户列表">
                <el-table v-loading="loading" element-loading-text="正在加载" element-loading-spinner="el-icon-loading" element-loading-background="rgba(250, 250, 250, 1)" :data="tableData" align="center" style="width: 100%" max- height="550">
                    <el-table-column fixed prop="id" align="center" label="ID" width="150">
                    </el-table-column>
                    <el-table-column prop="username" align="center" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="password" align="center" label="密码" width="120">
                    </el-table-column>
                    <el-table-column prop="sex" align="center" label="性别" width="120">
                    </el-table-column>
                    <el-table-column prop="age" align="center" label="年龄" width="120">
                    </el-table-column>
                    <el-table-column prop="province" align="center" label="省份" width="120">
                    </el-table-column>
                    <el-table-column prop="city" align="center" label="市区" width="120">
                    </el-table-column>
                    <el-table-column prop="address" align="center" label="地址" min-width="300">
                    </el-table-column>
                    <el-table-column prop="tel" align="center" label="电话" width="120">
                    </el-table-column>
                    <el-table-column fixed="right" align="center" label="操作" width="120">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                                移除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'curd',
    data() {
        return {
            tabPosition: 'top',
            tableData: [],
            loading: true,
        }
    },
    mounted() {
        this.ajax()
    },
    methods: {
        deleteRow(index, rows) {
            let userid
            userid = rows.splice(index, 1)
            console.log(userid)
        },
        ajax() {
            let that = this
            this.$ajax({
                method: 'get',
                url: '/users/ser_us',
            }).then(function(res) {
                if (res.data.error_code == 200) {
                    that.loading = false
                    that.tableData = res.data.data
                }
            }).catch(function(err) {
                console.log(err)

            })
        }

    },
}

</script>
<style type="text/css" media="screen">


</style>
<style lang="scss" scoped>


</style>
