<template>
    <div class="wers-bug-form">
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="bug名称">
                <el-input v-model="form.name" placeholder="必填" clearable="true"></el-input>
            </el-form-item>
            <el-form-item label="bug类型">
                <el-input v-model="form.type" placeholder="必填"></el-input>
            </el-form-item>
            <el-form-item label="bug描述">
                <el-input type="textarea" v-model="form.desc" placeholder="必填"></el-input>
            </el-form-item>
            <el-form-item label="bug截图">
                <uploadImg @accept_img="accept_img" />
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
</template>
<script type="text/javascript">
import uploadImg from '../../public_page/Upload_img'

// import util from '@/utils'
export default {
    data() {
        return {
            form: {
                name: '',
                author: '',
                time: '',
                type: '',
                desc: '',
                solve_way: '',
                imgs: [],
                rate_val: 0,
                slider_val: 0,
                fileList: [ {
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                } ],
            }
        }
    },
    components: {
        uploadImg,
    },
    mounted() {
        // console.log( util )
        // 
    },
    methods: {
        submitUpload() {
            let that = this
            that.$ajax( {
                method: 'post',
                url: '/bug_c',
                params: {
                    token: that.$store.state.token,
                    data: that.form
                }
            } ).then( function ( res ) {
                if ( res.data.error_code == 0 ) {
                    // // that.loading = false
                    // // that.tableData = res.data.result
                    // console.log( res )
                    that.openmessage( res.data.result )
                }
            } ).catch( function ( err ) {
                console.log( err )
            } )
        },
        accept_img( data ) {
            console.log( data )
            // for ( var i = 0; i <= data.length; i++ ) {
            //     console.log( i )
            // }
        },
        openmessage( msg ) {
            this.$message( msg )
        },
        handleRemove( file, fileList ) {
            console.log( file, fileList )
        },
        handlePreview( file ) {
            console.log( file )
        },
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
