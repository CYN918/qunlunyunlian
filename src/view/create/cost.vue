<template>
    <div data-role="page" id="t-page">
    	<mt-header title="项目发布">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <div v-if="this.$route.params.id == 241">
        <div id="select_service_type" style="padding: 0 15px;">
        	<h3 class="ui-title">选择{{data.name}}<span>(多选)</span></h3>
        	<div class="options clearfix">
        		<div class="create_input box" v-for="(val,index) in lists.cate">
                    <input type="checkbox" :value="val.id"  name="use" :id="'test' + val.id"  v-model="autharr">
                    <label :for="'test' + val.id">{{val.name}}</label>
                </div>
        	</div>
            
        </div> 
        
        
        <div id="select_service_type" style="padding: 0 15px;">
        	<h3 class="ui-title">选择{{datas.name}}<span>(可单选)</span></h3>
        	<div class="options clearfix">
        		<div class="create_input" v-for="(val,index) in arry.cate">
                    <input type="radio"  :value="val.id" name="type" :id="'male' + val.id" @change="ajaxmultiselect(val.id)" v-model="tharr">
                    <label :for="'male' + val.id">{{val.name}}</label> 
                </div>
        	</div>

        </div>
        
        <div id="select_service_type" style="padding: 0 15px;">
        	<h3 class="ui-title">选择{{item.name}}<span>(可多选)</span></h3>
        	<div class="options clearfix">
        		<div class="create_input box" v-for="(val,index) in tise">
                    <input type="checkbox" :value="val.id" name="specialty" :id="'specialty' + val.id" v-model="utharr">
                    <label :for="'specialty' + val.id">{{val.name}}</label>
                </div>
        	</div>
        	
        </div>
        </div>
        
        <div v-if="this.$route.params.id == 242">
        <div id="select_service_type" style="padding: 0 15px;">
        	<h3 class="ui-title">选择{{list.name}}<span>(多选)</span></h3>
        	<div class="options clearfix">
        		<div class="create_input box" v-for="(val,index) in lists.cate">
                    <input type="checkbox" :value="val.id"  name="use" :id="'test' + val.id"  v-model="autharr">
                    <label :for="'test' + val.id">{{val.name}}</label>
                </div>
        	</div>

        </div> 
        
        
        
        </div>
        
        <div v-if="this.$route.params.id == 243">
        <div id="select_service_type" style="padding: 0 15px;">
        	<h3 class="ui-title">选择{{data.name}}<span>(单选)</span></h3>
        	<div class="options clearfix">
        		<div class="create_input box" v-for="(val,index) in lists.cate">
                    <input type="radio" :value="val.id"  name="use" :id="'test' + val.id"  v-model="autharr">
                    <label :for="'test' + val.id">{{val.name}}</label>
                </div>
        	</div>

        </div> 
        
        
        <div id="select_service_type" style="padding: 0 15px;">
        	<h3 class="ui-title">选择{{datas.name}}<span>(单选)</span></h3>
        	<div class="options clearfix">
        		<div class="create_input" v-for="(val,index) in arry.cate">
                    <input type="radio"  :value="val.id" name="type" :id="'male' + val.id" @click="ajaxmultiselect(val.id)" v-model="tharr">
                    <label :for="'male' + val.id">{{val.name}}</label> 
                </div>
        	</div>

        </div>
        
        <div id="select_service_type" style="padding: 0 15px;">
        	<h3 class="ui-title">选择{{item.name}}</h3>
        	<div class="options clearfix">
        		<div class="create_input box" v-for="(val,index) in arr.cate">
                    <input type="radio" :value="val.id" name="specialty" :id="'specialty' + val.id" v-model="utharr">
                    <label :for="'specialty' + val.id">{{val.name}}<b class="teshu">{{val.price}}元({{val.describe}})</b></label>
                </div>
        	</div>        	
        </div>
        </div>
        
        <div v-if="this.$route.params.id == 244">
        <div id="select_service_type" style="padding: 0 15px;">
        	<h3 class="ui-title">选择{{list.name}}<span>(多选)</span></h3>
        	<div class="options clearfix">
        		<div class="create_input box" v-for="(val,index) in lists.cate">
                    <input type="checkbox" :value="val.id"  name="use" :id="'test' + val.id"  v-model="autharr">
                    <label :for="'test' + val.id">{{val.name}}</label>
                </div>
        	</div>

        </div> 
        
        
        
        </div>
        
        <div v-if="this.$route.params.id == 245">
        <div id="select_service_type" style="padding: 0 15px;">
        	<h3 class="ui-title">选择{{list.name}}<span>(单选)</span></h3>
        	<div class="options clearfix">
        		<div class="create_input box" v-for="(val,index) in lists.cate">
                    <input type="radio" :value="val.id"  name="use" :id="'test' + val.id"  v-model="autharr">
                    <label :for="'test' + val.id">{{val.name}}</label>
                </div>
        	</div>

        </div> 
        
        
        
        </div>
        
        <div v-if="this.$route.params.id == 246">
        <div id="select_service_type" style="padding: 0 15px;">
        	<h3 class="ui-title">选择{{list.name}}<span>(单选)</span></h3>
        	<div class="options clearfix">
        		<div class="create_input box" v-for="(val,index) in lists.cate">
                    <input type="radio" :value="val.id"  name="use" :id="'test' + val.id"  v-model="autharr">
                    <label :for="'test' + val.id">{{val.name}}</label>
                </div>
        	</div>

        </div> 
        
        
        
        </div>
        
        <div class="btn" @click="nextStep">下一步</div>
        
        
      
        
    </div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import axios from 'axios';
	import localStore from '@/localstorage.js'
	export default {
		name: 'cost',
		data() {
			return {
				lists: [],
				items: [],
				tise: [],
				autharr: [],
				tharr: [],
				utharr: [],
				arry:[],
				datas:[],
				item:[],
				list:[],
				tarr:[],
				arr:[],
				data:[]
			}
		},
		created: function() {
			this.getList();
		},
		components: {
			
		},
		watch: {
			tharr: function(){
				this.utharr = []
			}
		},
		methods: {
			getList(){		    	
	    		axios.get(this.baseCont.PHP_API + '/create/' + this.$route.params.id,{}).then(response => {
	    			this.list = response.data.data.category_all[0];
	    			
                    this.lists = response.data.data.category_all[0];
                    this.arry = response.data.data.category_all[1];
                    this.arr = response.data.data.category_all[2];
                    
                    this.data = response.data.data.category_all[0];
                    
                    
                    this.datas = response.data.data.category_all[1];
                    this.item = response.data.data.category_all[2];
                });		    	
		    },
			ajaxmultiselect(id){
		    	axios.get(this.baseCont.PHP_API + '/ajaxmultiselect/' + id,{}).then(response => {
		    		this.tise = response.data.data;
                }).catch((err) => {
                    console.log(err.msg);
                });	
		    },
		    
			nextStep(){	
				localStorage.clear();
				if(this.$route.params.id == 241){
					if(this.autharr.length == 0){
					Toast({message: '请选择工程造价类别!',duration: 2000});
					return false
				    }
				    if(this.tharr.length == 0){
					Toast({message: '选择工程造价专业!',duration: 2000});
					return false
				    } 
				    if(this.utharr.length == 0){
					Toast({message: '选择项目部分项工程明细!',duration: 2000});
					return false
				    }
				
				}
				if(this.$route.params.id == 242){
					if(this.autharr.length == 0){
					Toast({message: '选择项目用途!',duration: 2000});
					return false
					}
				}
				
				if(this.$route.params.id == 243){
					if(this.autharr.length == 0){
					Toast({message: '选择服务类型!',duration: 2000});
					return false
					}
					if(this.tharr.length == 0){
					Toast({message: '选择标书专业!',duration: 2000});
					return false
					}
					if(this.utharr.length == 0){
					Toast({message: '选择套餐!',duration: 2000});
					return false
					}
				}
				
				if(this.$route.params.id == 244){
					if(this.autharr.length == 0){
					Toast({message: '选择设计分类!',duration: 2000});
					return false
					}
				}
				
				if(this.$route.params.id == 245){
					if(this.autharr.length == 0){
					Toast({message: '选择咨询分类!',duration: 2000});
					return false
					}
				}
				
				if(this.$route.params.id == 246){
					if(this.autharr.length == 0){
					Toast({message: '选择具体类型!',duration: 2000});
					return false
					}
				}
				
				axios.post(this.baseCont.PHP_API + '/issue',{
				    miwen: {
					    type_one:this.$route.params.id,
					    use:this.autharr,
					    type:this.tharr,
					    specialty:this.utharr
				    }
			  }).then(response => {
			   	    if(response.data.code == 200){
			   	    	
			   	    	var items = response.data.data;
    		            localStore.save(items); 
//                      Toast({message: '请耐心等待，加载中...',duration: 2000});
                    
    		            this.$router.push({name: 'cost2',params:{id:this.$route.params.id}});
					    
					    window.parent.scrollTo(0, 0);
//					    location.reload();
			   	    }else{
			   	    	Toast({message: response.data.message,duration: 2000});
			   	    }
    		            
    		            
                }).catch((err) => {
                        console.log(err.msg);
                });
					
		            								        
				}											    		    		
		},
		
		mounted() {
			
			
		},
		
	}
</script>

<style scoped>
.ui-bar-f {
    background: #db4b40;
    color: white;
}
.ui-header, .ui-footer {
    border-width: 1px 0;
    border-style: solid;
    position: relative;
    height: 1.2rem;
    line-height: 1.2rem;
}
.ui-header a{
	width: 0.8rem;
	height: 0.8rem;
	display: block;
	border-radius: 50%;
	border: solid 0.05rem #FFFFFF !important;
	border-color: ;
	float: left;
	margin: 0.1rem 0 0 0.1rem;
	text-align: center;
}
.ui-header h1{
    font-size: 0.6rem;
    padding-right: 0.5rem;
    text-align: center;
    display: block;
    
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    outline: 0 !important;
}
.ui-title{
	font-size: 0.5rem;
	padding: 0.4rem 0 0.4rem 0.4rem;
}
.ui-title span{
	color: #999;
}
.options{
	border: solid 0.05rem #ddd;
	border-radius: 0.2rem;
}
.options .create_input{
	padding-left: 0.4rem;
	height: 1.1rem;
	line-height: 1.1rem;
	font-size: 0.5rem;
	font-family: "微软雅黑";
	
}
.box{
	border-bottom: solid 0.05rem #ddd;
}

.box:nth-last-child(1){
	border-bottom: none;
}
.options .create_input input{
	width: 0.5rem;
	height: 0.5rem;
	
}
.btn{
	width: 50%;
	height: 1.1rem;
	line-height: 1.1rem;
	text-align: center;
	background: none;
	font-size: 0.5rem;
	margin: 0.5rem auto;
	outline: none;
	border-radius: 0.4rem;
	background: #1296db;
	color: #FFFFFF;
}
.ui-header a img{
	width: 0.7rem;
	height: 0.7rem;
}
.teshu{
	font-size: 0.3rem;
}
</style>