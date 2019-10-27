<template>
	<div class="box">
		<mt-header title="我要提现">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        
        <mt-cell title="我的资产:" :value="balance">{{ balance }}元</mt-cell>
        <mt-field type="number" label="提现金额:" placeholder="" v-model="cash">元</mt-field>
        
        <div v-if="alipay.length > 0">
            <mt-radio
                title="第三方提现:"
                align="right"
                v-model="paystatus"
                :options="alipay">
            </mt-radio>
        </div>
        
        <div v-if="bank.length > 0">
            <mt-radio
                title="网上银行:"
                align="right"
                v-model="paystatus"
                :options="bank">
            </mt-radio>
        </div>

        <div class="ve-bottom-tj" >
            <mt-button v-if="ifsubmit" size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary" style="margin-bottom:0.8rem;">
                <span v-if="!subumting">确定提现</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
            
            <mt-button  size="large" @click="paylistgo" :plain="false" type="primary">
                <span>支付认证</span>
            </mt-button>
        </div>
		
		<index-tab page="3"></index-tab>
		
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
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
                ifsubmit: false,
                bank: [],
				alipay: []
			}
		},
		components:{
	  	    indexTab,
        },
		methods: {
            paylistgo () {
                this.$router.push({path: '/paylist'});
            },
			refergo() {
				if(this.cash < 1){
					Toast({
						message: '请提现大于等于1元',
						duration: 2000
					});
					return false
				}
				if(!this.paystatus){
					Toast({
						message: '请选择提现方式',
						duration: 2000
					});
					return false
				}
				this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/extractupdate', {
                    paystatus: this.paystatus,
                    cash: this.cash,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        let cashout_info = response.data.data.cashout_info
			            this.$router.push({path: '/extractinfo/' + cashout_info});
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
				axios.post(this.baseCont.PHP_API + '/user/extract', {
                    id: this.$route.params.id,
                })
                .then(response => {
	                this.subumting = false
                    if(response.data.code == 200){
                        this.balance = response.data.data.balance
                        this.alipay = response.data.data.alipay_account
                        this.bank = response.data.data.bank_account

                        if(this.alipay.length == 0 && this.bank.length == 0 ){
                           this.ifsubmit = false 
                        }else{
                           this.ifsubmit = true
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
			}
		},
        mounted () {
			this.getExtract()
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