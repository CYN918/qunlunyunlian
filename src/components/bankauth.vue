<template>
    <div class="bankauth">
        <mt-header title="银行卡认证">
            <router-link to="/paylist" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="ve-schedule-list">
            <mt-radio
            align="right"
            title="开户行银行"
            v-model="bank"
            :options="bank_list">
            </mt-radio> 
        </div>

        <mt-field label="开户行支行" placeholder="请输入银行开户行"  v-model="name"></mt-field>
        <districtBase @areaChange="getArea" :sendsrt="myAdress" boxsrt="开户行地区"></districtBase>
        <mt-field label="银行卡号 " placeholder="请输入银行卡号" type="number"  v-model="card"></mt-field>
        <mt-field label="确认银行卡号 " placeholder="请输入银行卡号" type="number"  v-model="cardyn"></mt-field>

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
    import districtBase from "@/view/assembly/districtbase";
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    
    export default {
	  name: 'bankauth',
        data () {
            return {
                myAdress: null,
                district: [],
                bank: '',
                name: '',
                card: '',
                cardyn: '',
                subumting: false,
                bank_list:['农业银行','交通银行','招商银行','工商银行','建设银行','中国银行','邮政储蓄银行','民生银行','浦发银行','华夏银行']
            }
        },
	    components:{
	  	    indexTab,
            districtBase,
        },
		methods: {
            getArea (obj) {
                this.myAdress = obj.myAdress
                this.district = obj.district
            },
            refergo () {
                if(!this.bank){
                    Toast({
                        message: '请选择开户行银行',
                        duration: 2000
                    });
                    return false
                }
                if(!this.name){
                    Toast({
                        message: '请填写开户行支行',
                        duration: 2000
                    });
                    return false
                }
                if(this.district.length == 0){
                    Toast({
                        message: '请选择开户行地址',
                        duration: 2000
                    });
                    return false
                }
                if(!this.card){
                    Toast({
                        message: '请填写银行卡号',
                        duration: 2000
                    });
                    return false
                }
                if(!this.cardyn){
                    Toast({
                        message: '请填写确认银行卡号',
                        duration: 2000
                    });
                    return false
                }
                if(this.card != this.cardyn){
                    Toast({
                        message: '请确认同一银行卡号',
                        duration: 2000
                    });
                    return false
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/bankauth', {
                    bank_name: this.bank,
                    deposit_name: this.name,
                    district: this.district,
                    bank_account: this.card,
                })
				.then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '申请成功!',
                            duration: 2000
                        });
		    	        this.$router.push({path: '/bankauthschedule/' +  response.data.data.cryptsrt});
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
    .bankauth{
        padding-bottom: 2rem;
    }
    .ve-bottom-tj{
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
</style>