<template>
	<div class="page" id="member_show_page">
		<!-- 头部展示 -->
		<indexTop></indexTop>

        <!--底部导航-->
        <index-tab page="2"></index-tab>
    
        <!--错误提示-->
        <div v-if="isShowTip">
		    <err-tip :errMsg="errTipMsg"></err-tip>
	    </div>
	</div>
</template>

<script>
	import indexTop from '@/view/engineer/top';
	import indexTab from '@/components/indexTabComponent';
	import errTip from '@/components/errTipComponent';
	import axios from 'axios'
	export default {
    name:'engineerDetails',
    data () {
      return {
      	inPage:true,
	    isShowTip:false,
		errTipMsg:'',
        items: []
      }
    },
    mounted: function(){
        this.getDetail();
        
    },
    components:{
    	indexTop,
	  	indexTab,
		errTip			
	},
    methods: {
    	
        getDetail(){
         
        }
    }
  }

</script>

<style scoped="scoped">
	.page{
		overflow-x: hidden;
		width: 100%;
		position: relative;
	}
</style>