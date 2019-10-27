<template>
    <div class="index_main" v-if="inPage">
	    <!-- banner swiper -->
	    <loanBanner></loanBanner>
  
        <!-- project -->
        <viewProcess></viewProcess>
  				
		<!-- create -->
		<viewCreate v-bind:list="lists.cate_list"></viewCreate>
			
		<!-- advertising -->
		<div class="list-block" id="act-list">
			<div class="row col-center">
				<div class="col-50">					
					<router-link to="sendLive">
						<img src="../../static/images/fahuo.jpg" />
					</router-link>
			    </div>
				<div class="col-50">						
					<router-link to="welcome">
						<img src="../../static/images/jiehuo.jpg" />
					</router-link>
				</div>
			</div>
		</div>
		
		<!-- new project -->
	    <viewProjects v-bind:item="lists.task_list" v-bind:district="lists.district_list"></viewProjects>
	    
					
		<div class="line"></div>
						
		<!-- engineer -->			
	    <viewEngineer v-bind:engineer="lists.enginner_list" v-bind:district="lists.district_list2"></viewEngineer>
		
		<div class="line"></div>
								
		<!-- enterprise -->			
	    <viewEnterprise v-bind:enterprise="lists.enterprise_list" v-bind:cate="lists.cate_list"></viewEnterprise>
  

        <!--底部导航-->
        <index-tab page="0"></index-tab>

        <!--错误提示-->
        <div v-if="isShowTip">
		    <err-tip :errMsg="errTipMsg"></err-tip>
	    </div>
    </div>
</template>

<script>
	import loanBanner from '@/view/banner/index';
	import viewProcess from '@/view/process/index';
	import viewCreate from '@/view/create/index';
	import viewProjects from '@/view/projects/index';
	import viewEngineer from '@/view/engineer/index';
	import viewEnterprise from '@/view/enterprise/index';
	import indexTab from '@/components/indexTabComponent';
	import errTip from '@/components/errTipComponent';
	import axios from 'axios'	
	export default {
	    name: 'index_main',
	    data () {
	        return {
	    	    inPage:true,
	    	    isShowTip:false,
				errTipMsg:'',
				lists:[]				
	        }
	    },
	    mounted() {
	  	    axios.get(this.baseCont.PHP_API,{}).then(response => {
                this.lists = response.data.data;
                
             }).catch((err) => {
                console.log(err.msg);
            }); 
        },
	    components:{
	  	    loanBanner,
	  	    viewProcess,
	  	    viewCreate,
	  	    viewProjects,
	  	    viewEngineer,
	  	    viewEnterprise,
	  	    indexTab,
			errTip			
		},
		created() {
             
		},
		methods:{
						
		}
	}
</script>

<style scoped="scoped">
	ul,li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.line{
		height: 0.1rem;
		width: 100%;
		background: #efeff4;
	}
	#app{
		background: #efeff4;
	}
	.index_main{
		font-size: 0.42666rem;
		background: white;
		height: 100%;
		padding-bottom: 2rem;
	}  
  .row {
    overflow: hidden;
    margin-left: -4%;
  }
  .row.col-center > div {
    text-align: center;
    padding: 0.4rem 0 0.2rem;
  }  
  .row .col-25 {
    width: 29%;
    margin-left: 4%;
    display: inline-block;
  }  
  .list-block {
    
  }
  #act-list .row .col-50 {
    margin: 0;
    width: 50%;
    padding: 0;
    float: left;
  }
  .col-50{
  	float: left;
  	width: 50%;
  }
  .col-50 > a{
  	display: block;
  	text-decoration: none;
  }
  .col-50 > a > img:nth-child(1){
  	padding-left: 0.1rem;
  }
  .col-50 > a > img{
  	width: 100%;
  }
</style>
