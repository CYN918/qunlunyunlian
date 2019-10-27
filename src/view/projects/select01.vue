<template>

<div id="tab1" class="tab active">
	<div class="p-item">
		<table v-if="lists.detail.cate_id == 241">
			<tr>
				<th>项目用途：</th>
				<td>{{lists.catesrt[0]}}</td>
			</tr>
			<tr>
				<th>项目专业：</th>
				<td>{{lists.catesrt[1]}}</td>
			</tr>
			<tr>
				<th>项目明细：</th>
				<td>{{lists.catesrt[2]}}</td>
			</tr>
			<tr>
				<th>项目所在地：</th>
				<td>{{lists.detail.province}}-{{lists.detail.city}}</td>
			</tr>
			<tr>
				<th>交付日期：</th>
				<td>{{lists.detail.success_time}}</td>
			</tr>
		</table>
		
		
		<table v-if="lists.detail.cate_id == 242">
			<tr>
				<th>项目用途：</th>
				<td>{{lists.catesrt[0]}}</td>
			</tr>
			<tr>
				<th>项目所在地：</th>
				<td>{{lists.detail.province}}-{{lists.detail.city}}</td>
			</tr>
			<tr>
				<th>交付日期：</th>
				<td>{{lists.detail.success_time}}</td>
			</tr>
			
			
		</table>
		
		
		
		<table v-if="lists.detail.cate_id == 243">
			<tr>
				<th>服务类型：</th>
				<td>{{lists.catesrt[0]}}</td>
			</tr>
			<tr>
				<th>标书专业：</th>
				<td>{{lists.catesrt[1]}}</td>
			</tr>
			<tr>
				<th>交付日期：</th>
				<td>{{lists.detail.success_time}}</td>
			</tr>
			
			
		</table>
		
		
		
		<table v-if="lists.detail.cate_id == 244">
			<tr>
				<th>设计分类：</th>
				<td>{{lists.catesrt[1]}}</td>
			</tr>
			<tr>
				<th>项目所在地：</th>
				<td>{{lists.detail.province}}-{{lists.detail.city}}</td>
			</tr>						
			<tr>
				<th>交付日期：</th>
				<td>{{lists.detail.success_time}}</td>
			</tr>
		</table>
		
		
		
		<table v-if="lists.detail.cate_id == 245">
			<tr>
				<th>设计分类：</th>
				<td>{{lists.catesrt[0]}}</td>
			</tr>
			<tr>
				<th>项目所在地：</th>
				<td>{{lists.detail.province}}-{{lists.detail.city}}</td>
			</tr>
			<tr>
				<th>交付日期：</th>
				<td>{{lists.detail.success_time}}</td>
			</tr>
			
			
			
		</table>
		
		
		
		<table v-if="lists.detail.cate_id == 246">
			<tr>
				<th>具体类型：</th>
				<td>{{lists.catesrt[0]}}</td>
			</tr>
			<tr>
				<th>项目所在地：</th>
				<td>{{lists.detail.province}}-{{lists.detail.city}}</td>
			</tr>
			<tr>
				<th>交付日期：</th>
				<td>{{lists.detail.success_time}}</td>
			</tr>
			
			
			
		</table>
		
		
		
	</div>
	<div class="card">
		<div>
			<div class="card-header" style="display: inline-block;">项目描述</div>
		</div>
		<!--<div class="card-header">项目描述</div>-->
		<div class="card-content">
			<div class="card-content-inner" style="text-indent: -5em; padding-left: 6em;margin-left: 1em; padding-top: 0;padding-bottom: 0;">

			</div>
			<div class="card-content-inner" style="padding-top: 0;">
				{{lists.detail.desc}}
			</div>
		</div>

	</div>
    <div class="line"></div>
    <div class="btn" v-if="lists.sumb">
    	<mt-button type="primary" @click="btn">参与投标</mt-button>
    </div>
    


</div>
</template>

<script>
	import { Button } from 'mint-ui';
	import localStore from '@/localstorage.js'
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default {
		name: 'select01',
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
				localStorage.clear();
				axios.get(this.baseCont.PHP_API + '/gotender/' + this.lists.detail.id,{
								    
			    }).then(response => {
			   	    if(response.data.code == 200){			   	    	
			   	    	this.items = response.data.data;
			   	    	localStore.save(this.items);
    		            this.$router.push({name: 'gotender',params:{items:this.items}});
				        window.parent.scrollTo(0, 0);
			   	    }else if(response.data.code == 50001){
			   	    	Toast({message: response.data.message,duration: 2000});
			   	    	this.$router.push({path: '/index_self'});
			   	    	window.parent.scrollTo(0, 0);
			   	    }else if(response.data.code == 50002){
			   	    	Toast({message: response.data.message,duration: 2000});
			   	    	this.$router.push({path: '/engineer'});
			   	    	window.parent.scrollTo(0, 0);
			   	    }else if(response.data.code == 50003){
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
.p-item {
    background: #ffffff;
    width: 100%;
    margin-bottom: 0.5rem;
    position: relative;
}
.p-item > table {
    border-bottom: 0.05rem solid #e7e7e7;
    width: 100%;
    background: #ffffff;
    font-size: 0.4rem;
}
.p-item th {
    font-weight: normal;
    color: #999999;
    padding-bottom: 0.6rem;
    text-align: right;
    width: 33%;
}
.p-item td {
    color: #333333;
    padding-bottom: 0.6rem;
    text-align: left;
}
.card {
    border-width: 0.02rem 0;
    font-size: 0.4rem;
}
.card-content {
    position: relative;
}
.card-header {
    border-radius: 0.1rem 0.1rem 0 0;
    font-size: 0.4rem;
    position: relative;
    padding: 0.5rem 0.75rem;
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
}
.card-content-inner {
    padding: 0.75rem;
    position: relative;
}
.can-take-tab th {
    width: 20%;
    text-align: left;
}
.can-take-tab tr td:nth-of-type(1) {
    width: 1rem;
}
.can-take-tab td, .can-take-tab th {
    font-size: 0.4rem;
}
.wrong-icon {
    background: url(../../../static/images/cha.png);
    background-repeat: no-repeat;
    background-size: 0.9rem 0.93rem;
    width: 0.9rem;
    height: 1rem;
    display: block;
}
.can-take-tab tr td:nth-of-type(2) {
    font-size: 0.3rem;
    width: 10rem;
}
.can-take-tab tr td:nth-of-type(3) {
    width: 5rem;
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
    height: 1rem;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
    font-size: 0.4rem;
    font-family: inherit;
    cursor: pointer;
}
.right-icon {
    background: url(../../../static/images/gou.png);
    background-repeat: no-repeat;
    background-size: 0.9rem 0.93rem;
    width: 0.9rem;
    height: 1rem;
    display: block;
}
.line{
	width: 100%;
	height: 0.1rem;
	background: #efeff4;
}
.btn{
	text-align: center;
	min-height: 2rem;
	line-height: 2rem;
}
</style>