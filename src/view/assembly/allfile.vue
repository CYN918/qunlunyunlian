<template>
    <div class="ve-file-box">
        <form id="uploadForm">
            <div class="mb-file-box">{{ sendsrt }}
                <input ref="file"
                    type="file"
                    name="file"
                    class="file-input"
                    accept="*"
                    :multiple="multiple"
                    @change="change"/>
            </div>
        </form>
    </div>
</template>
<script>
    import {Indicator, MessageBox} from 'mint-ui';
    import axios from 'axios'

    const M = 7;
    const UNIT = 1024;
    const MAX_SIZE = M * UNIT * UNIT;

    export default {
	  name: 'allfile',
        data () {
            return {
            }
        },
        props: {
            sendsrt: '',
            multiple: Boolean,
            max: Number
        },
	    components:{
        },
		methods: {
            change (e) {
                let files = e.target.files;
                let namesrt = e.target.files[0].name
                let ifgoyn = this.matchType(namesrt);
                if(!ifgoyn){
                    MessageBox({
                        title: '提示',
                        message: `请上传规定文件格式`
                    });
                    return false;
                }else{
                    if (files[0].size <= MAX_SIZE) {
                        Indicator.open();
                        let formData = new FormData(document.getElementById("uploadForm"));
                        let _this = this
                        axios.post(this.baseCont.PHP_API + '/files', formData)
                        .then(response => {
                            let jsonarr = {
                                'file_id':  response.data.data.id,
                                'filenamesrt_id':  namesrt
                            }
                            _this.$emit('getFiles',jsonarr);
                        })
                    } else {
                        MessageBox({
                            title: '警告',
                            message: `${files[0].name}文件过大，请小于7M！`
                        });
                        return false;
                    }
                }
            },
            matchType(fileName) {
                // 后缀获取
                var suffix = '';
                // 获取类型结果
                var result = false;
                try {
                    var flieArr = fileName.split('.');
                    suffix = flieArr[flieArr.length - 1];
                } catch (err) {
                    suffix = '';
                }
                // fileName无后缀返回 false
                if (!suffix) {
                    result = false;
                    return result;
                }
                // 图片格式
                var imglist = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
                // 进行图片匹配
                result = imglist.some(function (item) {
                    return item == suffix;
                });
                if (result) {
                    result = 'image';
                    return result;
                };
                // 匹配txt
                var txtlist = ['txt'];
                result = txtlist.some(function (item) {
                return item == suffix;
                });
                if (result) {
                result = 'txt';
                return result;
                };
                // 匹配 excel
                var excelist = ['xls', 'xlsx'];
                result = excelist.some(function (item) {
                return item == suffix;
                });
                if (result) {
                result = 'excel';
                return result;
                };
                // 匹配 word
                var wordlist = ['doc', 'docx'];
                result = wordlist.some(function (item) {
                return item == suffix;
                });
                if (result) {
                result = 'word';
                return result;
                };
                // 匹配 pdf
                var pdflist = ['pdf'];
                result = pdflist.some(function (item) {
                return item == suffix;
                });
                if (result) {
                result = 'pdf';
                return result;
                };
                // 匹配 ppt
                var pptlist = ['ppt'];
                result = pptlist.some(function (item) {
                return item == suffix;
                });
                if (result) {
                result = 'ppt';
                return result;
                };
                // 匹配 视频
                var videolist = ['mp4', 'm2v', 'mkv'];
                result = videolist.some(function (item) {
                return item == suffix;
                });
                if (result) {
                result = 'video';
                return result;
                };
                // 匹配 音频
                var radiolist = ['mp3', 'wav', 'wmv'];
                result = radiolist.some(function (item) {
                return item == suffix;
                });
                if (result) {
                    result = 'radio';
                    return result;
                }
                return result;
            }
        },
        mounted () {
        }
	}
</script>
<style scoped>
    .ve-file-box{
        padding: 0.2rem 0.5rem;
    }
    .mb-file-box {
        text-align: center;
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        position: relative;
        cursor: pointer;
        color: #888;
        background: #71f2fe;
        border: 0.01rem solid #ddd;
        border-radius: 0.16rem;
        overflow: hidden;
        display: inline-block;
        *display: inline;
        *zoom: 1
    }
    .mb-file-box  input {
        width: 100%;
        position: absolute;
        height: .8rem;
        right: 0;
        top: 0;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer
    }
</style>