<template>
	<div class="box">
		<mt-header title="成员管理">
            <router-link to="/team" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <div class="team">
        	<div class="top">
        		<ul >
        			<li>成员</li>
        			<li>申请时间</li>
        			<li>状态</li>
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
                    		<li>{{val.name}}</li>
                    	    <li>{{val.addtime}}</li>               	
                    	    <li>{{val.status}}</li>
                    	               	          			
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
                axios.get(this.baseCont.PHP_API + '/user/teamplayer', {
                    params: {
                        page: this.page,
                        id: this.$route.params.id
                       
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
		text-align: center;
        padding-top: 0.5rem;
	}
	.top{
		height: 1rem;
		line-height: 1rem;
		background: #F2F2F2;
	}
	.top > ul > li{
		float: left;
		text-align: center;
	}
	.top > ul > li:nth-child(1){
		width: 20%;
	}
	.top > ul > li:nth-child(2){
		width: 40%;
	}
	.top > ul > li:nth-child(3){
		width: 20%;
	}
	.top > ul > li:nth-child(4){
		width: 20%;
	}
	
	.bottom{
		height: 1rem;
		line-height: 1rem;
		
	}
	.bottom > ul > li{
		float: left;
		text-align: center;
	}
	.bottom > ul > li:nth-child(1){
		width: 20%;
	}
	.bottom > ul > li:nth-child(2){
		width: 40%;
	}
	.bottom > ul > li:nth-child(3){
		width: 20%;
	}
	.bottom > ul > li:nth-child(4){
		width: 20%;
	}
	.teshu{
		color: #26a2ff;
	}
</style>