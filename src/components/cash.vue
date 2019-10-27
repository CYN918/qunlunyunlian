<template>
	<div class="box">
		<mt-header title="我要充值">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        
        <mt-cell title="我的资产:" :value="balance">{{ balance }}元</mt-cell>
        <mt-field type="number" label="充值金额:" placeholder="" v-model="cash">元</mt-field>
        <mt-radio
            title="选择支付方式:"
            align="right"
            v-model="paystatus"
            :options="options">
        </mt-radio>
        
        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">确认充值</span>
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
	import { Field } from 'mint-ui';
	import { Radio } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'

	export default {
		name: 'cash',
		data() {
			return {
				cash: 0,
				paystatus: null,
				balance:0,
				subumting: false,
				options: []
			}
		},
		components:{
	  	    indexTab,
        },
		methods: {
			refergo() {
				if(this.cash < 1){
					Toast({
						message: '请充值大于等于1元',
						duration: 2000
					});
					return false
				}
				if(!this.paystatus){
					Toast({
						message: '请选择支付方式',
						duration: 2000
					});
					return false
				}
				this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/balanceupdate', {
                    paystatus: this.paystatus,
                    cash: this.cash,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
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
										Indicator.close();
										Toast({
											message: '充值成功',
											duration: 2000
										});
										_this.$router.push({path: '/index_self'});
									},
									fail:function(res){
										Indicator.close();
										Toast({
											message: '系统错误，返回中..',
											duration: 2000
										});
										_this.$router.push({path: '/index_self'});
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
			},
			getBalance () {
                this.subumting = true
				axios.post(this.baseCont.PHP_API + '/user/balance', {
                    id: this.$route.params.id,
                })
                .then(response => {
	                this.subumting = false
                    if(response.data.code == 200){
						this.balance = response.data.data.balance
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
			}
		},
        mounted () {
			this.getBalance()
            this.getSwitch()
        }		
	}
	
</script>

<style scoped="scoped">
    .ve-bottom-tj{
        margin-top: 1.2rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
</style>