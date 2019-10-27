<template>
	<div class="box">
		<mt-header title="财务管理">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <mt-navbar v-model="selected">
        	<mt-tab-item id="0">最近交易记录</mt-tab-item>
            <mt-tab-item id="1">充值记录</mt-tab-item>
            <mt-tab-item id="2">提现记录</mt-tab-item>
            <mt-tab-item id="3">我的积分</mt-tab-item>
        </mt-navbar>
        
        <mt-tab-container>
        	<mt-tab-container-item>
        		<div class="trading-top" v-if="selected == 0">我的资产：{{items.balance}}元<router-link to="/cash" style="float:right;margin-right:.5rem;"><mt-button type="primary">充值</mt-button></router-link></div>
        		<div class="trading-top" v-if="selected == 1">我的资产：{{items.balance}}元</div>
        		<div class="trading-top" v-if="selected == 2">我的资产：{{items.balance}}元</div>
        		<div class="trading-top" v-if="selected == 3">我的积分：{{items.integral}}分</div>
        		<div class="trading" v-if="selected == 0">
        			<ul>
        				<li>编号</li>
        				<li>流水</li>
        				<li>项目收支</li>
        				<li>时间</li>	
        			</ul>
        		</div>
        		<div class="trading" v-if="selected == 1">
        			<ul>
        				<li>编号</li>
        				<li>流水</li>
        				<li>项目收支</li>
        				<li>时间</li>
        			</ul>
        		</div>
        		<div class="datel" v-if="selected == 2">
        			<ul>
        				<li>编号</li>
        				<li>提现类型</li>
        				<li>提现金额</li>
        				<li>到账金额</li>
        				<li>时间</li>
        				<li>状态</li>
        			</ul>
        		</div>
        		<div class="trading" v-if="selected == 3">
        			<ul>
        				<li>编号</li>
        				<li>获取来源</li>
        				<li>积分收支</li>
        				<li>时间</li>
        			</ul>
        		</div>
        		<div class="items">
        			<div v-if="isnot && ifload">
                        <center><mt-spinner :type="3"></mt-spinner></center>
                    </div>
        			<ul        				
        				v-if="isnot"
                        v-infinite-scroll="loadMore"
                        infinite-scroll-disabled="loading"
                        infinite-scroll-distance="10">
        				<li v-for="item in list">
        					<div v-if="selected == 0">
        						<div class="teshu">{{item.id}}</div>
        					    <div class="teshu">
        						    <li v-if="item.action == 1">发布项目</li>
        						    <li v-if="item.action == 2">任务佣金</li>
        						    <li v-if="item.action == 3">充值</li>
        						    <li v-if="item.action == 4">提现</li>
        						    <li v-if="item.action == 5">增值服务</li>
        						    <li v-if="item.action == 6">购买作品</li>
        						    <li v-if="item.action == 7">任务退款</li>
        						    <li v-if="item.action == 8">提现退款</li>
        						    <li v-if="item.action == 9">出售商品</li>
        						    <li v-if="item.action == 10">维权退款</li>
        						    <li v-if="item.action == 11">服务退款</li>
        						    <li v-if="item.action == 12">问答打赏</li>
        						    <li v-if="item.action == 13">问答被打赏</li>
        						    <li v-if="item.action == 14">推广赏金</li>
        						    <li v-if="item.action == 15">购买vip店铺</li>
        						    <li v-if="item.action == 16">平台打款</li>
        						    <li v-if="item.action == 17">平台退款</li>
        						    <li v-if="item.action == 18">等级收益</li>
        					    </div>
        					    <div class="teshu">{{item.cash}}</div>
        					    <div class="teshu">{{item.created_at}}</div>
        					</div>
        					
        					<div v-if="selected == 1">
        						<div class="teshu">{{item.id}}</div>
        					    <div class="teshu">
        						    <li v-if="item.action == 1">发布项目</li>
        						    <li v-if="item.action == 2">任务佣金</li>
        						    <li v-if="item.action == 3">充值</li>
        						    <li v-if="item.action == 4">提现</li>
        						    <li v-if="item.action == 5">增值服务</li>
        						    <li v-if="item.action == 6">购买作品</li>
        						    <li v-if="item.action == 7">任务退款</li>
        						    <li v-if="item.action == 8">提现退款</li>
        						    <li v-if="item.action == 9">出售商品</li>
        						    <li v-if="item.action == 10">维权退款</li>
        						    <li v-if="item.action == 11">服务退款</li>
        						    <li v-if="item.action == 12">问答打赏</li>
        						    <li v-if="item.action == 13">问答被打赏</li>
        						    <li v-if="item.action == 14">推广赏金</li>
        						    <li v-if="item.action == 15">购买vip店铺</li>
        						    <li v-if="item.action == 16">平台打款</li>
        						    <li v-if="item.action == 17">平台退款</li>
        						    <li v-if="item.action == 18">等级收益</li>
        					    </div>
        					    <div class="teshu">{{item.cash}}</div>
        					    <div class="teshu">{{item.created_at}}</div>
        					</div>
        					
        					<div v-if="selected == 2">
        						<div class="teshu">{{item.id}}</div>
        					    <div class="teshu">
        					    	<li v-if="item.cashout_type == 1">支付宝</li>
        					    	<li v-if="item.cashout_type == 2">银行卡</li>
        					    </div>
        					    <div class="teshu">{{item.cash}}</div>
        					    <div class="teshu">{{item.real_cash}}</div>
        					    <div class="teshu">{{item.created_at}}</div>
        					    <div class="teshu">
        					    	<li v-if="item.status == 0">待处理</li>
        					    	<li v-if="item.status == 1">已成功</li>
        					    	<li v-else>已失败</li>
        					    </div>
        					</div>
        					
        					<div v-if="selected == 3">
        						<div class="teshu">{{item.integrals_id}}</div>
        					    <div class="teshu">
        						    <li v-if="item.integrals_type == 1">新会员注册积分</li>
        						    <li v-if="item.integrals_type == 2">完善会员信息积分</li>
        						    <li v-if="item.integrals_type == 3">评价积分</li>
        					    </div>
        					    <div class="teshu">{{item.integrals_code}}</div>
        					    <div class="teshu">{{item.created_at}}</div>
        					</div>
        					
        				</li>
        				
        			</ul>
        			<div v-else class="ve-no-message"><center>暂无消息哦 ！</center></div>
        		</div>
        	</mt-tab-container-item>
            
        </mt-tab-container>
		
		
		<!--底部导航-->
        <index-tab page="3"></index-tab>
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import { Header } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import { Navbar, TabItem } from 'mint-ui';
    import { Button } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
	import axios from 'axios'

	export default {
	    name: 'cashout',
	    data () {
            return {
                total: 0,
                page: 1,
                lastpage: 0,
                ifload: true,
                loading: false,
                isnot: true,
                list: [],
                value: '',
                selected: '0',
                items:[]
            }
        },
	    components:{
	  	    indexTab,
        },
        watch: {
            selected(){
                this.ifload = true
                this.isnot = true
                this.page = 1
                this.list = []
                this.loadMore()
            } 
        },
		methods: {
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    this.getList()
                }, 1000);
            },
            getList () {
                axios.get(this.baseCont.PHP_API + '/user/getfinancelist', {
                    params: {
                        page: this.page,
                        status: this.selected
                    }
                })
                .then(response => {
                    if (response.data.code === 200) {
                    	this.items = response.data.data;
                        let arr = response.data.data.list;
                        for (let i = 0; i < arr.length; i++) {
                            this.list.push(arr[i])
                        }
                        this.lastpage = response.data.data.lastpage;
                        this.loading = false;
                        if(this.lastpage <= this.page){
                            Toast({
                                message: '已经加载到底！',
                                duration: 2000
                            });
                            this.loading = true
                        }
                        this.ifload = false;
                        this.page++;
                    }else{
                        this.loading = true;
                        this.isnot = false;
                    }
                })
            },
        },
        mounted () {

        }
	}
</script>

<style scoped="scoped">
	.trading{
		height: 1rem;
		line-height: 1rem;
		background: #F2F2F2;
		margin-top: 0.4rem;
	}
	.trading-top{
		height: 1.5rem;
		line-height: 1.5rem;
		background: #F2F2F2;
		margin-top: 0.05rem;
		padding-left: 0.65rem;
	}
	.trading > ul > li:nth-child(1){
		width: 15%;
	}
	.trading > ul > li:nth-child(2){
		width: 20%;
	}
	.trading > ul > li:nth-child(3){
		width: 25%;
	}
	.trading > ul > li:nth-child(4){
		width: 40%;
	}
	.trading > ul > li{
		float: left;
		text-align: center;
	}
	.item{
		height: 1rem;
		line-height: 1rem;
	}
	.item > ul > li{
		float: left;
		text-align: center;
	}
	.item > ul > li:nth-child(1){
		width: 15%;
	}
	.item > ul > li:nth-child(2){
		width: 20%;
	}
	.item > ul > li:nth-child(3){
		width: 25%;
	}
	.item > ul > li:nth-child(4){
		width: 40%;
	}
	.top-up{
		height: 1rem;
		line-height: 1rem;
		background: #F2F2F2;
		margin-top: 0.4rem;
	}
	.top-up-top{
		height: 1.5rem;
		line-height: 1.5rem;
		background: #F2F2F2;
		margin-top: 0.05rem;
		padding-left: 0.65rem;
	}
	.top-up > ul > li:nth-child(1){
		width: 15%;
	}
	.top-up > ul > li:nth-child(2){
		width: 20%;
	}
	.top-up > ul > li:nth-child(3){
		width: 25%;
	}
	.top-up > ul > li:nth-child(4){
		width: 40%;
	}
	.top-up > ul > li{
		float: left;
		text-align: center;
	}	
	.datel{
		height: 1rem;
		line-height: 1rem;
		background: #F2F2F2;
		margin-top: 0.4rem;
	}
	.datel > ul > li:nth-child(1){
		width: 10%;
	}
	.datel > ul > li:nth-child(2){
		width: 17%;
	}
	.datel > ul > li:nth-child(3){
		width: 15%;
	}
	.datel > ul > li:nth-child(4){
		width: 15%;
	}
	.datel > ul > li:nth-child(5){
		width: 33%;
	}
	.datel > ul > li:nth-child(6){
		width: 10%;
	}
	.datel > ul > li{
		float: left;
		text-align: center;
	}
	.integral-top{
		height: 1.5rem;
		line-height: 1.5rem;
		background: #F2F2F2;
		margin-top: 0.05rem;
		padding-left: 0.65rem;
	}
	.integral{
		height: 1rem;
		line-height: 1rem;
		background: #F2F2F2;
		margin-top: 0.4rem;		
	}
	.integral > ul > li{
		float: left;
		text-align: center;
	}
	.integral > ul > li:nth-child(1){
		width: 15%;
	}
	.integral > ul > li:nth-child(2){
		width: 30%;
	}
	.integral > ul > li:nth-child(3){
		width: 15%;
	}
	.integral > ul > li:nth-child(4){
		width: 40%;
	}
	.list{
		height: 1rem;
		line-height: 1rem;				
	}
	.list:hover{
		background: #F2F2F2;
	}
	.list > ul > li{
		float: left;
		text-align: center;
	}
	.list > ul > li:nth-child(1){
		width: 15%;
	}
	.list > ul > li:nth-child(2){
		width: 30%;
	}
	.list > ul > li:nth-child(3){
		width: 15%;
	}
	.list > ul > li:nth-child(4){
		width: 40%;
	}
	.items > ul{		
		height: 14rem;
        overflow-y: auto;
	}
	.items > ul > li{
		height: 1.6rem;
		line-height: 1.6rem;
	}
	.teshu{
		float: left;
		text-align: center;
	}
	.teshu:nth-child(1){
		width: 15%;
	}
	.teshu:nth-child(2){
		width: 30%;
	}
	.teshu:nth-child(3){
		width: 15%;
	}
	.teshu:nth-child(4){
		width: 40%;
	}
</style>