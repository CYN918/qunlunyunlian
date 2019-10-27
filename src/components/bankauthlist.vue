<template>
    <div class="bankauthlist">
		<mt-header title="银行卡认证">
            <router-link to="/paylist" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>

        <div class="ve-bank-box">
            <div class="ve-bank-list" v-for="item in list">
                <div :class="!item.status?'ve-option-zzc':''" @click="goSchedule(item.status,item.cinfo)">
                    <div class="g-realbankimg">
                        <img v-if="item.bank_name == '光大银行'" src="//img.qlylian.com/images/m/bank/gdyh.jpg">
                        <img v-else-if="item.bank_name == '华夏银行'" src="//img.qlylian.com/images/m/bank/hxyh.jpg">
                        <img v-else-if="item.bank_name == '建设银行'" src="//img.qlylian.com/images/m/bank/jsyh.jpg">
                        <img v-else-if="item.bank_name == '交通银行'" src="//img.qlylian.com/images/m/bank/jtyh.jpg">
                        <img v-else-if="item.bank_name == '民生银行'" src="//img.qlylian.com/images/m/bank/msyh.jpg">
                        <img v-else-if="item.bank_name == '农村信用社'" src="//img.qlylian.com/images/m/bank/ncxys.jpg">
                        <img v-else-if="item.bank_name == '农业银行'" src="//img.qlylian.com/images/m/bank/nyyh.jpg">
                        <img v-else-if="item.bank_name == '平安银行'" src="//img.qlylian.com/images/m/bank/payh.jpg">
                        <img v-else-if="item.bank_name == '浦发银行'" src="//img.qlylian.com/images/m/bank/pfyh.jpg">
                        <img v-else-if="item.bank_name == '兴业银行'" src="//img.qlylian.com/images/m/bank/xyyh.jpg">
                        <img v-else-if="item.bank_name == '邮政储蓄'" src="//img.qlylian.com/images/m/bank/yzcx.jpg">
                        <img v-else-if="item.bank_name == '招商银行'" src="//img.qlylian.com/images/m/bank/zsyh.jpg">
                        <img v-else-if="item.bank_name == '中国银行'" src="//img.qlylian.com/images/m/bank/zgyh.jpg">
                        <img v-else-if="item.bank_name == '工商银行'" src="//img.qlylian.com/images/m/bank/gsyh.jpg">
                    </div>
                    <div v-if="item.status == null" class="g-realcardinfo"> 正在审核中.. </div>
                    <div v-else-if="item.status == 0" class="g-realcardinfo"> 正在审核中.. </div>
                    <div v-else-if="item.status == 1" class="g-realcardinfo"> 正在验证中.. </div>
                    <div v-else class="g-realcardinfo"> {{ item.bank_account }} </div>
                </div>
            </div>

            <div class="ve-bank-list">
                <router-link to="/bankauth">
                    <div class="g-realbankimg">
                        <img src="//img.qlylian.com/images/m/add.png" alt="">
                    </div>
                    <div class="g-realcardinfo"> 添加银行卡 </div>
                </router-link>
            </div>
        </div>

        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
	import axios from 'axios'
    
    export default {
	  name: 'bankauthlist',
        data () {
            return {
                list: [],
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            goSchedule (e,cryptsrt) {
                if(e == null){
		    	    this.$router.push({path: '/bankauthschedule/' +  cryptsrt});
                }else if(e == 0){
		    	    this.$router.push({path: '/bankauthschedule/' +  cryptsrt});
                }
            },
            getBankauth () {
                axios.get(this.baseCont.PHP_API + '/user/bankauthlist', {
                    params: {
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
						this.list = response.data.data.auth_list
					}
				})
            }
        },
        mounted () {
            this.getBankauth()
        }
	}
</script>
<style scoped>
    .bankauthlist{
        padding-bottom: 2rem;
    }
    .ve-bank-box{
        padding:0.24rem 0.34rem;
    }
    .ve-bank-box .ve-bank-list{
        border:0.01rem solid #ccc;
        margin-bottom: 0.4rem;
    }
    .ve-bank-box .ve-bank-list a{
        color: #0f0f0f;
    }
    .ve-bank-list .g-realbankimg {
        padding: 0.6rem 0;
        border-bottom: 1px dashed #e0e0e0;
        position: relative;
        height: 1rem;
        text-align: center;
    }
    .ve-bank-list .g-realcardinfo{
        padding:0.5rem 0rem;
        text-align: center;
    }
    .ve-bank-box .ve-option-zzc{
        opacity: 0.5;
    }
</style>