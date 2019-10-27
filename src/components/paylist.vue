<template>
    <div class="paylist">
		<mt-header title="支付认证">
            <router-link to="/extract" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
         <div class="ve-paylist-padd">
            <div class="ve-orang-box">
                友情提示：以下账户信息以您提交的信息为准，非本站金融体系，请妥善填写，如出现信息误差，自行负责。如对支付认证有任何疑问，请直接 
                <div @click="goqqkf">联系客服</div>。 
            </div>
        </div>
       
        <div class="ve-pay-binding">
            <router-link to="/bankauthlist" slot="left">
                <mt-cell 
                    is-link
                    label="绑定账号会向平台银行卡打入一定的金额"
                    title="银行卡绑定">
                    <img slot="icon" src="//img.qlylian.com/images/m/bankpay.jpg" width="54" height="54">
                </mt-cell>
            </router-link>
        </div>
        <div class="ve-pay-binding" style="padding-top:0.4rem;">
            <router-link to="/alipayauthlist" slot="left">
                <mt-cell 
                    is-link
                    label="支付宝认证会在一个工作日内完成"
                    title="支付宝绑定">
                    <img slot="icon" src="//img.qlylian.com/images/m/alipay.jpg" width="54" height="54">
                </mt-cell>
            </router-link>
        </div>

        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
    
    export default {
	  name: 'paylist',
        data () {
            return {
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            goqqkf () {
                window.location.href = "tel:://4001067895"
            }
        },
        mounted () {
        }
	}
</script>
<style scoped>
    .ve-paylist-padd{
        padding: 0 10px;
    }
    .ve-orang-box{
        margin-top: 0.4rem;
        background: #fff8f5;
        border: 1px solid #fff0ea;
        padding:0.24rem 0.34rem;
        /* padding-right: 0.34rem; */
        line-height: 0.45rem;
        color: #ba7050;
    }
    .ve-orang-box div{
        color:#0f0f0f;
        display: inline-block;
    }
    .ve-pay-binding{
        margin-top: 0.4rem;
        border:none;
    }
    .ve-pay-binding a{
        color:#0f0f0f;
        background-size: 100% 0 !important;
    }
</style>