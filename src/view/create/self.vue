<template>
	<div class="box">
		<mt-header title="项目发布">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <div class="list-block" id="fw-list">
        	<div class="title">
        		<h3 class="ui-title">选择项目分类</h3>
        	</div>        	
        	<div class="row col-center" >
			    <li class="col-25" v-for="(val,index) in lists">
				    <div class="tip"  >
					    <a @click="create(index)">
						    <img :src="'//img.qlylian.com/images/create_'+index+'.png'" alt="" />
						    {{ val }}
					    </a>
				    </div>
			    </li>
			
		    </div>

        </div> 
        
        
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import axios from 'axios';
	export default {
		name: 'self',
		data() {
			return {
				lists:[]
			}
		},
		components:{
			
		},
		methods: {
			getData(){
				axios.get(this.baseCont.PHP_API,{}).then(response => {               
                    this.lists = response.data.data.cate_list;
                }).catch((err) => {
                    console.log(err.msg);
                }); 
			},
			create(index) {
				
		        this.$router.push({path: '/cost/' + index,params:{id:index}});
		        window.parent.scrollTo(0, 0);
  		    }
		},
		mounted() {
			this.getData();
		}
	}
</script>

<style scoped="scoped">
	#fw-list {
    text-align: center;
  }
  #fw-list .tip a {
  	text-decoration: none;
    display: inline-block;
    width: 2.8rem;
    /* height: 3rem; */
    text-align: center;
    font-size: 0.4rem;
    color: #666;
  }
  #fw-list .tip img {  
    width: 1.3rem;
    height: 1.3rem;
    margin: 0 0.7rem;
    
    margin-bottom: 0.2rem;
    display: flex;
    position: relative;
  }
  #fw-list .tip p span{
  	width: 1.6rem;
  	position: absolute;
  	top: 1.5rem;
  }
   .row .col-25 {
    width: 33%;
    min-height: 2.5rem;
    display: inline-block;
  }
  .title{
  	min-height: 1.5rem;
  	line-height: 1.5rem;
  }
  .ui-title{
  	text-align: left;
  	font-size: 0.6rem;
  	padding-left: 0.5rem;
  }
  .col-center{
  	padding-top: 0.9rem;
  }
</style>