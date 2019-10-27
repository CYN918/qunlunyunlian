<template>
    <div class="alipayauth">
        <mt-header title="支付宝认证">
            <router-link to="/paylist" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
      
        <mt-field label="支付宝姓名" placeholder="请输入支付宝姓名"  v-model="name"></mt-field>
        <mt-field label="支付宝账户 " placeholder="请输入支付宝账户" type="number"  v-model="alipay"></mt-field>
        <mt-field label="确认账户 " placeholder="请输入支付宝账户" type="number"  v-model="alipayyn"></mt-field>

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
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    
    export default {
	  name: 'alipayauth',
        data () {
            return {
                name: '',
                alipay: '',
                alipayyn: '',
                subumting: false,
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            refergo () {
                if(!this.name){
                    Toast({
                        message: '请输入支付宝姓名',
                        duration: 2000
                    });
                    return false
                }
                if(!this.alipay){
                    Toast({
                        message: '请输入支付宝姓名',
                        duration: 2000
                    });
                    return false
                }
                if(!this.alipayyn){
                    Toast({
                        message: '请输入支付宝账户',
                        duration: 2000
                    });
                    return false
                }
                if(this.alipayyn != this.alipay){
                    Toast({
                        message: '请确认同一支付宝账号',
                        duration: 2000
                    });
                    return false
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/alipayauth', {
                    alipay_name: this.name,
                    alipay_account: this.alipay,
                })
				.then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '申请成功!',
                            duration: 2000
                        });
		    	        this.$router.push({path: '/alipayauthschedule/' +  response.data.data.cryptsrt});
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
            }
        },
        mounted () {
        }
	}
</script>
<style scoped>
    .alipayauth{
        padding-bottom: 2rem;
    }
    .ve-bottom-tj{
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
</style>