<template>
	<div class="box">
		<mt-header title="上传职业证书">
            <router-link to="/certificate" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <mt-field label="证书名称:" placeholder="" v-model="certificate_name"></mt-field>
        <mt-field label="注册公司:" placeholder="" type="email" v-model="certificate_company"></mt-field>
        <listFile @getFiles="updateImg" sendsrt="上传图片:"></listFile>
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
                <span v-if="!subumting">确定</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>
		
		<index-tab page="3"></index-tab>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import indexTab from '@/components/indexTabComponent';
	import listFile from "@/view/assembly/allfile";
	import { Field } from 'mint-ui';
	import { Indicator,Toast } from 'mint-ui';
    import axios from 'axios'
	export default {
		name: 'upload',
		data() {
			return {
				certificate_name:'',
				certificate_company:'',
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
               if(!this.certificate_name){
                    Toast({
                        message: '请填写证书名称',
                        duration: 2000
                    });
                    return false
                }
                 if(!this.certificate_company){
                    Toast({
                        message: '请填写注册公司',
                        duration: 2000
                    });
                    return false
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/certificateadd', {
                    certificate_name: this.certificate_name,
                    certificate_company: this.certificate_company,
                    file_id: this.file_id,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '发布成功',
                            duration: 1000
                        });
                        this.$router.push({path: '/certificate'});
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

<style>
</style>