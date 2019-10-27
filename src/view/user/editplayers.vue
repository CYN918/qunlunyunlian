<template>
	<div class="box">
		<mt-header title="修改团队成员">
            <router-link to="/resume" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <div v-if="member">
            <mt-field class="ve-input-mt" label="团队名称" placeholder="团队名称" type="text"  v-model="member.member_name" ></mt-field>
            <mt-field class="ve-input-mt" label="团队介绍"  placeholder="团队介绍" type="textarea" rows="4" v-model="member.member_content"></mt-field>
        </div>
        <listFile @getFiles="updateImg" sendsrt="成员头像:"></listFile>
        <div>
            <div v-for="(item,k) in file_list">
                <mt-cell :title="item.filenamesrt_id">
                    <img slot="icon" src="../../../static/images/folder.png" width="24" height="24">
                    <span><img slot="icon" src="../../../static/images/del.png" width="24" height="24" @click="getRemove(k,item.file_id)"></span>
                </mt-cell>
            </div>
        </div>
        
        
        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">提交</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>
        
        
        <!--底部导航-->
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
		name: 'experience',
		data() {
			return {
	
                subumting: false,
                member: [],
                file_id: [],
                file_list: []
			}
		},
		components: {
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
            	if(!this.member.member_name){
            		Toast({
                        message: '成员姓名!',
                        duration: 2000
                    });
                    return false
            	}
            	if(!this.member.member_content){
            		Toast({
                        message: '请填写成员介绍!',
                        duration: 2000
                    });
                    return false
            	}
            	if(this.file_list.length == 0){
            		Toast({
                        message: '请上传头像!',
                        duration: 2000
                    });
                    return false
            	}
            	  this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/memberedit', {
                	member_id: this.$route.params.id,
                    member_name: this.member.member_name,
                    member_content: this.member.member_content,
                    file_id: this.file_id,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '发布成功',
                            duration: 1000
                        });
                        this.$router.push({path: '/resume'});
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
           getindex () {
				axios.get(this.baseCont.PHP_API + '/user/membereditdata', {
                    params: {
                    	id: this.$route.params.id,
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
						this.member = response.data.data.member
					}
				})
			},
		},
		mounted() {
		    this.getindex()
		}
	}
</script>

<style>
</style>