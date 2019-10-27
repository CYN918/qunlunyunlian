<!--
**首页tab公用组件
**author:cyn
**导入     import 组件 from '@/components/'
**注册	components:{组件}
-->
<template>
	<div class="index_tab">
		<div class="ub mainTabBar">
			<div class="ub_f1 msgTipCont" v-if="tabBar.isShow" v-for="(tabBar, index) in tabBars" @click="clickTabBar(index)">
				<img v-if='isShowMain != index' :class="{ mainTabBar_li_img: true }" :src="tabBar.unCheckedImg"/>
				<img v-if='isShowMain == index' :class="{ mainTabBar_li_img: true }" :src="tabBar.chooseIme"/>
				<p :class="{ actTextTab: isShowMain == index, noActTextTab: isShowMain != index }">{{tabBar.text}}</p>
				<!--<p v-if="tabBar.msgTip == true && winning == true" class="msgTip"></p>-->
			</div>
		</div>
		
		<div v-if="isShowTip">
			<err-tip :errMsg="errTipMsg"></err-tip>
		</div>
	</div>
</template>

<script>
	import errTip from '@/components/errTipComponent'	
	import imgYes from '../assets/homepage-selected.png';
	import imgNo from '../assets/home.png';
	import imgsOneYes from '../assets/task-selected.png';
	import imgsOneNo from '../assets/task.png';
	import imgsThreeYes from '../assets/progress_selected.png';
	import imgsThreeNo from '../assets/Progress.png';
	import imgsFourYes from '../assets/mine_selected.png';
	import imgsFourNo from '../assets/mine.png';
	
	export default {
		name: 'index_tab',
		props:['page'],
		data() {
			return {
				isShowTip:false,
				/*winning:true,*/
				isShowMain:0,
				errTipMsg:'',
				tabBars:[
					{'text':'首页','chooseIme':imgYes,'unCheckedImg':imgNo,'isShow':true,'msgTip':false},
					{'text':'项目','chooseIme':imgsOneYes,'unCheckedImg':imgsOneNo,'isShow':true,'msgTip':false},
					{'text':'找人','chooseIme':imgsThreeYes,'unCheckedImg':imgsThreeNo,'isShow':true,'msgTip':true},
					{'text':'我的','chooseIme':imgsFourYes,'unCheckedImg':imgsFourNo,'isShow':true,'msgTip':false}
				]
			};
		},
		created(){
			this.isShowMain = this.page;
		},
		mounted(){
			/*this.axios.post('/apis/consumer/user/getUserMsg',{}).then((response) => {
				if(response.data.status == 'success'){
					this.$emit('has_msg',response.data.data.has_msg);
					this.winning = response.data.data.winning;
				}else{
					
				};
			}).catch((err) => {
				console.log(err.msg);
			});*/
		},
		components:{
			errTip
		},
		methods: {
			clickTabBar(index){
				this.isShowMain = index;
				switch(index){
					case 0:
						this.$router.push('/');
						break;
					case 1:
						this.$router.push('/index_projects');
						break;
					case 2:
						this.$router.push('/index_members');
						break;
					case 3:
						this.$router.push('/index_self');
						break;
				};
			}
		}
	}
</script>

<style scoped>
	.msgTip{
		position: absolute;
		top: 0.05rem;
		right: 0.3rem;
		width: 0.35rem;
		height: 0.35rem;
		border-radius: 50%;
		background: red;
	}
	.msgTipCont{
		position: relative;
	}
	.actTextTab{
		color: #446AF8;
	}
	.noActTextTab{
		color: #333;
	}
	.mainTabBar > div > p{
		font-size: 0.32rem;
	}
	.mainTabBar_li_img{
		height: 0.58rem;
		padding-bottom: 0.1rem;
	}
	.mainTabBar_li_img_dif{
		width: 1rem;
	}
	.mainTabBar > div{
		padding: 0.2rem 0;
	}
	.mainTabBar{
		z-index: 50;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background: white;
		border-top: 0.02666rem solid #ddd;
		text-align: center;
	}
</style>