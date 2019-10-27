<template>
	<div class="index_projects">
		
		<!-- xuanze -->
		<div id="project_tab_item" style="width: 100%;">
			<div id="filter_project" class="filter-item">
				<form id="filter_project_form">
					<div class="row filter-row">
						<div class="col-50">
							<select name="region_id" v-model="val" @change="setCouponSelected($event)">
							    <option selected value="0">全国</option>
							    <option :value="coupon.id"  v-for="(coupon,index) in lists" :key="index" >{{coupon.name}}</option>							   
						    </select>
						</div>
						<div class="col-50">
							<select name="profession" v-model="value" @change="getCouponSelected($event)">
							    <option selected value="0">不限专业</option>
							    <option :value="item.id" v-for="(item,index) in datas" :key="index">{{item.name}}</option>
						    </select>
						</div>
						<!--<div class="col-33">-->
						<!--</div>-->
					</div>
				</form>
			</div>
		</div>
		
		<!-- projects -->
		<div class="list-block white">
				
										
						
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
						<li v-for="item in list">
							<a @click="projects(item.id)" class="item-content external" style=" line-height: 0.9rem;">
								<div class="item-inner" style="font-size: 0.6rem;">
									<div class="item-title-row">
										<div class="item-title" style="color: #333333; font-size: 0.8rem;">
											<div class="wx-project-name-topic">
												<em class="wx-normal-pd-block" style="border: 0; color: #FFFFFF; background-image: linear-gradient(#47befa, #47befa);">{{item.type_id}}</em>
												<!--<em style="border: 0.1rem solid #f06746;color:#ffffff;background-color: #f06746;border-radius: 0.1rem;"><span style="color:#ffffff;margin: 0rem 0.1rem">派单项目</span></em>-->
												<em style="font-weight: bold;font-style: normal;">
                                                    <span style='color: #f66626'></span>{{district_list[item.province]}} {{district_list[item.city]}} | {{item.title}}
                                                </em>
											</div>

										</div>
									</div>
									<div class="item-title-row">
										<div class="item-subtitle" v-bind:style="{ color: activeColor }">
											¥{{item.show_cash}}元
											<span class="mini-title">
                                            (雇主报价)
                                            </span>
											<span class="project-tags">
                                                <span v-bind:style="{ color: activeColor }">{{item.status_name}}</span>
											    <i class="project-tag-views"></i>
											    <span>{{item.view_count}}</span>
											</span>
											<span class="mini-title">
                                            </span>

										</div>
									</div>
									<div class="item-title-row">
										<div class="item-subtitle" style="font-size: 0.4rem;">
											<span class="red-font-color">{{item.work_count}}人投标中...</span>
										</div>
										<div class="item-after" style="color: #999999;">
											发布日期：{{item.created_at}}
										</div>
									</div>
								</div>
							</a>
						</li>
					</ul>					
					<div v-else class="ve-no-message"><center>暂无项目</center></div>
				</div>
			</div>
		</div>
									
		</div>
			
			
		 
		
        <!--底部导航-->
        <index-tab page="1"></index-tab>
    
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent'; 
    import { InfiniteScroll } from 'mint-ui';
    import { Spinner } from 'mint-ui';
    import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default {
	name: 'index_projects',
	data () {
	    return {
	    	isShowTip:false,
			lists: [],
	    	val:'0',
	    	value:'0',
	    	datas:[],
	    	district_list:[],
	    	activeColor:'#f22929',
	    	total: 0,
            page: 1,
            lastpage: 0,
            ifload: true,
            loading: false,
            isnot: true,
            list:[]
	    }
	},
	mounted() {
        this.getData();
        this.evaluateok();
        
    },
	components:{
	  	indexTab
	},
	created() {
		
	},
	methods: {
		loadMore() {
            this.loading = true;
            setTimeout(() => {
                this.getList()
            }, 2500);
        },
        getList(){
            axios.get(this.baseCont.PHP_API + '/tasks',{                		                		
    			params: {
    				province: this.val,
    				cate_id: this.value,
    				page: this.page
    			}
    		}).then(response => {
    			if(response.data.code === 200){
    				let arr = response.data.data.taskList
                    for (let i = 0; i < arr.length; i++) {
                        this.list.push(arr[i])
    			}                
                this.district_list = response.data.data.district_list
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
    	evaluateok(){
    		axios.get(this.baseCont.PHP_API + '/taskcate',{}).then(response => {
           
                this.datas = response.data.data
                                 
            }).catch((err) => {
                console.log(err.msg);
            });
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
        
        projects(id){
        	this.$router.push({path: '/projectsDetails/' + id});
        	window.parent.scrollTo(0, 0);
        },
        
        
	    }		
	}
</script>

<style scoped>

select{
	border: none;
	outline: none;
	background: #FFFFFF;
}
a{
	text-decoration: none;
}
.mini-title{
	font-size: 0.3rem;
	color: #999999;
}
.yijia{
	font-size: 0.3rem;
	color: #666666;;
}
.jine{
	font-size: 0.3rem;
	color: #666666;;
}
.white{
	padding-bottom: 2rem;
}


.buttonMargin {
  margin-top: 10px;
}
.row.filter-row {
    text-align: center;
    background: #ffffff;
    border-bottom: 0.05rem solid #d2d2d2;
    font-size: 0.7rem;
}
.row {
    overflow: hidden;
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
    position: relative;
    border-radius: 0.1rem;
    
  }
  .com-list .card {
    width: 95%;
    border-radius: 0.4rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 0.4rem #d6d6d6;
    margin: 0.4rem 0.2rem !important;
  }
  .card-content {
    position: relative;
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
    border-bottom: 0.05rem solid #d2d2d2;
  }
  .list-block .item-content {
    box-sizing: border-box;
    padding-left: 0.75rem;
    min-height: 2.2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .list-block .item-inner {
    padding-right: 0.75rem;
    position: relative;
    width: 100%;
    min-height: 2.2rem;
    overflow: hidden;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: block;
    -webkit-align-self: stretch;
    align-self: stretch;
    padding-top: 0.3rem;
  }
  .item-media{
  	padding-top: 0.3rem;
  }
  .list-block.media-list .item-title-row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
  .model span {
    font-size: 0.3rem;
    background: rgba(245, 245, 245, 1);
    border-radius: 4px;
    padding: 0.1rem;
    color: #666;
  }
  .list-block .item-title {
    -webkit-flex-shrink: 1;
    -ms-flex: 0 1 auto;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    font-weight: 500;
  }
  .item-title-row .item-title .wx-project-name-topic {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.4rem;
  }
  .item-title-row .item-title .wx-project-name-topic .wx-normal-pd-block {
    font-size: 0.4rem;
    border: 1px solid #999999;
    border-radius: 2px;
    color: #666666;
    padding: 0rem 0.1rem;
    font-style: normal;
  }
  .list-block.media-list .item-title-row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
  .list-block .item-subtitle {
    font-size: 0.75rem;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
  }
  .item-title-row .item-subtitle .mini-title {
    font-size: 0.4rem;
    color: #999999;
  }
  .item-title-row .item-subtitle .project-tags {
    color: #666666;
    font-size: 0.4rem;
    display: inline-flex;
    align-items: center;
    vertical-align: bottom;
  }
  .item-title-row .item-subtitle .project-tags i.project-tag-price {
    display: inline-flex;
    margin-right: 0.1rem;
    margin-left: 0.6rem;
  }
  .item-title-row .item-subtitle .project-tags i.project-tag-price{
    content: '';
    width: 1.2em;
    height: 1.2em;
    background: url(../../static/images/jiage.png) no-repeat;
    background-size: 1.2em 1.2em;
  }
  .item-title-row .item-subtitle .project-tags i.project-tag-views {
    display: inline-flex;
    margin-right: 0.1rem;
    margin-left: 0.6rem;
  }
  .item-title-row .item-subtitle .project-tags i.project-tag-views:before {
    content: '';
    width: 1.2em;
    height: 1.2em;
    background: url(../../static/images/kejian.png) no-repeat;
    background-size: 1.2em 1.2em;
  }
  .item-title-row .item-subtitle .project-tags i.project-tag-cad {
    content: '';
    width: 1.2em;
    height: 1.2em;
    background: url(../../static/images/tuzhi.png) no-repeat;
    background-size: 1.2em 1.2em;
  }
  .list-block.media-list .item-title-row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
  .list-block .item-subtitle {
    font-size: 0.4rem;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
  }
  .red-font-color {
    color: #47befa;
  }
  .list-block .item-after {
    white-space: nowrap;
    color: #5f646e;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    margin-left: 0.25rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    max-height: 1.4rem;
    font-size: 0.4rem;
  }

</style>