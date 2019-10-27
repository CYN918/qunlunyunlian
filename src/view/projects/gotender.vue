<template>
    <div class="box">
        <mt-header title="参与投标">
            <router-link :to="{name:'projectsDetails',params:{id:this.items.detail.id}}"  slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-field label="报名优势:" placeholder="报名优势" type="textarea" rows="2" v-model="introduction"></mt-field>
        
        <mt-radio
            title="能否出现场"
            v-model="project_site"
            :options="projectlist">
        </mt-radio>
        
        <div id="box" v-if="this.project_site == 1">
        	<h3 class="ui-title">出现场时间</h3>
        	<div class="options clearfix">
        		<div class="create_input">
                    <input type="checkbox" name="type" value="1" id="test_one" class="ve-yesdc-box" v-model="tharr">
                    <label for="test_one">正常上下班时间</label>
                    <input type="checkbox" name="type" value="2" id="test_two" class="ve-yesdc-box" v-model="tharr">
                    <label for="test_two">周末</label>
                    <input type="checkbox" name="type" value="3" id="test_three" class="ve-yesdc-box" v-model="tharr">
                    <label for="test_three">晚上或者下班后</label>
                    <input type="checkbox" name="type" value="4" id="test_four" class="ve-yesdc-box" v-model="tharr">
                    <label for="test_four">随时</label>
                </div>
        	</div>

        </div>
        
        <mt-field label="雇主报价(元)" placeholder="雇主报价(元)" type="number" disabled="disabled" v-model="items.detail.bounty"></mt-field>
        
        <div v-if="items.detail.type_id == 2&&items.detail.ratio > 0">
        	<mt-field v-if="items.detail.p_status == 2" label="报价比例:" placeholder="报价比例(%)" type="number" disabled="disabled" v-model="items.detail.ratio" v-on:input="needGetnum">%</mt-field>
        	<mt-field v-else-if="items.detail.p_status == 3" label="报价比例:" placeholder="报价比例(%)" type="number" disabled="disabled" v-model="items.detail.ratio" v-on:input="needGetnum">‰</mt-field>
        	<mt-field v-if="items.detail.p_status == 2" label="我的比例:" placeholder="我的比例" type="number" v-model="price" v-on:input="needGetnum">%</mt-field>
        	<mt-field v-else-if="items.detail.p_status == 3" label="我的比例:" placeholder="我的比例" type="number" v-model="price" v-on:input="needGetnum">‰</mt-field>
            <mt-field label="预计可得:" placeholder="预计金额" type="text" disabled="disabled" v-model="item">元</mt-field>
        </div>
        <div v-else>
        	<mt-field label="我的报价:" placeholder="我的报价" type="number" v-model="price" v-on:input="needGetnum">元</mt-field>
            <mt-field label="应得金额:" placeholder="预计金额" type="text" disabled="disabled" v-model="item">元</mt-field>
        </div>
        
        <div>
            <ul class='title-danger'>
                <li class='title'>投标流程：</li>
                <li>1.工程师已阅读项目资料并了解全部需求；</li>
                <li>2.工程师确定有时间有能力按当前报价承接项目，报名参与；</li>
                <li>3.平台筛选后指派一名工程师承接；</li>     
                <li>4.等待雇主托管费用后，工程师开始工作，按时按要求完成项目；</li>
                <li style="color: red;">5.工程师获取最终报价的80%左右，项目介绍人获取最终报价的5%，项目负责人获取最终报价的5%左右，平台收取10%管理费用；</li>        
                <li class='title' style="padding-top: 0.5rem;">处罚机制</li> 
                <li>报名后无能力承接或放弃项目者，立即取消投标和报名资格1个月以上</li> 
            </ul>
        </div>
        <div style="width:310px;margin: 20px auto;">
            <span @click="goQxiao()" style="cursor:pointer;color:#31b8fa;background-color:#fff;border-radius:4px;border:1px solid #31b8fa;text-align:center;width:140px;height:30px;line-height:30px;display:inline-block;margin-right:20px;">取消</span>
            <span @click="goTjiao()" style="cursor:pointer;color:#fff;background-color:#31b8fa;border-radius:4px;border:1px solid #31b8fa;text-align:center;width:140px;height:30px;line-height:30px;display:inline-block;">确定</span>
        </div>
    </div>
</template>

<script>
	import { Picker } from 'mint-ui';
	import { Header } from 'mint-ui';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import localStore from '@/localstorage.js';
	import axios from 'axios'
	export default {
		name: 'gotender',
		data() {
			return {
				introduction:'',
				projectlist:[
                    {
                    	label: '能',
                    	value: '1',
                    },
                    {
                    	label: '否',
                    	value: '2'
                    }
                ],
                project_site:'',
                price:'',
                slots: [
                    {
                        flex: 1,
                        values: ['正常上班时间', '周末', '晚上或下班后', '随时'],
                        className: 'slot1',
                        textAlign: 'center'
                    }
                ],
                items:localStore.fetch(),
                tharr:[],
                item:'',
                ratio:''
                
			}
		},
		created() {
			
		},
		mounted() {
           
		},
		components: {
			
		},
		methods: {
			goQxiao(){
				Toast({message: '已取消!',duration: 2000});
				this.$router.push({path: '/projectsDetails/' + this.items.detail.id});
			},
			goTjiao(){
				if(this.introduction.length == 0){
					Toast({message: '请填写报名优势!',duration: 2000});
					return false
				}
				if(this.project_site.length == 0){
					Toast({message: '请选择能否出现场!',duration: 2000});
					return false
				}
				if(this.project_site == 1){
					if(this.tharr.length == 0){
						Toast({message: '请选择出现场时间!',duration: 2000});
					    return false
					}
					
				}
				if(this.price.length == 0){
					Toast({message: '请填写我的报价!',duration: 2000});
					return false
				}
				axios.post(this.baseCont.PHP_API + '/bid',{
				    id:this.items.detail.id,
				    desc:this.introduction,
				    scene:this.project_site,
				    fieldtime:this.tharr,
				    baojia:this.price

			    }).then(response => {
			   	    if(response.data.code == 200){		   	    	   		         
                        Toast({message: '投标成功!',duration: 2000});                   
    		            this.$router.push({path: '/projectsDetails/' + this.items.detail.id});					    
					    window.parent.scrollTo(0, 0);
			   	    }else{
			   	    	Toast({message: response.data.message,duration: 2000});
			   	    }
    		            
    		            
                }).catch((err) => {
                        console.log(err.msg);
                });
				
			},		
            needGetnum(){
            	axios.post(this.baseCont.PHP_API + '/shouldnum',{
				    id:this.items.detail.id,
				    neednum:this.price				  
			    }).then(response => {
			   	    if(response.data.code == 200){			   	    	
			   	    	this.item = response.data.data.num;			   	    	    		                                                     		            
			   	    }else{
			   	    	Toast({message: response.data.message,duration: 2000});
			   	    }    		                		            
                }).catch((err) => {
                        console.log(err.msg);
                });
           }            
		}
	}
</script>

<style scoped>
.box{
	width: 100%;
	height: 100%;
	overflow-x: hidden;
}
.box .box_title{
	height: 1rem;
	line-height: 1rem;
	font-size: 0.3rem;
	background: #4476A7;
	color: #FFFFFF;
	text-align: center;
}
.jy{
	width: 100%;	
	padding: 0.4rem;
	float: left;
}
.left{
	width: 3rem;
	float: left;
	font-size: 0.4rem;
}
.right{
	float: left;
	font-size: 0.4rem;
}
#noperid_div{
	min-height: 2rem;
	display: none;
}
.title-danger > li{
	padding-left: 0.2rem;
	padding-right: 0.2rem;
}
#box{
	padding: 0.2rem 0rem 0.2rem 0.3rem;
}
#box .ui-title{
	font-size: 0.4rem;
	font-weight: normal;
}
#box .options{
	padding-top: 0.2rem;
}
.ve-yesdc-box{
    position: relative;
    top: 0.04rem;
	margin-left: 0.3rem;
}
</style>