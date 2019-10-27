<template>
	<div class="box">
	    <mt-header title="查看我的评价">
            <router-link to="/index_members" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <div class="praise" v-if="this.list.length != 0">
        	<label>好评度</label>
        	<mt-badge type="primary">{{list.e_star}}%</mt-badge>
        </div>
        <div class="praise_list" v-if="this.list.length != 0">
        	<ul>
        		<li v-for="(val,index) in list.tagall">{{ index }}({{ val }})</li>
        	</ul>
        </div>
        <div class="project_praise_list">
        	<div v-if="isnot && ifload">
                <center>
                	<mt-spinner :type="3"></mt-spinner>
                	<p>数据正在加载中...</p>
                </center>
            </div>
        	<ul v-if="isnot" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        		<li v-for="val in list.comment_list">
        			<div class="project_praise_list_one">
        				<div class="project_title">项目名称：{{val.title}}</div>
        				<div class="project_price">
        					<div class="project_price_left">总造价：{{val.show_cash}}元</div>
        					<div class="project_price_right">发布日期：{{val.created_at}}</div>
        				</div>
        				<div class="project_content" v-for="(item,index) in val.taguser">
        				    <div class="project_content_left">
        				     	<div class="user_level" v-if="index == 0">
        				     		<a href="" class="comment-plus-icon">雇主</a>
        				     	</div>
        				     	<div class="user_level" v-if="index == 1">
        				     		<a href="" class="comment-plus-icon">平台</a>
        				     	</div>
        				     	<div class="user_info" v-if="index == 0">
        				     		<img :src="item.avatar" width="25" height="25" class="avatar"/>{{item.name}}
        				     	</div>
        				     	<div class="user_info" v-if="index == 1">
        				     		<img :src="item.avatar" width="25" height="25" class="avatar"/>{{item.name}}
        				     	</div>
        				    </div>
        				    <div class="project_content_right">
        				    	<div class="project_content_right_star" v-if="index == 0">
        				    		<mt-cell title="技术水平">
                                        <span><div :class="'star' + item.technical_level"></div></span>
                                    </mt-cell>
                                    <mt-cell title="完成时间">
                                        <span><div :class="'star' + item.complet_time_level"></div></span>
                                    </mt-cell>
        				    	</div>
        				    	<div class="project_content_right_star" v-if="index == 1">
        				    		<mt-cell title="成果质量">
                                        <span><div :class="'star' + item.quality_level"></div></span>
                                    </mt-cell>
                                    <mt-cell title="沟通服务">
                                        <span><div :class="'star' + item.service_level"></div></span>
                                    </mt-cell>
        				    	</div>
        				    	<div class="project_content_right_introduction">
        				    		<p class="comment-con">{{item.content}}</p>
        				    	</div>
        				    	<div class="project_content_right_praise_list" v-if="index == 0">
        	                        <ul>
        		                        <li v-for="value in item.tag">{{value}}</li>        		                         		
        	                        </ul>
                                </div>
                                <div class="project_content_right_time">
                                	<span>{{item.created_at}}</span>
                                </div>
        				    </div>
        				</div>
        				
        			</div>
        		</li>
        		
        		
        	</ul>
        	<div v-else class="ve-no-message"><center>暂无评价</center></div>
        </div>
        
        
		<index-tab page="2"></index-tab>
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import star from "@/view/assembly/star";
	import { Badge } from 'mint-ui';
    import { Navbar, TabItem } from 'mint-ui';
    import { Header } from 'mint-ui';
    import { Search } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
    import { Spinner } from 'mint-ui';
    import { Field } from 'mint-ui';
    import {Indicator, MessageBox} from 'mint-ui';
    import axios from 'axios'
	export default {
		name: 'comment',
		data() {
			return {
				total: 0,
                page: 1,
                lastpage: 0,
                ifload: true,
                loading: false,
                isnot: true,
                list:[]
			}
		},
		components:{
	  	    indexTab,
	  	    star
        },
        watch: {
           
        },
		methods: {
            getTechnical (e) {
               this.technical = e
            },
            getComplettime (e) {
               this.complettime = e
            },
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    this.getList();
                }, 2500);
            },
            getList(){
                axios.get(this.baseCont.PHP_API + '/comment/' + this.$route.params.uid,{}).then(response => {
    			    if(response.data.code === 200){
    				    this.list = response.data.data
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
        },
        mounted () {            
            
            
        }
	}
</script>

<style scoped>
	.box{
		padding-bottom: 2rem;
	}
	.project_praise_list > ul > li{
		width: 100%;
		border-bottom: 1px #30b9fa dashed;
	}
	.project_title{
		min-height: 0.8rem;
		line-height: 0.8rem;
		font-size: 14px;
		margin-left: 10px;
	}
	.praise{
		width: 50%;
		font-size: 0.5rem;
		margin: 0.5rem auto;
		text-align: center;
	}
	.project_price{
		min-height: 0.8rem;
		line-height: 0.8rem;
		font-size: 14px;
		margin-left: 10px;
	}
	.project_content_left{
		min-height: 0.8rem;
		line-height: 0.8rem;
		font-size: 14px;
		margin-left: 10px;
	}
	.praise_list{
		width: 100%;
		border-bottom: 1px #30b9fa dashed;
		padding-bottom: 0.5rem;
	}
	.praise_list > ul{
		padding-left: 0.15rem;
	}
	.praise_list > ul > li{
		width: 19%;
		height: 0.5rem;
		border: 1px solid #e0e0e0;
		display: inline-block;
		text-align: center;
		line-height: 0.5rem;
		color: #999;
		margin-top: 0.2rem;
	}
	.project_title .project_price{
		width: 100%;
	}
	.project_price_left{
		width: 40%;
		float: left;
	}
	.project_price_right{
		width: 60%;
		float: left;
	}
	.comment-plus-icon{
		display: inline-block;
        padding: 0 4px;
        font-size: 12px;
        line-height: 18px;
        background: #414141;
        color: #30b9fa;
        border-radius: 1px;
        margin: 5px 5px 0 0;
	}
	.user_info{
		max-width: 100px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        vertical-align: top;
        line-height: 15px;
        font-size: 14px;
	}
	.avatar{
		border-radius: 50%;
        margin-right: 5px;
        vertical-align: middle;
	}
	.project_content_right_introduction{
		min-height: 0.8rem;
		font-size: 14px;
		line-height: 0.8rem;
	}
	.comment-con{
        margin-left: 10px;
        color: #333;
	}
	.project_content_right_praise_list{
		min-height: 0.8rem;
		line-height: 0.8rem;
		font-size: 14px;
	}
	.project_content_right_praise_list > ul{
		margin-left: 10px;
	}
	.project_content_right_praise_list > ul > li{
		display: inline-block;
		border: 1px solid #e0e0e0;
		color: #999;
		width: 20%;
		height: 0.8rem;
		text-align: center;
	}
	.project_content_right_time{
		min-height: 0.8rem;
		line-height: 0.8rem;
		font-size: 14px;
	}
	.project_content_right_time > span{
		margin-left: 10px;
	}
	.star5 {
		display: inline-block;
        width: 78px;
        height: 14px;
        background: url(//img.qlylian.com/images/star.png) no-repeat;
        background-position: 0 0;
    }
    .star4 {
    	display: inline-block;
        width: 78px;
        height: 14px;
        background: url(//img.qlylian.com/images/star.png) no-repeat;
        background-position: -16px 0;
    }
    .star3 {
    	display: inline-block;
        width: 78px;
        height: 14px;
        background: url(//img.qlylian.com/images/star.png) no-repeat;
        background-position: -32px 0;
    }
    .star2 {
    	display: inline-block;
        width: 78px;
        height: 14px;
        background: url(//img.qlylian.com/images/star.png) no-repeat;
        background-position: -48px 0;
    }
    .star1 {
    	display: inline-block;
        width: 78px;
        height: 14px;
        background: url(//img.qlylian.com/images/star.png) no-repeat;
        background-position: -64px 0;
    }
    .star0 {
    	display: inline-block;
        width: 78px;
        height: 14px;
        background: url(//img.qlylian.com/images/star.png) no-repeat;
        background-position: -80px 0;
    }
</style>