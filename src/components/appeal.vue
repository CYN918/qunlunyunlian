<template>
    <div class="dynamic">
        <mt-header title="发布动态">
            <router-link to="/mytasklist" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <mt-field label="申请描述" placeholder="申请描述" type="textarea" rows="4" v-model="introduction"></mt-field>
        <listFile @getFiles="updateImg" sendsrt="上传附件"></listFile>
        <div>
            <div v-for="(item,k) in file_list">
                <mt-cell :title="item.filenamesrt_id">
                    <img slot="icon" src="../../static/images/folder.png" width="24" height="24">
                    <span><img slot="icon" src="../../static/images/del.png" width="24" height="24" @click="getRemove(k,item.file_id)"></span>
                </mt-cell>
            </div>
        </div>

        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">提交</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>

        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
    import listFile from "@/view/assembly/allfile";
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    
    export default {
	  name: 'dynamic',
        data () {
            return {
                introduction: '',
                subumting: false,
                file_id: [],
                file_list: []
            }
        },
	    components:{
              indexTab,
              listFile
        },
		methods: {
            updateImg (obj) {
                this.file_list.push(obj)
                this.file_id.push(obj.file_id)
            },
            getRemove (k,id) {
                axios.get(this.baseCont.PHP_API + '/filesdel', {
                    params: {
                        id: id
                    }
                })
                .then(response => {
                    if (response.data.code === 200) {
                        this.file_list.splice(k,1)
                        this.file_id.splice(k,1)
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
                })
            },
            refergo () {
                if(!this.introduction){
                    Toast({
                        message: '请填写申请描述',
                        duration: 2000
                    });
                    return false
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/appeal', {
                    id: this.$route.params.id,
                    desc: this.introduction,
                    file_id: this.file_id,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '发布成功',
                            duration: 1000
                        });
                        this.$router.push({path: '/mytasklist'});
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
				})
				.catch(function (error) {
					console.log(error)
				})
            }
        },
        mounted () {
        }
	}
</script>
<style scoped>
    .ve-bottom-tj{
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
</style>