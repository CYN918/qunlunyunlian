<template>
	<div class="test">

		<mt-header title="我的推广">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
		
		<!-- 工程师列表 -->
		
		<div class="content-block members-list" id="members_list">

			<div class="card">
				<div class="card-content">
					<div class="list-block media-list">
						<div class="teshu">
                            <img :src="imgurl" alt="">
                        </div>
			
						<ul v-if="isnot" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
							<li v-for="(val,index) in list" :key="index">
								<a @click="engineer(val.uid)" class='item-content-vip'>
									<div class="item-media">
										<div class="item-image">
											<img class="avatar" title="kiwi" :src="val.avatar" alt="" />
										</div>										
									</div>
									<div class="item-inner" >
										<div class="item-title-row">
											<div class="item-subtitle" style="color: #333333; font-size: 0.4rem;">
												{{val.name}}
											</div>
										</div>									
										<div class="item-title-row" style="color: #666666;margin-top: 0.1rem;font-weight: bold;">
											<div class="item-subtitle" style="font-size: 0.3rem;">加入时间：{{val.created_at}}&nbsp;&nbsp;</div>
											<!--<div class="item-subtitle" style="font-size: 0.3rem;">交付率：100%</div>-->
										</div>
									</div>
								</a>
							</li>
						</ul>
						<div v-else class="ve-no-message"><center>暂无信息</center></div>
						
					</div>
				</div>
			</div>		
		</div>
		
		<index-tab page="3"></index-tab>
		
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import { Picker } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
    import { Spinner } from 'mint-ui';
    import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default {
	    name: 'select01',
	        data () {
	            return {
	    	        lists: [],
	    	        val:'0',
	    	        list:[],
	    	        value:'0',
	    	        datas:[],
	    	        items:[],
	    	        uid:'',
	    	        total: 0,
                    page: 1,
                    lastpage: 0,
                    ifload: true,
                    loading: false,
                    isnot: true, 
                    imgurl: null,
                    gradeimg:''
	            }
	        },	        
	        components:{
		        indexTab
	        },
	        created(){
		        /*放这里也可以,这里是页面渲染之前就请求this.test = 后台返回的数据;*/		       
	        },
	        mounted() {
		     
		        
            },
	        methods: {
	        	loadMore() {                   
                    this.loading = true;
                    
                    setTimeout(() => {                     	
                    	this.getList()                                    	
                    }, 2000);                   
                },
                getList(){
                	axios.get(this.baseCont.PHP_API + '/user/grade',{                		                		
	        			params: {	    
	        				page: this.page
	        			}
	        		}).then(response => {
	        			if(response.data.code === 200){
    				        let arr = response.data.data.list
    				        this.gradeimg= response.data.data
    				        console.log(this.gradeimg.img)
                            for (let i = 0; i < arr.length; i++) {
                                this.list.push(arr[i])
    			            }  
    			            this.imgurl = response.data.data.img
                            this.lastpage = response.data.data.lastpage
                            this.loading = false               
                            if(this.lastpage <= this.page){
                                Toast({
                                    message: '已经加载到底！',
                                    duration: 2000
                                });
                                this.loading = true
                            }
                            this.ifload = false 
                            this.page++                     
                        }else{
          	                this.loading = true
                            this.isnot = false
                        }                                                                   
                   });
                },               
	        	
	  	        engineer (uid) {
	  	        	this.uid = uid;
	  	        	this.$router.push({path: '/engineerDetails/' + uid});
	                window.parent.scrollTo(0, 0);	  	        		  	      	  	              	        	                            
	  	        },
	  	        
                setCouponSelected(event){                	
                    this.ifload = true
                    this.isnot = true
                    this.page = 1
                    this.list = []
                    this.loadMore()                  
                },
                getCouponSelected(event){                	
                    this.ifload = true
                    this.isnot = true
                    this.page = 1
                    this.list = []
                    this.loadMore()                    
                },                                 		                                        
	    }
	}
</script>

<style scoped>
.test{
	padding-top: 0rem;
	padding-bottom: 2.1rem;
	overflow-x: hidden;
}
select {
	appearance:none;
	-moz-appearance:none;
	-webkit-appearance:none;
	background: url(../../static/images/icon.png) no-repeat scroll right center transparent;
	padding-right: 0.3rem;
	font-size: 0.4rem;
	border: none;
	outline: none;
}
select::-ms-expand { display: none; }
#profession{
	width: 2.3rem;
}
select option{
	font-size: 0.2rem;
}
.row.filter-row {
    text-align: center;
    background: #ffffff;
    border-bottom: 0.01rem solid #d2d2d2;
    font-size: 0.7rem;
    height: 1rem;
    padding-top: 0.45rem;
    margin-left: -4%;
}
.col-50 {
    width: 46%;
    margin-left: 4%;
    box-sizing: border-box;
    float: left;
}
.project-tags{
	color: #666666;
    font-size: 0.4rem;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    vertical-align: bottom;
}
.card {
    border-width: 0.02rem 0;    
    border-color: #e7e7e7;
    margin-bottom: 0.2rem;
}
.card-content {
    font-size: 0.4rem;
}
.card .card-content .list-block > ul > li{
	border-bottom: 0.1rem solid #E7E7E7;
}
.list-block ul {
    background: #fff;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 100vh;
    overflow-y: auto;
}
.list-block li {
    box-sizing: border-box;
}
.item-content-vip {
    display: flex;
    min-height: 1rem;
    text-decoration: none;
}
.item-content-vip .item-media .item-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.3rem;
    height: 2.3rem;
    padding: 0px !important;
    border: 0.16rem solid transparent;
}
.item-content-vip .item-media .member-level {
    background: linear-gradient(#ffeaaa, #a07539);
    border: 1px solid #ffffff;
    border-radius: 0.1rem;
    color: #603f07;
    font-size: 0.4rem;
    left: 1.7rem;
    position: absolute;
    text-align: center;
    top: 1.6rem;
    /* z-index: 100; */
    
}
.item-content-vip .item-media .item-image .avatar {
    width: 2rem !important;
    height: 2rem !important;
    display: block;
    border-radius: 50%;
}
.list-block .item-inner {
    padding-left: 0.4rem;
    padding-top: 0.4rem;
    padding-bottom: 0.45rem;
    
}
.list-block.media-list .item-title-row {
    display: -webkit-box;
}

.item-case {
    border-style: solid;
    border-color: #30b9fa;
    border-width: 1px;
    padding: 0 0.2rem;
    font-size: 0.4rem;
    color: #30b9fa;
    border-radius: 0.1rem;
    margin: 0.1rem 0.4rem 0.1rem 0;
    font-weight: normal;
    display: inline-block;
    white-space: nowrap;
}
.teshu{
	text-align: center;
	padding-top: 0.5rem;
}
.teshu > img{
	width: 5rem;
	height: 5rem;
}
</style>