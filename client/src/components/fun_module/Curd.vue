<template>
    <div>
        <el-tabs :tab-position="tabPosition">
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
                            <div class="block">
                                <el-slider v-model="form.slider_val" :step="10" show-stops>
                                </el-slider>
                            </div>
                        </el-form-item>
                        <el-form-item label="记录者">
                            <el-input v-model="form.author"></el-input>
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
                    <el-table-column prop="updated_at" align="center" label="时间" width="120">
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
        this.ajax()
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
        submitUpload() {
            let that = this
            that.$refs.upload.submit()
            that.$ajax( {
                method: 'post',
                url: '/users',
                params: {
                    token: that.$store.state.token
                }
            } ).then( function( res ) {
                if ( res.data.error_code == 0 ) {
                    that.loading = false
                    that.tableData = res.data.result
                }
            } ).catch( function( err ) {
                console.log( err )

            } )
        }

    },
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
