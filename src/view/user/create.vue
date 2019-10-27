<template>
    <div class="changepass">
        <mt-header title="创建团队">
            <router-link to="/team" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <div v-if="userinfo">
            <mt-field class="ve-input-mt" label="团队名称" placeholder="团队名称" type="text"  v-model="name" ></mt-field>
            <mt-field class="ve-input-mt" label="团队介绍"  placeholder="团队介绍" type="textarea" rows="4" v-model="desc"></mt-field>
        </div>
        <!--<listFile @getFiles="updateImg" sendsrt="上传图片:"></listFile>
        <div>
            <div v-for="(item,k) in file_list">
                <mt-cell :title="item.filenamesrt_id">
                    <img slot="icon" src="../../../static/images/folder.png" width="24" height="24">
                    <span><img slot="icon" src="../../../static/images/del.png" width="24" height="24" @click="getRemove(k,item.file_id)"></span>
                </mt-cell>
            </div>
        </div>-->
        
        
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
    import { Header } from 'mint-ui';
    import listFile from "@/view/assembly/allfile";
    import { Indicator } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    
    export default {
	  name: 'create',
        data () {
            return {
                name:'',
                desc:'',
                subumting: false,
                userinfo: [],
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
                Indicator.close();
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
                if (!this.name) {
                    Toast({
                        message: '团队名称',
                        duration: 2000
                    });
                    return false
                } 
                if(!this.desc){
                    Toast({
                        message: '团队介绍',
                        duration: 2000
                    });
                    return false
                }
//              if(this.file_list.length == 0){
//                  Toast({
//                      message: '团队照片',
//                      duration: 2000
//                  });
//                  return false
//              }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/teamCreate', {
                   name: this.name,
                   desc: this.desc,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: response.data.message,
                            duration: 1000
                        });
                        this.$router.push({path: '/team'});
                    }else if(response.data.code == 10003){
                        if(response.data.data.length >0){
                            Toast({
                                message: response.data.data[0],
                                duration: 2000
                            });
                        }
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
            },
         
        },
       
        mounted () {
        	
        }
	}
</script>
<style scoped>
    .changepass{
        padding-bottom:2rem;
    }
    .ve-bottom-tj{
        margin-top: 1.2rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
</style>