<template>
<div class="page page-current" id="find_people_page">
    <div class="content index-content">
        <div class="list-block media-list" style="margin-top: 0; background: #ffffff; font-size: 0.4rem; line-height: 1.5rem; text-align: center;">已为
            <span style="color: #f66626;">4564位
            </span>雇主解决了 
            <span style="color: #f66626;">16996个</span>项目，94%的好评~
        </div>
        <div style="text-align: center;font-size: 0.4rem;margin-top: 0.4rem;">
            <span>服务范围：</span><br>
            <span>造价/预算、技术标、图纸设计、问题咨询</span><br>
            <span>BIM建模、软件协助、材料询价、找资料等</span>
        </div>
        <div class="content-block publish-block">
            <!--<a href="" class="ui-btn">
                <img src="../../../static/images/email.png" alt="" />
            </a>-->
            <a class="external" @click="self">
                <img src="../../../static/images/creat.png" alt="" />
            </a>        
            <a @click="service">
                <img src="../../../static/images/service.png" alt="" />
            </a>
        </div>
    </div>
    <!--底部导航-->
    <index-tab></index-tab>
    
    <!--错误提示-->
    <div v-if="isShowTip">
		<err-tip :errMsg="errTipMsg"></err-tip>
	</div>
</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import errTip from '@/components/errTipComponent';
	export default {
		name: 'sendLive',
		data() {
			return {
				isShowTip:false,
				errTipMsg:''
			}
		},
		mounted() {
			
		},
		components: {
			indexTab,
			errTip
		},
		methods: {
			service(){
				this.$router.push({path: '/service'})
			},
			self(){
				this.$router.push({path: '/self'})
			}
		}
	}
</script>

<style scoped>
.page{
	padding-bottom: 2rem;
}
.publish-block img {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-top: 0.3rem;
    width: 94%;
}
</style>