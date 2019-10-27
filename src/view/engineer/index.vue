<template>
<div class="list-block white">
	
	<div class="row">
		<div class="col-40">
			<div class="col-title">{{title}}</div>
		</div>
		<div class="col-60">
			<div class="col-more">
				<a @click="more">了解详情</a>
			</div>
		</div>
	</div>
	
	
	<div>
		<div>
			<div class="swiper-container">
				<div class="swiper-wrapper">					
					<div class="swiper-slide" v-for="(value,index) in engineer">						
						<div class="vip-mem-item">
							<div class="text-center">
								<a  @click="goDetail(value.id)">
									<img class="avatar" style="display:inline" :src="value.avatar" alt="" />
								</a>
							</div>
							<div style="margin:0.2rem 0;">
								{{value.user_name}}
							</div>
							<div>
								<span class="pro-tag">
                                {{district[value.province]}}|{{district[value.city]}}
                                
                                </span>
							</div>
						</div>						
					</div>																		
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    export default {
  	    name: 'index',
  	    props: {
  	    	engineer: {
  	    		type:Array
  	    	},
  	    	district: {
        	    type: Object
            },
  	    },
  	    data(){
  		    return {
  			    title: '优秀会员',  			    
  		    }
  	    },
  	    created(){
  	    	
  	    },
  	    mounted(){
      	    var mySwiper = new Swiper('.swiper-container', {      	    	
      	    	observer:true, 
                observeParents:true,
			    loop: true,
                slidesPerView: 'auto',
                loopedSlides: 3,
                            
      	    });
  	    },
  	    components:{
  		
  	    },
  	    methods:{
  		    goDetail(id){
  		    	console.log(id);
			    this.$router.push({path: '/engineerDetails/' + id});
			    window.parent.scrollTo(0, 0);
  		    },
  		    more () {
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
			}
  	    }
    }
</script>

<style scoped="scoped">
	.swiper-slide{
		width: 33% !important;
	}
	.swiper-wrapper{
		
	}
	a{
		text-decoration: none;
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
    background: white;
  }
  .row .col-40 {
    width: 36%;
    margin-left: 4%;
    float: left;
  }
  .col-title {
    margin: 0.7rem 0 0rem 0.6rem;
    border-left: #F06746 solid 0.2rem;
    padding-left: 0.2rem;
    font-size: 0.6rem;
    line-height: 100%;
    color: #333;
    font-weight: bold;
  } 
  .row .col-60 {
    width: 55.99999999999999%;
    margin-left: 4%;
    float: left;
  }
  .col-more {
    padding-right: 0.5rem;
    text-align: right;
  }
  .col-more a {
    color: rgba(240, 103, 70, 1);
    font-size: 0.4rem;
    line-height: 2rem;
    width: 100%;
    display: block;
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
  
  .vip-mem-item {
    border-radius: 0.3rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 0.4rem #d6d6d6;
    font-size: 0.4rem;
    color: #333;
    padding: 0.4rem 0;
    text-align: center;
    margin: 0.3rem 0.2rem;
  }
  .text-center {
    text-align: center;
  }
  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  .pro-tag {
    color: #F06746;
    border: 1px solid rgba(240, 103, 70, 1);
    border-radius: 4px;
    font-size: 0.3rem;
    padding: 0.1rem;
  }	
</style>