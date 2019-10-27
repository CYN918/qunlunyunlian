<template>
	<div class="box">
		<mt-header title="投诉建议">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        
        <mt-field label="您的建议" placeholder="您的建议" type="textarea" rows="4" v-model="introduction"></mt-field>
        
        <div class="btn" @click="btn">
        	<mt-button type="primary">提交</mt-button>
        </div>
        
        
        
        <!--底部导航-->
        <index-tab page="3"></index-tab>
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import { Header } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import { Navbar, TabItem } from 'mint-ui';
    import { Button } from 'mint-ui';
    import { Field } from 'mint-ui';
	import axios from 'axios'

	export default {
	    name: 'advice',
	    data () {
	        return {
	    	    username:'',
	    	    email:'',
	    	    phone:'',
	    	    introduction:''
	        }
	    },
	    components:{
	  	    indexTab
			
		},
		methods:{
		    btn(){
		    	if(this.username.length == 0){
		    		Toast({
                        message: '请输入您的姓名',
                        duration: 2000
                    });
                    return false
		    	}
		    	if(this.email.length == 0){
		    		Toast({
                        message: '请输入您的邮箱',
                        duration: 2000
                    });
                    return false
		    	}
		    	if(this.phone.length == 0){
		    		Toast({
                        message: '请输入您的号码',
                        duration: 2000
                    });
                    return false
		    	}
		    	if(this.introduction.length == 0){
		    		Toast({
                        message: '请输入您的建议',
                        duration: 2000
                    });
                    return false
		    	}
		    	Toast({
                    message: '感谢您的宝贵建议，谢谢！',
                    duration: 2000
                });
                this.$router.push({path: '/'});
		   	
		    }
			
		},
	    mounted() {
			
	    }
	}
</script>

<style scoped="scoped">
	.btn{
		text-align: center;
	}
</style>