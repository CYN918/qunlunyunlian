<template>
    <div class="message">
        <mt-header title="项目支付">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <div class="ve-money-box">
            <div class="ve-money-tit">您的订单提交成功，请尽快托管赏金！</div>
            <mt-cell title="项目金额" :value="'￥'+info.real_cash"></mt-cell>
            <mt-cell title="支付金额" :value="'￥'+info.need_bounty"></mt-cell>
        </div>

        <mt-navbar v-model="selected">
            <mt-tab-item id="1">余额支付</mt-tab-item>
            <mt-tab-item id="2">第三方支付</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="ve-select-box">
                    <mt-cell title="账号可用余额"  :value="'￥'+info.user_balance"></mt-cell>
                    <mt-field class="ve-input-mt" :disabled="!ifpay" label="支付密码" placeholder="请输入支付密码" type="password" v-model="password"></mt-field>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="ve-select-box">
                    <mt-radio
                        align="right"
                        v-model="paystatus"
                        :options="options">
                    </mt-radio>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>

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
    import wx from 'weixin-js-sdk'
    import { Indicator, MessageBox } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    
    export default {
	  name: 'message',
        data () {
            return {
                paystatus: null,
                selected: '1',
                password: '',
                subumting: false,
                ifpay: false,
                info:{
                    'real_cash': 0.00,
                    'need_bounty': 0.00,
                    'user_balance': 0.00,
                },
                options: []
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            refergo () {
                if(this.selected == 1){
                    if(this.password.length < 6){
                        Toast({
                            message: '请填写支付密码',
                            duration: 2000
                        });
                        return false
                    }
                }else if(this.selected == 2){
                    if(!this.paystatus){
                        Toast({
                            message: '请选择支付方式',
                            duration: 2000
                        });
                        return false
                    }
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/bountyupdate', {
                    id: this.$route.params.id,
                    selected: this.selected,
                    password: this.password,
                    paystatus: this.paystatus,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        if(this.selected == 1){
                            Toast({
                                message: '支付成功',
                                duration: 1000
                            });
                            this.$router.push({path: '/mytasklist'});
                        }else if(this.selected == 2){
                            if(this.paystatus == 1){
                                Indicator.open('支付中...');
                                let packageobj = response.data.data.package;
                                let params = response.data.data.params;
                                let _this = this

                                wx.config({
                                    debug: false,
                                    appId: packageobj.appId, 
                                    timeStamp: packageobj.timeStamp, 
                                    nonceStr: packageobj.nonceStr, 
                                    signature: packageobj.signature,
                                    jsApiList: ['chooseWXPay']
                                });
                                wx.ready(function(){
                                    wx.chooseWXPay({
                                        timestamp: params.timeStamp,
                                        nonceStr: params.nonceStr, 
                                        package: params.package, 
                                        signType: params.signType,
                                        paySign: params.paySign,
                                        success: function (res) {
                                            let wxsrt = JSON.stringify(res);
                                            alert(wxsrt);
                                            Indicator.close();
                                            Toast({
                                                message: '支付成功，返回列表中..',
                                                duration: 2000
                                            });
                                            _this.$router.push({path: '/mytasklist'});
                                        },
                                        fail:function(res){
                                            Indicator.close();
                                            Toast({
                                                message: '系统错误，返回列表中..',
                                                duration: 2000
                                            });
                                            _this.$router.push({path: '/mytasklist'});
                                        },
                                        cancel:function(res){
                                            Indicator.close();
                                            Toast({
                                                message: '用户取消支付',
                                                duration: 2000
                                            });
                                        }
                                    });
                                });
                            }else if(this.paystatus == 2){
                                Indicator.open('支付中...');
                                let purl = response.data.data.payParam
                                window.location.href = purl
                            }
                        }
                    }else if(response.data.code == 50002){
                        Toast({
                            message: response.data.message,
                            duration: 1000
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
            getBounty () {
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/bounty', {
                    id: this.$route.params.id,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        this.info = response.data.data
                        this.ifpay = response.data.data.balance_pay
                        if(!response.data.data.balance_pay){
                            this.selected = '2'
                        }
                    }else if(response.data.code == 50002){
                        Toast({
                            message: response.data.message,
                            duration: 1000
                        });
                        this.$router.push({path: '/index_self'});
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
            getSwitch () {
                var ua = navigator.userAgent.toLowerCase();
                var isWeixin = ua.indexOf('micromessenger') != -1;
                if(isWeixin){
                    this.options = [{
                        label: '微信',
                        value: '1',
                    }]
                }else{
                    this.options = [{
                        label: '支付宝',
                        value: '2',
                    }]
                }
            }
        },
        mounted () {
            this.getBounty()
            this.getSwitch()
        }
	}
</script>
<style scoped>
    .ve-money-box{
        margin-bottom: 1.5rem;   
    }
    .ve-money-box .ve-money-tit{
        font-size: 0.48rem;
        font-weight: bold;
        padding:.4rem .1rem;
        border-bottom:.01rem solid #ccc;
    }
    .ve-select-box{
        margin-top:.3rem;
    }
    .ve-bottom-tj{
        margin-top: 1.2rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
</style>