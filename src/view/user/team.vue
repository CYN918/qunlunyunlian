<template>
	<div class="box">
		<mt-header title="我的团队">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="btn">
        	<mt-button type="primary" @click="join">加入团队</mt-button>
            <mt-button type="primary" @click="create">创建团队</mt-button>
        </div>
        
        <div class="team">
        	<div class="top">
        		<ul >
        			<li>团队编号</li>
        			<li>团队名称</li>
        			<li>我的角色</li>
        			<li>团队状态</li>
        			<li>团队成员</li>
        			<li>新申请</li>
        			<li>操作</li>
        		</ul>
        	</div>
        	<div class="bottom">
           <div v-if="isnot && ifload">
                <center><mt-spinner :type="3"></mt-spinner></center>
            </div>
        		<ul v-if="isnot"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                    <div class="bottom" v-for="val in list">
                    	<ul>
                    		<li>{{val.id}}</li>
                    	    <li>{{val.name}}</li>
                    	    <li>{{val.muid == val.create_uid ? '团长': "团员"}}</li>
                    	    <li>{{val.status == 1 ? '正常运作': "已解散"}}</li>
                    	    <li>{{val.members}}</li>
                    	    <li>{{val.new_members}}</li>
                    	    <li> 
                    	    	
                    	     
                    	    	<div v-if="val.muid== val.create_uid">                    	    	        
                    	    	<router-link  class="teshu" :to="'/teamplayer/'+val.id">			        
                    	    	 成员管理
                    	    	</router-link> 
                    	   		<div  @click="dissolution(val.id)" class="teshu" >
                    	    	 解散团队
                    	       </div> 
                    	    	</div>    	
                    		     <div v-else>
                    		    <div  @click="sign(val.id)" class="teshu">			        
                    	    	 退出团队
                    	    	 </div>
                    			 </div>  
                    	    </li>
        			        
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
	import { Header } from 'mint-ui';
	import indexTab from '@/components/indexTabComponent';
    import { Toast } from 'mint-ui';
    import { Button } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    import axios from 'axios'
	export default {
		name: 'team',
		data() {
			return {
				selected: '',
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
        	join(){
        		MessageBox.prompt('请输入团队编号').then(({ value, action }) => {
               axios.post(this.baseCont.PHP_API + '/user/teamApply', {
                    team_id: value,
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
				.catch(function (error) {
				})
                });
        	},
        	dissolution(id){      	
        		MessageBox.confirm('确定执行此操作?').then(action => {
                axios.get(this.baseCont.PHP_API + '/user/teamDisable', {
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
        	
        	
        	sign(id){      	
        		MessageBox.prompt('请输入退出理由').then(({ value, action }) => {
               axios.post(this.baseCont.PHP_API + '/user/exitTeam', {
                    exit: value,
                    id :id,
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
				.catch(function (error) {
				})
                 });
        	},
        	
        	
        	create(){
        		this.$router.push({path: '/create'});
        	},
        	   loadMore() {
                this.loading = true;
                setTimeout(() => {
                    this.getList()
                }, 1000);
            },
            getList () {
                axios.get(this.baseCont.PHP_API + '/user/myTeam', {
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

<style  scoped="scoped">
	.btn{
		height: 1.5rem;
		line-height: 1.5rem;
		text-align: center;
        
	}
	.top{
		height: 1rem;
		line-height: 1rem;
		background: #F2F2F2;
		margin-top: 0.2rem;
	}
	.team .top > ul > li{
		float: left;
		text-align: center;
	}
	.team .top > ul > li:nth-child(1){
		width: 15%;
	}
	.team .top > ul > li:nth-child(2){
		width: 15%;
	}
	.team .top > ul > li:nth-child(3){
		width: 15%;
	}
	.team .top > ul > li:nth-child(4){
		width: 15%;
	}
	.team .top > ul > li:nth-child(5){
		width: 15%;
	}
	.team .top > ul > li:nth-child(6){
		width: 10%;
	}
	.team .top > ul > li:nth-child(7){
		width: 15%;
	}
	.bottom{
		height: 1rem;
		margin-top: 0.2rem;
	}
	.team .bottom > ul > li{
		float: left;
		text-align: center;
	}
	.team .bottom > ul > li:nth-child(1){
		width: 15%;
	}
	.team .bottom > ul > li:nth-child(2){
		width: 15%;
	}
	.team .bottom > ul > li:nth-child(3){
		width: 15%;
	}
	.team .bottom > ul > li:nth-child(4){
		width: 15%;
	}
	.team .bottom > ul > li:nth-child(5){
		width: 15%;
	}
	.team .bottom > ul > li:nth-child(6){
		width: 10%;
	}
	.team .bottom > ul > li:nth-child(7){
		width: 15%;
	}
	.teshu{
		color: #26a2ff;
	}
</style>