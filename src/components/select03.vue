<template>
	<div class="test">
	    <div id="filter_company" class="filter-form">
				<form id="filter_company_form">
					<input type="hidden" name="tab" id="tab" value="company" />
					<div class="row filter-row">
						<div class="col-50">
							<select name="region_id" v-model="val" @change="setCouponSelected($event)">
								<option selected value="0">全国</option>
								<option :value="coupon.id"  v-for="(coupon,index) in list" :key="index" >{{coupon.name}}</option>
								
							</select>
						</div>
						<div class="col-50">
							<select name="profession" v-model="value" @change="getCouponSelected($event)">
							    <option selected value="0">不限专业</option>
							    <option :value="item.id" v-for="(item,index) in datas" :key="index">{{item.name}}</option>
						    </select>
						</div>
					</div>
				</form>
			</div>
			
			<!-- 企业列表 -->
			<div class="content-block members-list" id="companies_list" obj="company" total_pages="8" current_page="1">
				
				<div class="card" v-for="(val,index) in lists" v-if="val.supervise_type == 3">
					<div class="card-content">
						<div class="list-block media-list">
							<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="4">
								<li >
									<a @click="enterprise(val.uid)" class="item-content">
										<div class="item-media">
											
											<img class="avatar" title="kiwi" :src="val.avatar" alt="" style="width: 1.5rem; height:1.5rem; border-radius: 50%;"/>
										</div>
										<div class="item-inner" style="font-size: 0.4rem;">
											<div class="item-title-row">
												<div class="item-subtitle" style="color: #333333; font-size: 0.4rem;">
													{{val.user_name}}
												</div>
											</div>
											<div class="item-title-row model-ellipsis" style="margin-top: 0.3rem;" >
												<li v-for="(value,item) in lists[index].major" v-if="item < 3" class="item-case">{{value}}</li>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
		</div>
	</div>
</template>

<script>
	import { InfiniteScroll } from 'mint-ui';
	import axios from 'axios'
	export default {
	name: 'select02',
	data () {
	    return {
	    	lists:[],
	    	list: [],
	    	val:'0',
	    	value:'0',
	    	uid:'',
	    	datas:[]
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
		this.show();
		this.getData();
		this.evaluateok();
        
    },
	methods: {
	  	show(){
    		axios.get(this.baseCont.PHP_API + '/engineer',{
    			params: {
    				area_id : this.val,
	        		serv_id : this.value,
	        	    supervise_type : '3'
    			}
    		}).then(response => {
                // window.sessionStorage.token = response.data.data
//                      console.log(response.data.data[0].name);
                this.lists = response.data.data
                console.log(this.lists)          
            }).catch((err) => {
                 console.log(err.msg);
            });
    	},
    	getData(){
    		axios.get(this.baseCont.PHP_API + '/engineercity',{}).then(response => {
                // window.sessionStorage.token = response.data.data
//              console.log(response.data.data[0].name);
                this.list = response.data.data
                console.log(this.lists)          
            }).catch((err) => {
                console.log(err.msg);
            });
    	},
    	evaluateok(){
    		axios.get(this.baseCont.PHP_API + '/engineercate',{}).then(response => {
                // window.sessionStorage.token = response.data.data
//                      console.log(response.data.data[0].name);
                this.datas = response.data.data
//                      console.log(this.datas)                   
            }).catch((err) => {
                console.log(err.msg);
            });
    	},
	  	enterprise(uid){
        	this.uid = uid;
        	this.$router.push({path: '/enterpriseDetails/' + this.uid,params:{id:this.uid}});
            window.parent.scrollTo(0, 0);        	
	        console.log(this.uid); 
	  	},
	  	loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.lists[this.lists.length - 1];
                for (let i = 1; i <= 5; i++) {
                    this.lists.push(last + i);
                }
                    this.loading = false;
            }, 2500);
        },
        setCouponSelected(event){                	
            this.show();
//          console.log(event.target.value);
            for(let i=0;i<this.list.length;i++){
                if(this.list[i].id == event.target.value) {                            
                    this.ARModel = this.list[i].id;
//                  console.log(this.ARModel)                           
                }
            }                    
        },
        getCouponSelected(event){                	
            this.show();
//          console.log(event.target.value);
            for(let i=0;i<this.data.length;i++){
                if(this.data[i].id == event.target.value) {                            
                    this.AEModel = this.data[i].id;
                    console.log(this.value)                           
                }
            }                    
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
.card {
    border-width: 0.02rem 0;
    border-bottom: 0.1rem solid #E7E7E7;
    border-color: #e7e7e7;
    margin-bottom: 0.2rem;
}
.list-block .item-content {    
    display: flex;
    align-items: center;
    text-decoration: none;
}

.list-block.media-list .item-inner {
    display: block;
    padding-top: 0.5rem;
    padding-bottom: 0.45rem;
    padding-left: 0.4rem;
    -webkit-align-self: stretch;
    align-self: stretch;
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
.item-case {
    border-style: solid;
    border-color: #e06d4a;
    border-width: 1px;
    padding: 0 0.05rem;
    font-size: 0.4rem;
    color: #e06d4a;
    border-radius: 0.1rem;
    margin: 0.1rem 0.1rem 0.1rem 0;
    font-weight: normal;
    display: inline-block;
    white-space: nowrap;
}
.item-media{
	padding-left: 0.4rem;
}
</style>