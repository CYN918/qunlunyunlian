<template>
	<div class="test">
	    <div id="filter_company" class="filter-form">
				<form id="filter_company_form">
					<input type="hidden" name="tab" id="tab" value="company" />
					<div class="row filter-row">
						<div class="col-50">
							<select name="region_id" v-model="val" @change="setCouponSelected($event)">
								<option selected value="0">全国</option>
								<option :value="coupon.id"  v-for="(coupon,index) in lists" :key="index" >{{coupon.name}}</option>
								
							</select>
						</div>
						<div class="col-50">
							<select name="org_type" id="company_type_select" v-model="value" @change="getCouponSelected($event)">
								<option value="0">全部类型</option>
								<option :value="coupon.id"  v-for="(coupon,index) in data" :key="index">{{coupon.name}}</option>								
							</select>
						</div>
					</div>
				</form>
			</div>
			
			<!-- 企业列表 -->
			<div class="content-block members-list">
				
				<div class="card">
					<div class="card-content">
						<div class="list-block media-list">
							<div v-if="isnot && ifload">
                                <center>
                        	        <mt-spinner :type="3"></mt-spinner>
                        	        <p>数据正在加载中...</p>
                                </center>
                            </div>
							<ul v-if="isnot" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
								<li v-for="(val,index) in list" v-if="val.supervise_type != 1" :key="index">
									<a @click="enterprise(val.uid)" class="item-content">
										<div class="item-media">
											
											<img class="avatar" title="kiwi" :src="val.avatar" alt="" style="width: 2rem; height:2rem; border-radius: 50%;"/>
										</div>
										<div class="item-inner" style="font-size: 0.4rem;">
											<div class="item-title-row">
												<div v-if="val.supervise_type == 2" class="item-subtitle" style="color: #333333; font-size: 0.4rem;">
													{{val.user_name}}
												</div>
												<div v-else class="item-subtitle" style="color: #333333; font-size: 0.4rem;">
													{{val.company}}
												</div>
											</div>
											<div class="item-subtitle" style="color: #30b9fa;margin-top: 0.1rem;">
												<div class="item-case" style="background: #30b9fa; color: #ffffff;">{{val.grade}}</div>
												<div class="item-case" style="background: #30b9fa; color: #ffffff;" v-if="val.supervise_type == 2">工作室</div>
												<div class="item-case" style="background: #30b9fa; color: #ffffff;" v-if="val.supervise_type == 3">企业</div>
												<div class="item-case" v-for="(value,item) in list[index].major" v-if="item < 2">{{value}}</div>...
											</div>
											<div class="item-title-row" style="color: #666666;margin-top: 0.1rem;font-weight: bold;">
												
											    <div class="item-subtitle" style="font-size: 0.3rem;">完成项目：{{val.e_num}}个&nbsp;&nbsp;</div>
											    <!--<div class="item-subtitle" style="font-size: 0.3rem;">入会时间：{{val.working_life}}&nbsp;&nbsp;</div>-->
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
	</div>
</template>

<script>
	import { InfiniteScroll } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default {
	name: 'select02',
	data () {
	    return {
	    	list: [],
	    	lists:[],
	    	val:'0',
	    	value:'3',
	    	data: [
	    	   {id:'3',name:'企业'},
	    	   {id:'2',name:'工作室'}
	    	],
	    	uid:'',
	    	total: 0,
            page: 1,
            lastpage: 0,
            ifload: true,
            loading: false,
            isnot: true
	    	
	    }
	},
	props: {
	    
    },
	components:{
		
		
	},
	created(){
		/*放这里也可以,这里是页面渲染之前就请求this.test = 后台返回的数据;*/
	},
	mounted() {
		this.getData();
		
        
    },
	methods: {
		loadMore() {                   
            this.loading = true;
            setTimeout(() => {                     	
            	this.getList()                                    	
            }, 2000);                   
        },
        getList(){
        	axios.get(this.baseCont.PHP_API + '/engineer',{                		                		
    			params: {
    				area_id : this.val,
    				supervise_type : this.value,
    				page: this.page
    			}
    		}).then(response => {
    			if(response.data.code === 200){
			        let arr = response.data.data.engineer_auth
                    for (let i = 0; i < arr.length; i++) {
                        this.list.push(arr[i])
		            }
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
    	getData(){
    		axios.get(this.baseCont.PHP_API + '/engineercity',{}).then(response => {
               
                this.lists = response.data.data
                        
            }).catch((err) => {
                console.log(err.msg);
            });
    	},
	  	enterprise(uid){
        	this.uid = uid;
        	this.$router.push({path: '/enterpriseDetails/' + this.uid,params:{id:this.uid}});
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
	padding-top: 2.1rem;
	padding-bottom: 2.1rem;
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
.list-block .item-content {    
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 2.8rem;
}

.list-block.media-list .item-inner {
    display: block;
    padding-top: 0.2rem;
    padding-bottom: 0.45rem;
    padding-left: 0.4rem;
    -webkit-align-self: stretch;
    align-self: stretch;
}
.list-block.media-list .item-title-row {
    display: -webkit-box;
    
    
}
.list-block .item-subtitle {
    font-size: 0.75rem;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
}
.item-case {
    border-style: solid;
    border-color: #30b9fa;
    border-width: 1px;
    padding: 0 0.05rem;
    font-size: 0.4rem;
    color: #30b9fa;
    border-radius: 0.1rem;
    margin: 0.1rem 0.1rem 0.1rem 0;
    font-weight: normal;
    display: inline-block;
    white-space: nowrap;
}
.item-media{
	padding-left: 0.4rem;
}
.list-block > ul > li{
	
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
</style>