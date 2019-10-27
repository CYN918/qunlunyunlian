<template>
	<div class="index_projects">
		
		<!-- header -->
		<div style="position: fixed; top:0;width: 100%; z-index: 999;">
			<div class="member-banner" style="">
				<a  href="/register" class="tab join">加入群伦云联</a>
				<a  class="tab external" @click="engineer">工程师入驻</a>
			</div>
			<div class="buttons-tab tabs" v-model="tabView">
				<li v-for="(tab ,index) in tabs" :class="{cur:iscur==index}" @click="iscur=index,tabChange('select' + (index + 1))" >{{tab.name}}</li>
			</div>
			
			
		</div>
		
        <keep-alive> 
            <component v-bind:is="tabView"></component>
        </keep-alive> 
		
        <!--底部导航-->
        <index-tab page="2"></index-tab>
    
        
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import select1 from '@/components/select01';
    import select2 from '@/components/select02';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
	export default {
	name: 'index_members',
	  data () {
	    return {			
			tabView: 'select1',
            tabs: [{name: "找工程师"}, {name: "找企业"}],
            iscur: 0,                       
	    }
	},
	components:{
		select1,
        select2,
	  	indexTab	
	},
	created(){
		/*放这里也可以,这里是页面渲染之前就请求this.test = 后台返回的数据;*/
		
	},
	mounted() {
		
        
    },
	methods: {		
	  	tabChange:function(tab){
            this.tabView = tab;
        },
        engineer(){
			axios.post(this.baseCont.PHP_API + '/user/ifengineer', {
            })
            .then(response => {
                if(response.data.code == 200){
	    	        this.$router.push({path: '/engineer'});
                }else{
                    Toast({
                        message: response.data.message,
                        duration: 2000
                    });
                }
            })
		},
      

	  }
	}
</script>

<style scoped>
a{
	text-decoration: none;
	font-size: 0.4rem;
}

.member-banner {
    width: 100%;
    height: 1.7rem;
    line-height: 1.9rem;
    background-image: url(../../static/images/banner.png);
    background-repeat: no-repeat;
    background-size: 100% 1.7rem;
    text-align: center;
}
.join {
	height: 1.7rem;
    display: block;
    float: left;
    margin-left: 10%;
    color: #ffffff;
}
.external{
	height: 1.7rem;
	display: block;
    float: right;
    margin-right: 15%;
    color: #ffffff;
}
.buttons-tab {
    background: white;
    position: relative;
}
.cur{
    color: #0894ec;
    border-color: #0894ec;
    z-index: 100;
    font-size: 0.4rem;
    width: 50%;
    
    -webkit-box-flex: 1;
    -ms-flex: 1;
    border-bottom: 2px solid #0894ec;
}

.buttons-tab{
    color: #5f646e;
    font-size: 0.4rem;
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    -webkit-box-flex: 1;
    -ms-flex: 1;
}
.buttons-tab > li{
	width: 50%;
	display: inline-block;
}
</style>