<template>
    <div class="extractinfo">
		<mt-header title="确认提现">
            <router-link to="/extract" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>

        
        <mt-cell title="我的资产"><span class="ve-font-co">{{ balance }}</span>元</mt-cell>
        <mt-cell title="账号信息"></mt-cell>
        <mt-cell title="收款人" :value="account_name"></mt-cell>
        <mt-cell title="收款账号" :value="cashout_account"></mt-cell>
        <mt-cell title="提现金额" ><span class="ve-font-co">{{ cash }}</span>元</mt-cell>
        <mt-cell title="服务费" ><span>{{ fees }}</span>元</mt-cell>
        <mt-cell title="到账金额" ><span>{{ cash-fees }}</span>元</mt-cell>
        <mt-field label="支付密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>

        
        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">提交</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>

        
        <div class="quick-nav clearfix">
            <a class="J_ping planBLogin" style="display:block;">
                <router-link to="/extract" slot="right">
                    <span class="txt-planBLogin">返回修改</span>
                </router-link>
            </a>
	    </div>

        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    
    export default {
	  name: 'extractinfo',
        data () {
            return {
                cash: 0,
                balance: 0,
                fees: 0,
                subumting: false,
                password: '',
                cashout_account: '',
                account_name: '',
                cashinfo: [],
                cinfo: this.$route.params.cinfo
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            refergo () {
				if(!this.password){
					Toast({
						message: '请输入支付密码',
						duration: 2000
					});
					return false
				}
				this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/extractinfoupdate', {
                    password: this.password,
                    cashinfo: this.cashinfo,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '提现申请已提交，等待平台处理！',
                            duration: 2000
                        });
			            this.$router.push({path: '/index_self'});
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
			getExtract () {
                this.subumting = true
				axios.post(this.baseCont.PHP_API + '/user/extractinfo', {
                    cinfo: this.cinfo,
                })
                .then(response => {
	                this.subumting = false
                    if(response.data.code == 200){
                        this.balance = response.data.data.balance
                        this.account_name  =response.data.data.account_name
                        this.cashout_account  =response.data.data.cashout_account
                        this.cash  =response.data.data.cash
                        this.fees  =response.data.data.fees
                        this.cashinfo  =response.data.data.cashoutInfo
					}
				})
				.catch(function (error) {
					console.log(error)
				})
			}
        },
        mounted () {
			this.getExtract()
        }
	}
</script>
<style scoped>
    .ve-font-co{
        color: #ff9934;
    }
    .ve-bottom-tj{
        margin-top: 1.2rem;
        margin-bottom: 0.2rem;
        padding:0rem 0.4rem;
    }
    .quick-nav {
        width:100%;
        zoom: 1;
        display: inline-block;
        margin-top: .6rem;
        text-align: center;
    }
    .quick-nav a:last-child {
        float: right;
    }
    .quick-nav a {
        font-size: 0.4rem;
        color: #999;
        line-height: .22rem;
        text-decoration: none;
        padding: 0rem .3rem;
        zoom: 1;
    }
</style>