<template>
    <div>
        <el-tabs :tab-position="tabPosition" @tab-click="f">
            <el-tab-pane label="记录bug">
                <div class="wers-bug-form">
                    <el-form ref="form" :model="form" label-width="100px">
                        <el-form-item label="bug名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="bug类型">
                            <el-input v-model="form.type"></el-input>
                        </el-form-item>
                        <el-form-item label="bug描述">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="bug截图">
                            <el-upload class="upload-demo" drag ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="form.fileList" list-type="picture" :auto-upload="false" multiple>
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将截图拖到此处，或<em>点击上传</em></div>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="难度系数">
                            <el-rate v-model="form.rate_val" :colors="['#FF9900', '#F7BA2A', '#99A9BF']">
                            </el-rate>
                        </el-form-item>
                        <el-form-item label="bug解决方法">
                            <el-input type="textarea" v-model="form.solve_way"></el-input>
                        </el-form-item>
                        <el-form-item label="解决进度">
                            <el-progress type="circle" :percentage="100" v-model="form.slider_val" status="success"></el-progress>
                        </el-form-item>
                        <el-form-item label="记录者">
                            <el-input type="text" v-model="form.author"></el-input>
                        </el-form-item>
                        <el-form-item label="记录时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitUpload">立即创建</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-tab-pane>
            <el-tab-pane label="bugs列表">
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
            </el-tab-pane>
            <el-tab-pane label="信息修改">信息修改</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script type="text/javascript">
import api from '../../fetch/api'
export default {
    name: 'curd',
    data() {
        return {
            tabPosition: 'top',
            tableData: [],
            loading: true,
            form: {
                name: '',
                author: '',
                time: '',
                type: '',
                desc: '',
                solve_way: '',
                rate_val: '',
                slider_val: '',
                fileList: [ {
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                } ]
            }
        }
    },
    mounted() {
        console.log( api.name )
    },
    methods: {
        deleteRow( index, rows ) {
            let userid
            userid = rows.splice( index, 1 )
            console.log( userid )
        },
        handleRemove( file, fileList ) {
            console.log( file, fileList )
        },
        handlePreview( file ) {
            console.log( file )
        },
        f( tab, event ) {
            if ( tab.index == 0 ) {
                return
            } else if ( tab.index == 1 ) {
                this.fetchdata()
            } else {
                this.openmessage( '正在开发' )
            }

        },
        submitUpload() {
            let that = this
            that.$refs.upload.submit()
            that.$ajax( {
                method: 'post',
                url: '/bug_c',
                params: {
                    token: that.$store.state.token,
                    data: that.form
                }
            } ).then( function ( res ) {
                if ( res.data.error_code == 0 ) {
                    // that.loading = false
                    // that.tableData = res.data.result
                    console.log( res )
                    that.openmessage( res.data.result )
                }
            } ).catch( function ( err ) {
                console.log( err )

            } )
        },
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
                    console.log( that.tableData )
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
        openmessage( msg ) {
            this.$message( msg )
        }
    }

}

</script>
<style type="text/css" media="screen">


</style>
<style lang="scss" scoped>
.wers-bug-form {
    width: 80%;
    padding: 10px;
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
}

</style>
