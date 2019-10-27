<template>
    <div class="index_projects" v-if="inPage">
    	<div class="card" style="">
	        <div class="card-content">
		        <table class="user-info-tab">
			        <tr>
				        <td rowspan="3" width="3rem" style="padding-left: 0.4rem;padding-top: 0.4rem;">
					        <img class="avatar" style="width: 2rem; height: 2rem" :src="userinfo.avatar" alt="" />
				        </td>
				        <td colspan="2" rowspan="1">
					        <div class="name-show">{{ userinfo.name }}({{ userinfo.id }})</div>
				        </td>
			        </tr>
			        <tr>
				        <td style="color: #666666;padding-left: 0.4rem;padding-bottom: 0.4rem;" rowspan="1">积分：{{ userinfo.integral }}</td>
				        <td valign="right" style="text-align: right;padding: 0 0.4rem 0.4rem 0;">{{ userinfo.mobile }}</td>
			        </tr>
		        </table>
	        </div>
	        <div class="card-footer">
		        <div class="content-block" style="width: 100%">
			        <p class="buttons-row">
						<router-link to="/mytasklist" class="button button-big no-radius" style=" border: none;color: #333333;">
							<img src="../../static/images/fabu.png" style='width: 0.8rem;'><br>
					        <span>我发布的项目</span>
				        </router-link>
                        <router-link to="/myaccepttaskslist" class="button button-big no-radius" style=" border: none;color: #333333;">			        
					        <img src="../../static/images/canyu.png" style='width: 0.75rem;'><br>
					        <span>我参与的项目</span>					       
                        </router-link>
                        <router-link to="/cashout" class="button button-big no-radius" style=" border: none;color: #333333;">			        
					        <img src="../../static/images/baozhengjin.png" style='width: 0.8rem;'><br>
					        <span>账户及保证金</span>					       
                        </router-link>
				        
			        </p>
		        </div>
	        </div>
	        
	        <div class="card-top">
		        <ul>
		        	<li>
		        		<div>
							<span>总收入(元)</span><br>
							<span>{{ userinfo.task_num }}</span>
			            </div>
		        	</li>
					
			        <li>
			        	<div>			        
							<span>已提现(元)</span><br>
							<span>{{ userinfo.cash_num }}</span>
                        </div>
			        </li>
                    
                    <li>
                    	<div>			        
							<span>可提现(元)</span><br>
							<span>{{ userinfo.balance }}</span>
                        </div>
                    </li>			        
		        </ul>
	        </div>
	        
	        <div class="card-bottom">
		        <ul>
			        <li class="left">
			        	<router-link to="">
							<span>可提余额(元)</span><br>
					        <span>{{ userinfo.balance }}</span>
				        </router-link>
			        </li>
					<li class="right">
						<router-link to="/extract">提现入口</router-link>
					</li>					      			        
		        </ul>
	        </div>
        </div>
        
        <div class="card">
	        <div class="card-content">
		        <div class="list-block media-list">
			        <ul>
				        <li>
				        	<router-link to="/info" class="item-link item-content">
						        <div class="item-media">
							        <img src="../../static/images/daiban.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">基本信息</div>
						        </div>					        
					        </router-link>
				        </li>
				        <li>
					        <a @click="engineer" class="item-content item-link">
						        <div class="item-media">
							        <img src="../../static/images/shimingrenzheng.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">工程师入驻</div>
						        </div>
					        </a>
				        </li>
				        <li>
					        <a @click="getcustom" class="item-link item-content">
						        <div class="item-media">
							        <img src="../../static/images/kefu.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">咨询客服</div>
						        </div>
					        </a>
				        </li>   
				        <li>
					        <router-link to="/changepass" class="item-link item-content">
						        <div class="item-media">
							        <img src="../../static/images/dashang.png" style='width: 0.6rem;'>
						        </div>
						        <div class="item-inner">
							        <div class="item-title">修改密码</div>
						        </div>
					        </router-link>
				        </li>
				        <li>					        
					        <router-link to="/advice" class="item-link item-content">					        	
						        <div class="item-media">
							        <img src="../../static/images/dashang.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">投诉建议</div>
						        </div>
					        </router-link>
				        </li>
				        <li>
							<router-link to="/message" class="item-link item-content">
								<div class="item-media">
							        <img src="../../static/images/xinxi.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">消息提醒</div>
						        </div>
            				</router-link>
				        </li>
				        <li>
				        	<router-link to="/team" class="item-link item-content">					        
						        <div class="item-media">
							        <img src="../../static/images/keben.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">我的团队</div>
						        </div>				       
					        </router-link>
				        </li>
				        <li>
				        	<router-link to="/promote" class="item-link item-content">	
						        <div class="item-media">
							        <img src="../../static/images/keben.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">我的推广</div>
						        </div>					       
					        </router-link>
				        </li>
				        <li>
					        <router-link to="/help" class="item-link item-content">
						        <div class="item-media">
							        <img src="../../static/images/keben.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">帮助中心</div>
						        </div>
					        </router-link>
				        </li>
				        <li v-if="userinfo.supervise_type == 1">
					        <router-link to="/resume" class="item-link item-content">
						        <div class="item-media">
							        <img src="../../static/images/keben.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">工程师履历</div>
						        </div>
					        </router-link>
				        </li>
				        <li v-if="userinfo.supervise_type == 2">
					        <router-link to="/resume" class="item-link item-content">
						        <div class="item-media">
							        <img src="../../static/images/keben.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">工作室履历</div>
						        </div>
					        </router-link>
				        </li>
				        <li v-if="userinfo.supervise_type == 3">
					        <router-link to="/resume" class="item-link item-content">
						        <div class="item-media">
							        <img src="../../static/images/keben.png">
						        </div>
						        <div class="item-inner">
							        <div class="item-title">企业履历</div>
						        </div>
					        </router-link>
				        </li>
				        <li>
					        <router-link to="/coupons" class="item-link item-content">
						        <div class="item-media">
							        <img src="../../static/images/youhuiquan.png" style='width: 0.6rem;'>
						        </div>
						        <div class="item-inner">
							        <div class="item-title">查看我的优惠券</div>
						        </div>
					        </router-link>
				        </li>
				        <li>
					        <router-link to="/certificate" class="item-link item-content">
						        <div class="item-media">
							        <img src="../../static/images/youhuiquan.png" style='width: 0.6rem;'>
						        </div>
						        <div class="item-inner">
							        <div class="item-title">职业证书</div>
						        </div>
					        </router-link>
				        </li>
			        </ul>
		        </div>
	        </div>
        </div>
        
		<div class="ve-bottom-tj" v-if="!iswx" >
			<mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
				<span v-if="!subumting">退出</span>
				<span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
			</mt-button>
		</div>

        <!--底部导航-->
        <index-tab page="3"></index-tab>
    
        <!--错误提示-->
        <div v-if="isShowTip">
			<err-tip :errMsg="errTipMsg"></err-tip>
		</div>
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import errTip from '@/components/errTipComponent'
    import { Toast } from 'mint-ui';
    import { Spinner } from 'mint-ui';
	import { Field } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	import axios from 'axios'

	export default {
	    name: 'index_self',
	    data () {
	        return {
	    	    inPage: true,
				isShowTip: false,
				subumting: false,
				iswx: false,
				errTipMsg:'',
				userinfo: []
	        }
	    },
	    components:{
	  	    indexTab,
			errTip
		},
		created() {
			
		},
		methods:{
			engineer () {
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
			},
			getindex () {
				axios.get(this.baseCont.PHP_API + '/user', {
                    params: {
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
						this.userinfo = response.data.data.user_info
					}
				})
			},
			refergo () {
				this.subumting = true
       			window.sessionStorage.removeItem("token")
                this.$router.push({path: '/login'});
			},
			getcustom () {
				MessageBox.confirm('', {
					 message: '现在联系4001067895', 
					 title: '联系客服', 
					 confirmButtonText: '联系Ta', 
					 cancelButtonText: '再想想' 
				}).then(action => { 
					if (action == 'confirm') {     //确认的回调
						window.location.href = "tel:://4001067895"
				 	}
				}).catch(err => { 
				 	if (err == 'cancel') {     //取消的回调
	
				 	} 
				});
			},
			getSwitch () {
                let ua = navigator.userAgent.toLowerCase();
                let isWeixin = ua.indexOf('micromessenger') != -1;
				this.iswx = isWeixin
			}			
		},
	    mounted() {
			this.getindex()
            this.getSwitch()
	    }
	}
</script>

<style scoped>
.index_projects{
	width: 100%;
    padding-bottom: 2rem;
	background: #EFEFF4;
}
.ve-bottom-tj{
	margin-top: 1.2rem;
	margin-bottom: 1rem;
	padding:0rem 0.4rem;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
img {
    border: 0;
}
p {
    margin: 1em 0;
}
.test{
	height: 2rem;
	border-bottom: 0.1rem solid lightgrey;
	position: relative;
}
.card {
    border-radius: inherit;
    margin: 0 0 0.1rem 0;
    box-shadow: none;
    border-width: 0.02rem 0;
    border-style: solid;
    border-color: #e7e7e7;
    background: #fff;
    position: relative;
    font-size: 0.4rem;
    overflow-x: hidden;
}
.card-content {
    position: relative;
}
.user-info-tab {
	width: 100%;
    
}
.avatar {
    border-radius: 50%;
}

.user-info-tab .name-show {
    font-size: 0.4rem;
    padding-top: 0.4rem;
    padding-left: 0.4rem;
}

.user-info-tab form {
    margin: 0;
    margin-left: 2rem;
    padding-bottom: 0.4rem;
}
.card-footer {
    min-height: 2.2rem;
    position: relative;
   
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    border-radius: 0 0 0.1rem 0.1rem;
    color: #5f646e;
}
.card-footer:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: auto;
    right: auto;
    height: 1px;
    width: 100%;
    background-color: #e1e1e1;
    display: block;
    z-index: 15;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
}
.content-block {
    padding: 0 0.75rem;
    color: #6d6d72;
}
.buttons-row, .buttons-tab {
    -webkit-align-self: center;
    align-self: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-lines: single;
    -moz-box-lines: single;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
}
.button {
    border: 1px solid #0894ec;
    color: #0894ec;
    text-decoration: none;
    text-align: center;
    display: block;
    border-radius: 0.25rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: none;
    padding: 0 0.3rem;
    margin: 0;
    height: 1.35rem;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
    font-family: inherit;
    cursor: pointer;
}
.no-radius {
    border-radius: 0 !important;
    font-size: 0.4rem !important;
    
}
.list-block {
    margin: 0;
    font-size: 0.4rem;
}
.list-block ul li{
	width: 33.1%;
	height: 2.5rem;
    float: left;
    text-align: center;
}
.list-block ul li:nth-child(1),.list-block ul li:nth-child(2),.list-block ul li:nth-child(4),.list-block ul li:nth-child(5),.list-block ul li:nth-child(7),.list-block ul li:nth-child(8),.list-block ul li:nth-child(10),.list-block ul li:nth-child(11){
	border-right: 1px solid #ddd;
}
.list-block ul li:nth-child(1),.list-block ul li:nth-child(2),.list-block ul li:nth-child(3),.list-block ul li:nth-child(4),.list-block ul li:nth-child(5),.list-block ul li:nth-child(6),.list-block ul li:nth-child(7),.list-block ul li:nth-child(8),.list-block ul li:nth-child(9){
	border-bottom: 1px solid #ddd;
}
.list-block .item-content {
	height: 2.5rem;
    display: block;
    position: relative;
}
.item-media {
    display: table-cell; 
    vertical-align: middle; 
    width: 0.6rem; 
    height: 0.6rem; 
    text-align: center;
    position: absolute;
    left: 44%;
    top: 20%;
}
.item-media > img{
	max-width: 0.6rem;
	max-height: 0.6rem;
}
.item-title {
    color: #666666;
}


.item-inner {
    position: relative;
    top: 50%;
    
    
}
.card-top{
	background: #1296db;	
	height: 2rem;	
}
.card-bottom{
	height: 2rem;
}
.card-top > ul > li{
	width: 33%;
	text-align: center;
	height: 1.7rem;
	float: left;
	margin-top: 0.15rem;
}
.card-bottom > ul > li{
	height: 1.7rem;
	display: inline-block;
	margin-top: 0.15rem;
}
.card-bottom .left{
	float: left;
	padding-left: 0.6rem;
}
.card-bottom .right{
	float: right;
	padding-right: 0.6rem;
}
.card-top > ul > li:nth-last-child(2){
	border-right: 1px solid #ffffff;
}
.card-top > ul > li:nth-last-child(3){
	border-right: 1px solid #ffffff;
}
.card-top > ul > li > div{
	color: #ffffff;
	display: inline-block;
    line-height: 0.8rem;
}
.card-bottom > ul > li > a{
	display: inline-block;
}
.left > a > span:nth-child(1){
	color: #333333;
}
.left > a > span:nth-last-child(1){
	color: #F00B0D;
}
.left > a{
	line-height: 0.8rem;
}
.right > a{
	width: 2.5rem;
	height: 1rem;
	line-height: 1rem;
	text-align: center;
	background: #1296db;
	color: #ffffff;
	margin-top: 0.3rem;
}
</style>