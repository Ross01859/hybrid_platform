<template>
    <div>
        <el-table v-loading="loading" element-loading-text="正在加载" element-loading-spinner="el-icon-loading" element-loading-background="rgba(250, 250, 250, 1)" :data="tableData" align="center" style="width: 100%" max-height="550">
            <el-table-column fixed prop="id" align="center" label="ID" width="150">
            </el-table-column>
            <el-table-column prop="username" align="center" label="标题" width="120">
            </el-table-column>
            <el-table-column prop="bug_type" align="center" label="类型" width="120">
            </el-table-column>
            <el-table-column prop="bug_des" align="center" label="描述" width="120">
            </el-table-column>
            <el-table-column prop="bug_img" align="center" label="图片" width="120">
            </el-table-column>
            <el-table-column prop="solve_way" align="center" label="解决方法" width="120">
            </el-table-column>
            <el-table-column prop="rate" align="center" label="难度系数" min-width="300">
            </el-table-column>
            <el-table-column prop="slider" align="center" label="解决进度" min-width="300">
            </el-table-column>
            <el-table-column prop="author" align="center" label="发布者" min-width="300">
            </el-table-column>
            <el-table-column prop="author_tel" align="center" label="电话" width="120">
            </el-table-column>
            <el-table-column prop="created_at" align="center" label="创建时间" width="120">
            </el-table-column>
            <el-table-column prop="updated_at" align="center" label="更新时间" width="120">
            </el-table-column>
            <el-table-column fixed="right" align="center" label="操作" width="120">
                <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            loading: true,
            tableData: [],
        }
    },
    methods: {
        fetchdata() {
            let that = this
            that.$ajax( {
                method: 'post',
                url: '/users',
                params: {
                    token: that.$store.state.token,
                }
            } ).then( function ( res ) {
                if ( res.data.error_code == 0 ) {
                    that.loading = false
                    // that.tableData = that.json_array( res.data.result )
                    // that.tableData = $.parseJSON( res.data.result )
                    // that.tableData = JSON.stringify( res.data.result )
                    that.tableData = res.data.result
                    // console.log( that.tableData )
                    that.openmessage( '加载完毕' )
                }
            } ).catch( function ( err ) {
                console.log( err )

            } )
        },
        json_array( data ) {
            const list = Object.keys( data ).map( ( item, index ) => ( { key: item, value: data[ item ] } ) )
            return list
        },
        deleteRow( index, rows ) {
            let userid
            userid = rows.splice( index, 1 )
            console.log( userid )
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
