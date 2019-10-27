<template>
    <div class="page-group">
        <div class="page page-current">
            <div class="content">
                <div class="top-img">
                    <img src="../../../static/images/enterprise.png" alt="" width="100%"/>
                </div>
                <div class="card">
	                <div class="card-content">
		                <div class="c-logo">
			                <img v-if="items.user"  class="avatar" title="" :src='items.user.avatar' alt="" />
		                </div>
		                <div class="c-name" v-if="items.user">
			                                {{items.user.name}}		                                
		                </div>
		                <div class="c-region" v-if="items.user">
			                <img src="../../../static/images/addrent.png" alt="" />&nbsp; {{items.user.eprovince}} {{items.user.ecity}}
			                <router-link :to="'/comment/' + items.user.uid" class="qq-contact external">查看评价</router-link>
		                </div>
		                <!--<div class="c-type">
			                <div class="c-type-item">
				                                 工程咨询
			                </div>
			                <div class="c-type-item">
				                                 造价咨询
			                </div>
			                <div class="c-type-item">
				                 BIM咨询
			                </div>
			                <div class="c-type-item">
				                                 培训机构
			                </div>
		                </div>-->
		                <div class="c-contact">
			                <div v-if="items.user">
				                <img src="../../../static/images/mingpian.png" alt="" /> {{items.user.name}}
			                </div>
			                <div>
				                <img style=" width: 0.3rem;" src="../../../static/images/renwu.png" alt="" /> 总经理
			                </div>
			                <div v-if="items.user">
				                <img src="../../../static/images/telphone.png" alt="" /> {{items.user.phone}}
			                </div>
		                </div>
	                </div>
                </div>
                <div v-if="items.user">
	                <div class="buttons-tab" v-model="tabView" v-if=" items.user.supervise_type == 2">
		                <li v-for="(tab ,index) in tabs" :class="{cur:iscur==index}" @click="iscur=index,tabChange('select' + (index + 1))">{{tab.name}}</li>
	                </div>
	                <div class="buttons-tab" v-model="tabView" v-else-if="items.user.supervise_type == 3">
		                <li v-for="(tab ,index) in lists" :class="{cur:iscur==index}" @click="iscur=index,tabChange('select' + (index + 1))">{{tab.name}}</li>
	                </div>
                </div>
                <div class="tabs">
                	<keep-alive> 
                        <component v-bind:is="tabView" v-if="items.user" v-bind:lists="items"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
        <!--底部导航-->
        <index-tab page="2"></index-tab>
    
        <!--错误提示-->
        <div v-if="isShowTip">
		    <err-tip :errMsg="errTipMsg"></err-tip>
	    </div>
    </div>
</template>

<script>
	import select1 from '@/view/enterprise/select01';
    import select2 from '@/view/enterprise/select02';
    import select3 from '@/view/enterprise/select03';
    import select4 from '@/view/enterprise/select04';
    import indexTab from '@/components/indexTabComponent';
	import errTip from '@/components/errTipComponent';
	import axios from 'axios'
	export default {
		name: 'projectsDetails',
		data() {
			return {
				tabView: 'select1',
                tabs: [{name: "介绍"}, {name: "项目"}, {name: "成员"}],
                lists: [{name: "介绍"}, {name: "项目"},{name: "执照"}, {name: "成员"}],
                iscur: 0,
                inPage:true,
	            isShowTip:false,
		        errTipMsg:'',
		        items:[]
			}
		},
		created () {
			this.getData();
		},
		components: {
			select1,
            select2,
            select3,
            select4,
            indexTab,
		    errTip
		},
		methods: {
			getData(){
				axios.get(this.baseCont.PHP_API + '/engineerinfo/' + this.$route.params.id,{}).then(response => {
	                this.items = response.data.data;        	
                }).catch((err) => {
	                console.log(err.msg);
                });
			},
			tabChange:function(tab){
                this.tabView = tab;
            }
		},
		mounted() {
			
		}
	}
</script>

<style scoped>
.card {
    margin: -1rem 0.8rem 0 0.8rem;
    border-radius: 0.2rem;
    box-shadow: none;
    border: 1px solid #e7e7e7;    
    background: #fff;
    position: relative;
    font-size: 0.4rem;
}
.card-content {
    position: relative;
}
.c-logo {
    width: 100%;
    text-align: center;
}
.c-logo img {
    width: 2rem;
    border-radius: 0.15rem;
}
.c-name {
    width: 100%;
    text-align: center;
    font-size: 0.4rem;
}
.card-content > div {
    padding-top: 0.2rem;
}
.c-region {
    font-size: 0.4rem;
    text-align: center;
    color: #999999;
}
.c-region img {
    width: 0.4rem;
    vertical-align: sub;
}
.c-type {
    text-align: center;
    padding-bottom: 0.5rem;
    border-bottom: 0.05rem solid #e7e7e7;
}
.c-type .c-type-item {
    display: inline-block;
    background: #fcf1ec;
    padding: 0.1rem 0.2rem;
    margin: 0.1rem;
    border-radius: 0.5rem;
    font-size: 0.3rem;
    color: #f06746;
}
.c-contact {
    width: 100%;
    text-align: center;
}
.c-contact > div {
    display: inline-block;
    padding: 0.1rem 0rem;
}
.c-contact img {
    width: 0.5rem;
    vertical-align: text-bottom;
}
.buttons-tab {
    -webkit-align-self: center;
    align-self: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-lines: single;
    -moz-box-lines: single;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    background: none;
    margin: 0 1rem;
    position: relative;
}
.buttons-tab li{
	color: #5f646e;
    font-size: 0.5rem;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    border: 0;
    border-bottom: 2px solid transparent;
    border-radius: 0;
    text-align: center;
}
.buttons-tab .cur {
    color: #f06746;
    border-color: #f06746;
    z-index: 100;
}
.qq-contact{
	color: #0894ec;
	margin-left: 0.5rem;
}
</style>