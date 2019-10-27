<template>
    <div class="bankauthschedule">
        <mt-header title="认证进度">
            <router-link to="/bankauthlist" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="ve-paylist-padd">
            <div class="ve-orang-box">
                请使用绑定账号银行账号尽快汇款至下述账号 
            </div>
            <div class="ve-bank-img">
                <img  src="//img.qlylian.com/images/m/alibank.jpg">
            </div>
            <mt-cell title="您的支付宝信息"></mt-cell>
            <mt-cell title="申请时间" :value="info.created_at"></mt-cell>
            <mt-cell title="支付宝姓名" :value="info.alipay_name"></mt-cell>
            <mt-cell title="支付宝账户" :value="info.alipay_account"></mt-cell>
            <mt-cell title="打款信息"></mt-cell>
            <mt-cell title="收款卡号" value="4102 9800 0400 1863 2"></mt-cell>
            <mt-cell title="打款金额（元）" :value="info.pay_to_user_cash"></mt-cell>
            <mt-cell title="收款户名" value="深圳群伦项目管理有限公司"></mt-cell>
            <mt-cell title="开户银行" value="中国建设银行深圳民治支行"></mt-cell>
            <mt-cell title="省市信息" value="广东 深圳"></mt-cell>
        </div>

        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
    import axios from 'axios'
    
    export default {
	  name: 'bankauthschedule',
        data () {
            return {
                info: [],
                cinfo: this.$route.params.cinfo
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            getIndex () {
                axios.get(this.baseCont.PHP_API + '/user/alipayauthschedule/'+this.cinfo, {
                    params: {
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
						this.info = response.data.data.auth_info
					}else if(response.data.code == 50002){
                        Toast({
                            message: response.data.message,
                            duration: 1000
                        });
                        this.$router.push({path: '/bankauthlist'});
                    }
				})
            }
        },
        mounted () {
            this.getIndex()
        }
	}
</script>
<style scoped>
    .bankauthschedule{
        padding-bottom: 2rem;
    }
    .ve-paylist-padd{
        padding: 0 10px;
    }
    .ve-orang-box{
        margin-top: 0.4rem;
        background: #fff8f5;
        border: 1px solid #fff0ea;
        padding:0.24rem 0.34rem;
        line-height: 0.45rem;
        color: #ba7050;
    }
    .ve-bank-img{
        padding: 0.6rem 0;
        border-bottom: 1px dashed #e0e0e0;
        position: relative;
        height: 1rem;
        text-align: center;
    }
</style>