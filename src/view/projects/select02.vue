<template>
    <div style="min-height: 6rem;">
    	<!--<div class="btn">
    	    <mt-button type="primary" @click="btn">参与投标</mt-button>
        </div>-->
    	<div class="project_class">
    		<div class="masterlist-top">
    			<h2>投标方案({{lists.count_works}})</h2>
    		</div>
    		<div class="masterlist-center">
    			<ul class="list">
    				<li v-for="val in lists.works">
    					<div class="userphoto">
    						<div class="photo">
    							<a @click="tender(val.id)" align="center" class="top">
    								<img :src="val.avatar" alt=""/>
    							</a>
    						</div>
    					</div>
    					<div class="plan">
    						<div class="name">
    							<a @click="tender(val.id)">{{val.nickname}}</a>
    						</div>
    						<div class="info">
    							<p>{{val.working_life}}年经验</p>
    							<p>完成项目:{{val.e_num}}个</p><br />
    							<p>常驻:{{val.province}}-{{val.city}}</p>
    							<p>联系方式:{{val.mobile}}</p>
    						</div>
    						<div class="tag">
    							<li v-for="value in val.cate_lists">{{value}}</li>
    					    </div>
    					    <br />
    					    <div class="jy" v-if="val.ratio > 0">
    						    <span class="left">按照当地政府收费比率:</span>
    						    <span class="right">{{val.ratio}}%</span>
    					    </div>
    					    <div class="jy" v-else>
    						    <span class="left">他的报价:</span>
    						    <span class="right">{{val.price}}元</span>
    					    </div>
    					    
    					    <div class="jy">
    						    <span class="left">能否出现场:</span>
    						    <span class="right">{{val.scene}}</span>
    					    </div>
    					    <div class="jy" v-if="val.scene == '是'">
    						    <span class="left">出现场时间:</span>
    						    <span class="right">{{val.fieldtimesrt}}</span>
    					    </div>
    					    <div class="jy">
    						    <span class="left">他的优势:</span>
    						    <span class="right">{{val.desc}}</span>
    					    </div>
    					    <div class="middleId" v-if="val.uid == lists.detail.eid">中标</div>
    					    <div v-if="lists.ifxz" class="ve-bottomta" @click="getEhire(val.id)">雇佣</div>
    					</div>
    					
    				</li>
    				
    			</ul>
    		</div>
    	</div>
    </div>
</template>

<script>
	import { Button } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
    import { Toast } from 'mint-ui';
	import axios from 'axios'

	export default {
		name: 'select02',
		data() {
			return {
				
			}
		},
		props: {
			lists: {
				type: Object
			}
		},
		created() {
			
		},
		mounted() {
			
		},
		components: {
			
		},
		methods: {
			btn(){
			    this.$router.push({path: '/gotender'});
			},
			getEhire (e) {
				MessageBox.confirm('', {
					 message: '是否雇佣他？', 
					 title: '雇佣', 
					 confirmButtonText: '确定', 
					 cancelButtonText: '再想想' 
				}).then(action => { 
					if (action == 'confirm') {     //确认的回调
						let _this = this
						axios.post(this.baseCont.PHP_API + '/user/ehire', {
							id: this.$route.params.id,
							wid: e,
						})
						.then(response => {
							if(response.data.code == 200){
								Toast({
									message: '雇佣成功',
									duration: 1000
								});
								window.location.reload();
                        		this.$router.push({path: '/projectsDetails/'+ _this.$route.params.id});
							}else{
								Toast({
									message: response.data.message,
									duration: 2000
								});
							}
						})
						.catch(function (error) {
							console.log(error)
						})
				 	}
				}).catch(err => { 
				 	if (err == 'cancel') {     //取消的回调
				 	console.log(2);
				 	} 
				});
			}
		}
	}
</script>

<style scoped>
a{
	text-decoration: none;
}
.button {
    border: 1px solid #0894ec;
    color: #0894ec;
    text-decoration: none;
    text-align: center;
    display: block;
    border-radius: 0.25rem;
    line-height: 1rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: none;
    
    margin: 1rem auto;
    width: 4rem;
    height: 1rem;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
    font-size: 0.4rem;
    font-family: inherit;
    cursor: pointer;
}
.project_class .masterlist-top .masterlist-center .list{
	width: 100%;	
}
.masterlist-center{
	min-height: 5rem;
}
.left{
	color: #333;
}
.masterlist-center .list > li{
	min-height: 6rem;
	border-bottom: 1px solid #ddd;
	
}
.project_class .masterlist-top{
	border-bottom: 0.01rem solid #ddd;
}
.project_class .masterlist-top > h2{
	font-size: 0.6rem;
	padding-left: 0.5rem;
	padding-bottom: 0.3rem;
}
.plan .name{
	font-size: 0.6rem;
}
.userphoto{
	float: left;
	height: 100%;
	padding: 0.5rem;
}
.info > p,.tag > span,.jy > span{
	font-size: 0.3rem;
}
.info,.tag,.jy{
	padding-top: 0.2rem;
}
.tag{
	
}
.tag > li{
	float: left;
	border-radius: 5px;
    border: 1px solid #30b9fa;
    font-size: 12px;
    color: #fff;
    background: #30b9fa;
}
.info > p{
	padding-right: 0.2rem;
	line-height: 0.5rem;
}
.plan{
	float: right;
	height: 100%;
	width: 65%;
	
}
.plan .info > p{
	display: inline-block;
}
.userphoto .photo{
	display: table-cell;
    vertical-align: middle;
    width: 2rem;
    height: 2rem;
    text-align: center;
}
.userphoto .photo > a > img{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
}
.btn{
	text-align: center;
	min-height: 2rem;
	line-height: 2rem;
}
.ve-bottomta{
	color: #fff;
    display: inline-block;
    width: 2.2rem;
    background: #30b9fa;
    padding: 0.1rem 0rem;
    text-align: center;
    border-radius: 0.1rem;
	float: right;
	position: relative;
	bottom: 1rem;
}
.middleId {
    bottom: 43px;
    width: 80px;
    text-align: center;
    position: absolute;
    right: 20px;
    border: 1px solid red;
    font-size: 30px;
    color: red;
   }
   .top{	
	vertical-align: middle;
	height: 130px;
}
.top > img{
	max-width: 2rem;
    max-height: 2rem;
    border-radius: 50%;
	vertical-align: middle;
}
</style>