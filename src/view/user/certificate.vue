<template>
    <div class="message">
        <mt-header title="我的职业证书">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="certificate">
        	<li>
        		<div class="text">职业证书</div>
        	</li>
        	<li>
        		<router-link to="/upload">
        		    <mt-button type="primary" size="small">上传证书</mt-button>
        		</router-link>
        	</li>       	
        </div>
         <div class="top">
        	<ul>
        		<li>证书名称</li>
        		<li>证书</li>
        		<li>操作</li>
        	</ul>
        </div>
        
        
        
        
         <div class="list-detail">
        	<div class="list">
        		 <div v-if="isnot && ifload">
                <center><mt-spinner :type="3"></mt-spinner></center>
            </div>
        	    <ul v-if="isnot"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                 <div class='certificatelist'  v-for="val in list">
                    <ul>
        		    <li style="font-size: 0.2rem;">{{val.name}}</li>	
        		    <li align="center"><img :src="val.url" /></li>
        		    <li> <mt-button type="primary" size="small" @click="dissolution(val.id)">删除</mt-button></li>
        		    </ul>
        		    </div>
        	    </ul>
        	     <div v-else class="ve-no-message"><center>暂无信息</center></div>
            </div>
            
        </div>
        
        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
    import { Header } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    import { Spinner } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    import { Button } from 'mint-ui';
    export default {
	  name: 'message',
        data () {
            return {
                total: 0,
                page: 1,
                lastpage: 0,
                ifload: true,
                loading: false,
                isnot: true,
                list: []
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
		
		dissolution(id){      	
			console.log(id)
        		MessageBox.confirm('确定执行此操作?').then(action => {
                axios.get(this.baseCont.PHP_API + '/user/certificatedel', {
                    params: {
                        id: id   
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
                        Toast({
                            message: response.data.message,
                            duration: 1000
                        });
                        this.$router.push({path: '/team'});
                        location.reload()
                    }else if(response.data.code == 10003){
                        if(response.data.data.length >0){
                            Toast({
                                message: response.data.data[0],
                                duration: 2000
                            });
                        }
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
				  })
                 });
        	},
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    this.getList()
                }, 1000);
            },
            getList () {
                axios.get(this.baseCont.PHP_API + '/user/certificate', {
                    params: {
                        page: this.page
                    }
                })
                .then(response => {
                    if (response.data.code === 200) {
                        let arr = response.data.data.list
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
                })
            }
        },
        mounted () {
        }
	}
</script>
<style scoped>
	
	
	.certificate{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
	}
	.certificate > li{
		display: inline-block;
	}
	.certificate > li:nth-child(2){
		padding-left: 4rem;
	}
	.certificate .text{
		font-size: 0.6rem;
		padding-left: 0.3rem;
	}
	.top{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
	}
	.top > ul > li{
		text-align: center;
		float: left;
		font-size: 0.5rem;
	}
	.top > ul > li:nth-child(1){
		width: 30%;
	}
	.top > ul > li:nth-child(2){
		width: 40%;
	}
	.top > ul > li:nth-child(3){
		width: 30%;
	}
	
	
	
	
   .certificatelist{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
	}
	.certificatelist > ul > li{
		text-align: center;
		float: left;
		font-size: 0.5rem;
	}
	.certificatelist > ul > li:nth-child(1){
		width: 30%;
	}
	.certificatelist > ul > li:nth-child(2){
		width: 40%;
		vertical-align: middle;
	}
	.certificatelist > ul > li:nth-child(2) > img{
		width: 2.5rem;
		height: 2.5rem;
		vertical-align: middle;
	}
	.certificatelist > ul > li:nth-child(3){
		width: 30%;
	}
</style>