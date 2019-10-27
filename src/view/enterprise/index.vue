<template>
	<div class="list-block white">
		
		
    <div class="row">
		<div class="col-40">
			<div class="col-title">优秀企业</div>
		</div>
		<div class="col-60">
			<div class="col-more">
				<a @click="more">了解详情</a>
			</div>
		</div>
	</div>
	<div>
		<div style="padding-left: 0.2rem">
			<div class="swiper-container">
				<div class="swiper-wrapper">					
					<div class="swiper-slide teshu" v-for="(value,index) in enterprise">
						<div>
							<div class="vip-mem-item">
								<div class="text-center">
									<a  @click="test(value.id)">
										<img class="avatar" :src="value.avatar" alt="" />
									</a>
								</div>
								<div style="font-size: 0.02rem;height: 0.4rem;overflow: hidden;">
									{{value.name}}...
								</div>
								<div class="box" >
									<li class="model" v-for="(value,index) in enterprise[index].cate_list" v-if="index < 2">
										<span>{{cate[value]}}</span>
										
									</li>
								</div>
							</div>
						</div>
					</div>																		
				</div>
			</div>
		</div>
	</div>
	
	<div class="line"></div>
	
	
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
	<div class="com-list">
		<div class="">
			<div id="swiper-container-com">
				<div class="swiper-wrapper">
					<div class="swiper-slide" style="width: 90%;" v-for="(value,index) in enterprise">
						<div class="card" @click="test(value.id)">
							<div class="card-content">
								<div class="list-block media-list">
									<ul>
										<li class="item-content">
											<div class="item-media">																									
											    <img style="width: 2rem; height:2rem; border-radius: 50%;" :src="value.avatar" alt="" />											
											</div>
											<div class="item-inner">
												<div class="item-title-row">
													<div class="item-title">
														<a @click="test(value.id)" style="font-size: 0.5rem;color: #333;"> {{value.name}}
														</a>
													</div>
												</div>
												<div class="instr">
													<li style="font-size: 0.3rem;color: #666;height: 2rem;overflow: hidden;">
														{{value.introduce}}
													</li>
												</div>
											</div>
										</li>
										<div class="box" style="padding: 0.15rem;">
											<li class="model" v-for="(value,index) in enterprise[index].cate_list">
												<span>{{cate[value]}}</span>												
											</li>
										</div>
									</ul>
								</div>
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
    import { Swipe, SwipeItem } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    export default {
  	    name: 'index',
  	    props: {
  		    enterprise: {
  			    type: Array
  		    },
  		    cate: {
  			    type: Object
  		    }
  	    },
  	    data(){
  		    return {
  			    title:"企业服务"
  		    }
  	    },
  	    mounted(){ 	
		    var com = document.getElementsByClassName('#swiper-container-com');
  	        var com = new Swiper('#swiper-container-com', {
  	    	    observer:true,
                observeParents:true
  	        });  		
  	    },
  	    components:{
  		
  	    },
  	    methods:{
  		    test(id){
			    this.$router.push({path: '/enterpriseDetails/' + id});
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
  #swiper-container-vip .swiper-slide {
    width: 33% !important;
    margin-right: 0 !important;
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
    font-size: 0.4rem;
    padding: 0.1rem;
  }
    .list-block .item-content {
    box-sizing: border-box;
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
    padding: 0.5rem 0rem 0rem 0.2rem;
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
    
  }
  .item-media{
  	
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
    background: #30b9fa;
    border-radius: 4px;
    padding: 0.1rem;
    color: #FFFFFF;
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
  .instr{
  	height: 2.2rem;
  	overflow: hidden;
  }
  .list-block .box .model{
  	display: inline-block;
  	padding: 0.15rem 0rem 0rem 0rem;
  }
  .line{
		height: 0.1rem;
		width: 100%;
		background: #efeff4;
	}
	.teshu{
		width: 33% !important;
	}
</style>