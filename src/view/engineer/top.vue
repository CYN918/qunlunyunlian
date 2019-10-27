<template>
<div>
	<div class="card" style="margin:0;padding-top: 0.5rem;">
		<div class="card-content">
			<div class="list-block media-list">
				<ul>
					<li class='item-content-vip'>
						<div class='item-media-show'>
							<div class="item-image-show">
								<img v-if="items.user" class="avatar" title="" :src='items.user.avatar' alt="" />
							</div>
						</div>
						<div class="center-item item-inner" style="font-size: 0.4rem;">
							<div class="item-title-row" style="margin-bottom: 0.4rem;">
								<div class="item-subtitle" style="color: #333333; font-size: 0.4rem;" v-if="items.user">
							        {{items.user.name}}
									<span style="font-size: 0.4rem;margin-left:0.2rem;">
                                        <img style="width: 0.5rem; vertical-align: text-top;" src="../../../static/images/addrent.png" alt="" />{{items.user.eprovince}}
                                    </span>
								</div>
							</div>
							<div class="item-subtitle" style="color: #f66626;">
								<div class="item-case" style="background: #e06d4a; color: #ffffff;" v-if="items.user">{{items.user.grade}}</div>
								<div class="item-case" v-if="items.user">{{items.user.state}}</div>
							</div>
						</div>
						<button class="button button-fill button-danger external" style="margin: 1.2rem -0.2rem 0 0;" @click="getEhire(items.user.id)">雇佣TA</button>
					</li>
				</ul>
			</div>
		</div>
		<div class="card-footer">
			<a href="tel:4009938200" class="link">客服电话：400 106 7895</a>
			<router-link v-if="items.user" :to="'/comment/' + items.user.uid" class="qq-contact external">查看评价</router-link>
		</div>
	</div>

	<div class="buttons-tab" style="background: #f5f5f5;" v-model="tabView">
		<li v-for="(tab ,index) in tabs" :class="{cur:iscur==index}" @click="iscur=index,tabChange('select' + (index + 1))">{{tab.name}}</li>
	</div>
	
	
	<keep-alive> 
        <component v-bind:is="tabView" v-bind:datas="items" v-if="items.user"></component>
    </keep-alive> 
</div>
</template>

<script>
	import select1 from '@/view/engineer/select01';
    import select2 from '@/view/engineer/select02';
    import select3 from '@/view/engineer/select03';
    import select4 from '@/view/engineer/select04';
    import { MessageBox } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
	export default {
  	name: 'top',
  	data(){
  		return {
  			tabView: 'select1',
            tabs: [{name: "基本数据"}, {name: "参与的项目"}, {name: "工作经历"}, {name: "他的团队"}],
            iscur: 0,
            items:[]
  		}
  	},
  	mounted(){
  		this.getData();
  	},
  	created() {
       
    },
  	components:{
  		select1,
        select2,
        select3,
        select4
  	},
  	methods:{
  		getData(){
  			axios.get(this.baseCont.PHP_API + '/engineerinfo/' + this.$route.params.id,{}).then(response => {
                this.items = response.data.data;                      	
            }).catch((err) => {
                console.log(err.msg);
            });
  		},
  		tabChange:function(tab){
            this.tabView = tab;
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
						if(response.data.code == 50001){
							Toast({
								message: '雇佣成功',
								duration: 1000
							});
                    		this.$router.push({path: '/self'});
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

<style scoped="scoped">
a {
    color: #0894ec;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.card {
    border-bottom: 1px solid #e1e1e1;
    border-top: 1px solid #e1e1e1;
    box-shadow: none;
    background: #fff;
    position: relative;
    border-radius: 0.1rem;
    font-size: 0.4rem;
}
.card-content {
    position: relative;
}
.list-block {
    margin: 0;
    font-size: 0.4rem;
}
.list-block ul {
    background: none;
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
}
.list-block li {
    box-sizing: border-box;
    position: relative;
}
.item-content-vip {
    display: flex;
    padding-left: 0.4rem;
    min-height: 2.2rem;
}
.item-content-vip .item-media-show {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0rem !important;
    padding-bottom: 0rem !important;
    border: 0rem solid;    
}
.item-content-vip .item-media-show .item-image-show {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px !important;
    border: 0.16rem solid;
    border-image: url(../../../static/images/banground.png) 6 fill stretch;
    -moz-border-image: url(../../../static/images/banground.png) 6 fill stretch;
    -webkit-border-image: url(../../../static/images/banground.png) 6 fill stretch;
    -o-border-image: url(../../../static/images/banground.png) 6 fill stretch;
}
.item-content-vip .item-media-show .item-image-show .avatar {
    width: 2rem !important;
    height: 2rem !important;
    border-radius: 50%;
}
.item-content-vip .item-media-show .member-level {
    background: linear-gradient(#ffeaaa, #a07539);
    border: 1px solid #ffffff;
    border-radius: 0.1rem;
    color: #603f07;
    font-size: 0.5rem;
    height: 0.72rem;
    left: 1.8rem;
    position: absolute;
    text-align: center;
    top: 1.9rem;
    width: 1.2rem;
    line-height: 0.7rem;
}
.list-block .item-inner {
    padding-right: 0.75rem;
    position: relative;
    width: 100%;
    padding-top: 0.4rem;
    padding-bottom: 0.35rem;
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
    padding-top: 0.5rem;
    padding-bottom: 0.45rem;
    -webkit-align-self: stretch;
    align-self: stretch;
}
.center-item {
    margin-left: 0.5rem !important;
    padding-right: 0 !important;
}
.list-block.media-list .item-title-row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}

.item-case {
    border-style: solid;
    border-color: #e06d4a;
    border-width: 1px;
    padding: 0 0.2rem;
    font-size: 0.4rem;
    color: #e06d4a;
    border-radius: 0.1rem;
    margin: 0.1rem 0.4rem 0.1rem 0;
    font-weight: normal;
    display: inline-block;
    white-space: nowrap;
}
.right-item {
    padding-top: 1.5rem;
    width: 7rem;
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
    margin: 0;
    width: 4rem;
    height: 1rem;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
    font-family: inherit;
    cursor: pointer;   
    font-size: 0.4rem;
    outline: none;
}
.right-item a {
    background-color: #f60 !important;
    border-radius: 0.2rem 0 0 0.2rem;
    font-size: 0.7rem;
    height: 1.6rem;
    padding-top: 0.125rem;
}
.button.button-fill {
    color: #fff;
    background: #0894ec;
    border: none;
}
.button-danger.button-fill {
    color: white;
    background-color: #f6383a;
}
.button-danger {
    border-color: #f6383a;
    color: #f6383a;
}
.card-header, .card-footer {
    min-height: 1.2rem;
    position: relative;
    padding: 0 0.3rem 0 0.3rem;
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
.card-header a.link, .card-footer a.link {
  
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
    position: relative;
}
.buttons-tab > li{	
    text-decoration: none;
    text-align: center;
    display: block;
    line-height: 1rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: none;
    margin: 0;
    width: 4rem;
    height: 1rem;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
    font-family: inherit;
    cursor: pointer;   
    font-size: 0.4rem;
    outline: none;
}
.cur {
    color: #0894ec;
	border-bottom: 2px solid transparent;
    border-color: #0894ec;
    z-index: 100;
}
.buttons-tab .button {
    color: #5f646e;
    font-size: 0.4rem;
    width: 100%;   
    -webkit-box-flex: 1;
    -ms-flex: 1;
    border: 0;
    border-bottom: 2px solid transparent;
    border-radius: 0;
}
.button.active, .button.active:active {
    color: #0a8ddf;
    border-color: #0a8ddf;
}
</style>