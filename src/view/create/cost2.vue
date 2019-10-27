<template>
    <div data-role="page" id="t-page">
    	<mt-header title="项目发布">
            <router-link to="" slot="left">
                <mt-button icon="back" v-on:click="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        
        <div v-if="this.$route.params.id == 241">
        <div class="second_step_div" style="padding: 0 15px;">
        	<div class="project-info-show">
        		<h3 class="title-tips" v-if="items.classInfo.type_one">您正在发布【{{items.classInfo.type_one.name}}】项目</h3>
        		<div>
        			<li v-for="val in items.classInfo.use">{{val.name}}|</li>
        		</div>
        		<div>
        			<li>{{items.classInfo.type.name}}</li>
        		</div>
        		<div>
        			<li v-for="val in items.classInfo.specialty">{{val.name}}|</li>
        		</div>
        	</div>
        </div>
        
        <div id="confirm_info_form" class="new_project">
        	<districtBase class="title" @areaChange="getArea" :sendsrt="myAdress" boxsrt="项目所在地"></districtBase>

        	<div class="time ve-time-right" @click="openPicker">
        		<label>交付时间:</label>
                <span>{{ date }}</span>
        	</div>
            <mt-datetime-picker
				ref="picker" 
				type="date"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日"
                :startDate="startDate"
				@confirm="handleConfirm" 
				v-model="date">
			</mt-datetime-picker>
        	
        	<mt-radio
                title="总建筑规模:"
                v-model="project_site"
                :options="projectlist">
            </mt-radio>
        	
        	<mt-field v-if="project_site == 1" label="总建筑规模:" placeholder="总建筑规模" type="number" v-model="project_des_area">平方米</mt-field>
        	<mt-field v-if="project_site == 1" label="地下室面积:" placeholder="地下室面积" type="number" v-model="project_des">平方米</mt-field>
        	<mt-field v-if="project_site == 2" label="总建筑规模:" placeholder="总建筑规模" type="number" v-model="project_des_area">万元</mt-field>
        	
        	
        	<mt-field label="单体数量:" placeholder="单体数量" type="number" v-model="one_num"></mt-field>
        	
        	<mt-checklist 
            align="right" 
            title="软件名称:"
            v-model="softw"
            :options="items.softw">
            </mt-checklist>
        	
        	       	
        	<mt-field label="详细描述:" placeholder="详细描述" type="textarea" rows="4" v-model="introduction"></mt-field>
        	
        	<listFile @getFiles="updateImg" sendsrt="上传图纸及资料:"></listFile>
            <div>
                <div v-for="(item,k) in file_list">
                    <mt-cell :title="item.filenamesrt_id">
                        <img slot="icon" src="../../../static/images/folder.png" width="24" height="24">
                        <span><img slot="icon" src="../../../static/images/del.png" width="24" height="24" @click="getRemove(k,item.file_id)"></span>
                    </mt-cell>
                </div>
            </div>
        	
        	
        	
        	<mt-field label="预估总造价:" placeholder="预估总造价" type="number" v-model="total_cost">元</mt-field>
        	
        	
        	
        	<mt-radio
                title="雇主报价:"
                v-model="price"
                :options="typelist">
            </mt-radio>
            <mt-field v-if="price == 1" label="按咨询服务费:" placeholder="按咨询服务费" type="number" v-model="consulting">元</mt-field>
            <mt-field v-if="price == 2" label="按当地政府收费标准的下浮:" placeholder="按当地政府收费标准的下浮" type="number" v-model="standard">%</mt-field>
            
            <mt-field v-if="price == 2" label="预估咨询服务费:" placeholder="预估咨询服务费" type="text" disabled="disabled" v-model="consulting_standard">元</mt-field>
            <mt-field v-if="price == 3" label="按总造价计费:" placeholder="按总造价计费" type="number" v-model="cost">‰</mt-field>
            <mt-field v-if="price == 3" label="预估咨询服务费:" placeholder="预估咨询服务费" type="number" disabled="disabled" v-model="cost_standard">元</mt-field>
            
            
            <mt-radio
                title="选择竞价模式:"
                v-model="standard_charge"
                :options="standard_charge_list">
            </mt-radio>
            
            <mt-field label="项目标题:" placeholder="项目标题" type="text" v-model="title"></mt-field>
        	
        	<mt-field label="手机号码:" placeholder="手机号码" type="tel" v-model="phone"></mt-field>
        	
        	<mt-field label="QQ号码:" placeholder="QQ号码" type="number" v-model="qq" ></mt-field>
        	
        	<mt-field label="发包推荐人:" placeholder="发包推荐人" type="number" v-model="presenter"></mt-field>
        	
        	</div>
        </div>
        
        
        <div v-if="this.$route.params.id == 242">
        <div class="second_step_div" style="padding: 0 15px;">
        	<div class="project-info-show">
        		<h3 class="title-tips" v-if="items.classInfo.type_one">您正在发布【{{items.classInfo.type_one.name}}】项目</h3>
        		<div>
        			<li v-for="val in items.classInfo.use">{{val.name}}|</li>
        		</div>
        	</div>
        </div>
        
        <div id="confirm_info_form" class="new_project">
        	<districtBase class="title" @areaChange="getArea" :sendsrt="myAdress" boxsrt="项目所在地"></districtBase>
        	
        	<div class="time ve-time-right" @click="openPicker">
        		<label>交付时间:</label>
                <span>{{ date }}</span>
        	</div>
            <mt-datetime-picker
				ref="picker" 
				type="date"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日"
                :startDate="startDate"
				@confirm="handleConfirm" 
				v-model="date">
			</mt-datetime-picker>
        	
        	
        	<mt-field label="估计投资:" placeholder="估计投资" type="number" v-model="project_des_area">万元</mt-field>
        	<mt-field label="详细描述:" placeholder="详细描述" type="textarea" rows="4" v-model="introduction"></mt-field>
        	<listFile @getFiles="updateImg" sendsrt="上传图纸及资料:"></listFile>
            <div>
                <div v-for="(item,k) in file_list">
                    <mt-cell :title="item.filenamesrt_id">
                        <img slot="icon" src="../../../static/images/folder.png" width="24" height="24">
                        <span><img slot="icon" src="../../../static/images/del.png" width="24" height="24" @click="getRemove(k,item.file_id)"></span>
                    </mt-cell>
                </div>
            </div>
        	
        	
        	
        	<mt-field label="雇主报价:" placeholder="雇主报价" type="number" v-model="consulting">元</mt-field>
        	
        	
        	
        	
            
            
            <mt-radio
                title="选择竞价模式:"
                v-model="standard_charge"
                :options="standard_charge_list">
            </mt-radio>
            
            <mt-field label="项目标题:" placeholder="项目标题" type="text" v-model="title"></mt-field>
        	
        	<mt-field label="手机号码:" placeholder="手机号码" type="tel" v-model="phone"></mt-field>
        	
        	<mt-field label="QQ号码:" placeholder="QQ号码" type="number" v-model="qq" ></mt-field>
        	
        	<mt-field label="发包推荐人:" placeholder="发包推荐人" type="number" v-model="presenter"></mt-field>
        	
        	</div>
        </div>
        	 
        
        <div v-if="this.$route.params.id == 243">
        <div class="second_step_div" style="padding: 0 15px;">
        	<div class="project-info-show">
        		<h3 class="title-tips" v-if="items.classInfo.type_one">您正在发布【{{items.classInfo.type_one.name}}】项目</h3>
        		<div>
        			<li>{{items.classInfo.use.name}}</li>
        		</div>
        		<div>
        			<li>{{items.classInfo.type.name}}</li>
        		</div>
        		<div>
        			<li>{{items.classInfo.specialty.name}}<b class="teshu">{{items.classInfo.specialty.price}}元({{items.classInfo.specialty.describe}})</b></li>
        		</div>
        	</div>
        </div>
        
        <div id="confirm_info_form" class="new_project">
        	
        	<div class="time ve-time-right" @click="openPicker">
        		<label>交付时间:</label>
                <span>{{ date }}</span>
        	</div>
            <mt-datetime-picker
				ref="picker" 
				type="date"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日"
                :startDate="startDate"
				@confirm="handleConfirm" 
				v-model="date">
			</mt-datetime-picker>
        	        	        	        	        	        	        	               	       	
        	<mt-field label="详细描述:" placeholder="详细描述" type="textarea" rows="4" v-model="introduction"></mt-field>
        	
        	<listFile @getFiles="updateImg" sendsrt="上传图纸及资料:"></listFile>
            <div>
                <div v-for="(item,k) in file_list">
                    <mt-cell :title="item.filenamesrt_id">
                        <img slot="icon" src="../../../static/images/folder.png" width="24" height="24">
                        <span><img slot="icon" src="../../../static/images/del.png" width="24" height="24" @click="getRemove(k,item.file_id)"></span>
                    </mt-cell>
                </div>
            </div>
            
            <mt-field label="项目标题:" placeholder="项目标题" type="text" v-model="title"></mt-field>
        	
        	<mt-field label="手机号码:" placeholder="手机号码" type="tel" v-model="phone"></mt-field>
        	
        	<mt-field label="QQ号码:" placeholder="QQ号码" type="number" v-model="qq" ></mt-field>
        	
        	<mt-field label="发包推荐人:" placeholder="发包推荐人" type="number" v-model="presenter"></mt-field>
        	
        	</div>
        </div>
        
        
        <div v-if="this.$route.params.id == 244">
        <div class="second_step_div" style="padding: 0 15px;">
        	<div class="project-info-show">
        		<h3 class="title-tips" v-if="items.classInfo.type_one">您正在发布【{{items.classInfo.type_one.name}}】项目</h3>
        		<div>
        			<li v-for="val in items.classInfo.use">{{val.name}}|</li>
        		</div>
        	</div>
        </div>
        
        <div id="confirm_info_form" class="new_project">
        	<districtBase class="title" @areaChange="getArea" :sendsrt="myAdress" boxsrt="项目所在地"></districtBase>
        	
        	
        	<div class="time ve-time-right" @click="openPicker">
        		<label>交付时间:</label>
                <span>{{ date }}</span>
        	</div>
            <mt-datetime-picker
				ref="picker" 
				type="date"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日"
                :startDate="startDate"
				@confirm="handleConfirm" 
				v-model="date">
			</mt-datetime-picker>
        	        	        	        	        	              	        	       	        	       	
        	<mt-field label="详细描述:" placeholder="详细描述" type="textarea" rows="4" v-model="introduction"></mt-field>
        	
        	<listFile @getFiles="updateImg" sendsrt="上传图纸及资料:"></listFile>
            <div>
                <div v-for="(item,k) in file_list">
                    <mt-cell :title="item.filenamesrt_id">
                        <img slot="icon" src="../../../static/images/folder.png" width="24" height="24">
                        <span><img slot="icon" src="../../../static/images/del.png" width="24" height="24" @click="getRemove(k,item.file_id)"></span>
                    </mt-cell>
                </div>
            </div>
        	        	       	
        	<mt-field label="雇主报价:" placeholder="雇主报价" type="number" v-model="consulting">元</mt-field>
        	        	        	                        
            <mt-radio
                title="选择竞价模式:"
                v-model="standard_charge"
                :options="standard_charge_list">
            </mt-radio>
            
            <mt-field label="项目标题:" placeholder="项目标题" type="text" v-model="title"></mt-field>
        	
        	<mt-field label="手机号码:" placeholder="手机号码" type="tel" v-model="phone"></mt-field>
        	
        	<mt-field label="QQ号码:" placeholder="QQ号码" type="number" v-model="qq" ></mt-field>
        	
        	<mt-field label="发包推荐人:" placeholder="发包推荐人" type="number" v-model="presenter"></mt-field>
        	
        	</div>
        </div>
        
        
        <div v-if="this.$route.params.id == 245">
        <div class="second_step_div" style="padding: 0 15px;">
        	<div class="project-info-show">
        		<h3 class="title-tips" v-if="items.classInfo.type_one">您正在发布【{{items.classInfo.type_one.name}}】项目</h3>
        		<div>
        			<li>{{items.classInfo.use.name}}</li>
        		</div>
        	</div>
        </div>
        
        <div id="confirm_info_form" class="new_project">
        	<districtBase class="title" @areaChange="getArea" :sendsrt="myAdress" boxsrt="项目所在地"></districtBase>
        	
        	<div class="time ve-time-right" @click="openPicker">
        		<label>交付时间:</label>
                <span>{{ date }}</span>
        	</div>
            <mt-datetime-picker
				ref="picker" 
				type="date"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日"
                :startDate="startDate"
				@confirm="handleConfirm" 
				v-model="date">
			</mt-datetime-picker>
        	        	        	                	        	        	        	        	        	       	
        	<mt-field label="详细描述:" placeholder="详细描述" type="textarea" rows="4" v-model="introduction"></mt-field>
        	
        	<listFile @getFiles="updateImg" sendsrt="上传图纸及资料:"></listFile>
            <div>
                <div v-for="(item,k) in file_list">
                    <mt-cell :title="item.filenamesrt_id">
                        <img slot="icon" src="../../../static/images/folder.png" width="24" height="24">
                        <span><img slot="icon" src="../../../static/images/del.png" width="24" height="24" @click="getRemove(k,item.file_id)"></span>
                    </mt-cell>
                </div>
            </div>
        	        	        	
        	<mt-field label="雇主报价:" placeholder="雇主报价(元)" type="number" v-model="consulting">元</mt-field>
        	        	        	        	                        
            <mt-radio
                title="选择竞价模式:"
                v-model="standard_charge"
                :options="standard_charge_list">
            </mt-radio>
            
            <mt-field label="项目标题:" placeholder="项目标题" type="text" v-model="title"></mt-field>
        	
        	<mt-field label="手机号码:" placeholder="手机号码" type="tel" v-model="phone"></mt-field>
        	
        	<mt-field label="QQ号码:" placeholder="QQ号码" type="number" v-model="qq" ></mt-field>
        	
        	<mt-field label="发包推荐人:" placeholder="发包推荐人" type="number" v-model="presenter"></mt-field>
        	
        	</div>
        </div>
        
        
        <div v-if="this.$route.params.id == 246">
        <div class="second_step_div" style="padding: 0 15px;">
        	<div class="project-info-show">
        		<h3 class="title-tips" v-if="items.classInfo.type_one">您正在发布【{{items.classInfo.type_one.name}}】项目</h3>
        		<div>
        			<li>{{items.classInfo.use.name}}</li>
        		</div>
        	</div>
        </div>
        
        <div id="confirm_info_form" class="new_project">
        	<districtBase class="title" @areaChange="getArea" :sendsrt="myAdress" boxsrt="项目所在地"></districtBase>
        	<div class="time ve-time-right" @click="openPicker">
        		<label>交付时间:</label>
                <span>{{ date }}</span>
        	</div>
            <mt-datetime-picker
				ref="picker" 
				type="date"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日"
                :startDate="startDate"
				@confirm="handleConfirm" 
				v-model="date">
			</mt-datetime-picker>

        	<mt-field label="详细描述:" placeholder="详细描述" type="textarea" rows="4" v-model="introduction"></mt-field>
        	
        	<listFile @getFiles="updateImg" sendsrt="上传图纸及资料:"></listFile>
            <div>
                <div v-for="(item,k) in file_list">
                    <mt-cell :title="item.filenamesrt_id">
                        <img slot="icon" src="../../../static/images/folder.png" width="24" height="24">
                        <span><img slot="icon" src="../../../static/images/del.png" width="24" height="24" @click="getRemove(k,item.file_id)"></span>
                    </mt-cell>
                </div>
            </div>
        	        	        	
        	<mt-field label="雇主报价:" placeholder="雇主报价" type="number" v-model="consulting">元</mt-field>
        	        	        	        	                       
            <mt-radio
                title="选择竞价模式:"
                v-model="standard_charge"
                :options="standard_charge_list">
            </mt-radio>
            
            <mt-field label="项目标题:" placeholder="项目标题" type="text" v-model="title"></mt-field>
        	
        	<mt-field label="手机号码:" placeholder="手机号码" type="tel" v-model="phone"></mt-field>
        	
        	<mt-field label="QQ号码:" placeholder="QQ号码" type="number" v-model="qq" ></mt-field>
        	
        	<mt-field label="发包推荐人:" placeholder="发包推荐人" type="number" v-model="presenter"></mt-field>
        	
        	</div>
        </div>
        	 
        <div class="ve-bottom-tj"> 
            <mt-button  size="large" :disabled="subumting"  @click="nextgo" :plain="true" type="primary" >
                <span v-if="!subumting">确认发布</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>
    </div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Popup } from 'mint-ui';
	import { Picker } from 'mint-ui';
	import { checklist } from 'mint-ui'
	import { Field } from 'mint-ui';
	import { DatetimePicker } from 'mint-ui';
	import districtBase from "@/view/assembly/districtbase";
	import axios from 'axios';
	import localStore from '@/localstorage.js';
	import listFile from "@/view/assembly/allfile";
	import { Indicator } from 'mint-ui';
	export default {
		name: 'cost2',
		data() {
			return {
				myAdress: null,
				timeof: null,
			    // value: null,
                items:localStore.fetch(),
                date:'',
    	        name:'',
                project_site:'',
                project_des_area:'',
                project_des:'',
                one_num:'',
                introduction:'',
                phone:'',
                qq:'',
                total_cost:'',
                price:'',
                standard_charge:'',
                introduction:'',
                project_des_area:'',
                title:'',
                presenter:'',
                item_privacy:'',
                consulting:'',
                standard:'',
                cost:'',
                file_id: [],
                file_list: [],
                district:[],
    	        address:[],
    	        slots:[],
                softw:[],
    	        subumting: false,
                startDate: new Date(),
                typelist:[
                    {
                        label: '按咨询服务费',
                        value: '1',
                    },
                    {
                        label: '按当地政府收费标准的下浮',
                        value: '2'
                    },
                    {
                        label: '按总造价计费',
                        value: '3'
                    }
                ],
                projectlist:[
                    {
                    	label: '平方米',
                    	value: '1',
                    },
                    {
                    	label: '万元',
                    	value: '2'
                    }
                ],
                standard_charge_list:[
                    {
                    	label: '一口价模式(选择一口价模式工程师不可再报价)',
                    	value: '1'
                    },
                    {
                    	label: '竞标模式(选择竞标模式后工程师可报价)',
                    	value: '2'
                    }
                ],
			}
		},
		mounted() {
		},
		created (){
		},
		watch: {
            date: function(e){
                this.date = this.fmtDate(e)
            },          
            items: {
                handler: function (items) {
                    localStore.save(items)
                },
            deep: true
            },
            project_site: function(){
            	this.project_des_area = [],
            	this.project_des = [],
            	this.project_des_area = []
            },
            price: function(){
            	this.consulting = [],
            	this.standard = [],
            	this.consulting_standard = [],
            	this.cost = [],
            	this.cost_standard = []
            }

        },
		computed:{
			
			consulting_standard:{
				get:function(){
					return (this.standard/100)*0.004*this.total_cost;
				},
				set:function(){
					
				}
			},
			cost_standard:{
				get:function(){
					return (this.cost/1000)*this.total_cost;
				},
				set:function(){
					
				}
			},
				
		},
		components: {
			districtBase,
			listFile
		},
		methods: {
            fmtDate(obj){
                var date =  new Date(obj);
                var y = 1900+date.getYear();
                var m = "0"+(date.getMonth()+1);
                var d = "0"+date.getDate();
                return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
            },
			openPicker() {
				this.$refs.picker.open();
			},
			handleConfirm (e) {
                this.date = this.fmtDate(e)
			},
			getArea (obj) {
                this.myAdress = obj.myAdress
                this.district = obj.district
            }, 
            updateImg (obj) {
                this.file_list.push(obj)
                this.file_id.push(obj.file_id)
                Indicator.close();
            },
            getRemove (k,id) {
                axios.get(this.baseCont.PHP_API + '/filesdel', {
                    params: {
                        id: id
                    }
                })
                .then(response => {
                    if (response.data.code === 200) {
                        this.file_list.splice(k,1)
                        this.file_id.splice(k,1)
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
                })
            },
            back(){
                this.$router.go(-1);//返回上一层
                localStorage.clear();                
            },
            nextgo(){
            	var reg = /^1[3|5|6|7|8|9][0-9]\d{8}$/;
            	var phoneNum = this.phone;
            	var ratio = this.standard;
            	if(this.$route.params.id == 241){
            		if(this.district.length == 0){
            		Toast({
                        message: '请选择项目所在地',
                        duration: 2000
                    });
                    return false
            	}else if(this.date.length == 0){
            		Toast({
                        message: '请选择交付时间',
                        duration: 2000
                    });
                    return false
            	}else if(this.project_site.length == 0){
            		Toast({
                        message: '请选择总建筑规模',
                        duration: 2000
                    });
                    return false
            	}else if(this.project_des_area.length == 0){
            		Toast({
                        message: '请填写总建筑规模',
                        duration: 2000
                    });
                    return false
            	}else if(this.one_num.length == 0){
            		Toast({
                        message: '请填写单体数量',
                        duration: 2000
                    });
                    return false
            	}else if(this.total_cost.length == 0){
            		Toast({
                        message: '请填写预估总造价',
                        duration: 2000
                    });
                    return false
            	}else if(this.price.length == 0){
            		Toast({
                        message: '请选择雇主报价模式',
                        duration: 2000
                    });
                    return false
            	}else if(this.price == 1){
            		if(this.consulting.length == 0){
            			Toast({
                            message: '请填写咨询服务费',
                            duration: 2000
                        });
                        return false
            		}
            		
            	}else if(this.price == 2){
            		if(this.standard.length == 0){
            			Toast({
                            message: '请填写当地政府标准下浮比例',
                            duration: 2000
                        });
                        return false
            		}
            		if(parseInt(ratio) < 20 || parseInt(ratio) > 80){
            			Toast({
                            message: '当地政府标准下浮比例为20%~80%',
                            duration: 2000
                        });
                        return false
            		}
            	}else if(this.price == 3){
            		if(this.cost.length == 0){
            			Toast({
                            message: '请填写总造价计费',
                            duration: 2000
                        });
                        return false
            		}
            		
            	}
            	
            	
            	if(this.standard_charge.length == 0){
            		Toast({
                        message: '请选择竞价模式',
                        duration: 2000
                    });
                    return false
            	} 
            	if(this.title.length == 0){
            		Toast({
                        message: '请填写项目标题',
                        duration: 2000
                    });
                    return false
            	}
            	if(this.phone.length == 0){
            		Toast({
                        message: '请填写手机号码',
                        duration: 2000
                    });
                    return false
            	}
            	if(!reg.test(phoneNum)){
            		Toast({
                        message: '输入的手机号码不正确，请重新输入',
                        duration: 2000
                    });
                    return false
            	}
            	}
            	
            	if(this.$route.params.id == 242){
            		if(this.district.length == 0){
            		Toast({
                        message: '请选择项目所在地',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.project_des_area.length == 0){
            		Toast({
                        message: '请填写预估投资',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.consulting.length == 0){
            		Toast({
                        message: '请填写雇主报价',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.standard_charge.length == 0){
            		Toast({
                        message: '请选择竞价模式',
                        duration: 2000
                    });
                    return false
            	} 
            	if(this.title.length == 0){
            		Toast({
                        message: '请填写项目标题',
                        duration: 2000
                    });
                    return false
            	}
            	if(this.phone.length == 0){
            		Toast({
                        message: '请填写手机号码',
                        duration: 2000
                    });
                    return false
            	}
            	if(!reg.test(phoneNum)){
            		Toast({
                        message: '输入的手机号码不正确，请重新输入',
                        duration: 2000
                    });
                    return false
            	}
            	}
            	
            	if(this.$route.params.id == 243){
            		
            		if(this.date.length == 0){
            		Toast({
                        message: '请填写交付时间',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.introduction.length == 0){
            		Toast({
                        message: '请填写详细描述',
                        duration: 2000
                    });
                    return false
            	    }
            		
            
            	if(this.title.length == 0){
            		Toast({
                        message: '请填写项目标题',
                        duration: 2000
                    });
                    return false
            	}
            	if(this.phone.length == 0){
            		Toast({
                        message: '请填写手机号码',
                        duration: 2000
                    });
                    return false
            	}
            	if(!reg.test(phoneNum)){
            		Toast({
                        message: '输入的手机号码不正确，请重新输入',
                        duration: 2000
                    });
                    return false
            	}
            	}
            	
            	if(this.$route.params.id == 244){
            		if(this.district.length == 0){
            		Toast({
                        message: '请选择项目所在地',
                        duration: 2000
                    });
                    return false
            	    }
            		
            		if(this.date.length == 0){
            		Toast({
                        message: '请填写交付时间',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.introduction.length == 0){
            		Toast({
                        message: '请填写详细描述',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.consulting.length == 0){
            		Toast({
                        message: '请填写雇主报价',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.standard_charge.length == 0){
            		Toast({
                        message: '请选择竞价模式',
                        duration: 2000
                    });
                    return false
            	   } 
            
            	if(this.title.length == 0){
            		Toast({
                        message: '请填写项目标题',
                        duration: 2000
                    });
                    return false
            	}
            	if(this.phone.length == 0){
            		Toast({
                        message: '请填写手机号码',
                        duration: 2000
                    });
                    return false
            	}
            	if(!reg.test(phoneNum)){
            		Toast({
                        message: '输入的手机号码不正确，请重新输入',
                        duration: 2000
                    });
                    return false
            	}
            	}
            	
            	if(this.$route.params.id == 245){
            		if(this.district.length == 0){
            		Toast({
                        message: '请选择项目所在地',
                        duration: 2000
                    });
                    return false
            	    }
            		
            		if(this.date.length == 0){
            		Toast({
                        message: '请填写交付时间',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.introduction.length == 0){
            		Toast({
                        message: '请填写详细描述',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.consulting.length == 0){
            		Toast({
                        message: '请填写雇主报价',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.standard_charge.length == 0){
            		Toast({
                        message: '请选择竞价模式',
                        duration: 2000
                    });
                    return false
            	   } 
            
            	if(this.title.length == 0){
            		Toast({
                        message: '请填写项目标题',
                        duration: 2000
                    });
                    return false
            	}
            	if(this.phone.length == 0){
            		Toast({
                        message: '请填写手机号码',
                        duration: 2000
                    });
                    return false
            	}
            	if(!reg.test(phoneNum)){
            		Toast({
                        message: '输入的手机号码不正确，请重新输入',
                        duration: 2000
                    });
                    return false
            	}
            	}
            	
            	if(this.$route.params.id == 246){
            		if(this.district.length == 0){
            		Toast({
                        message: '请选择项目所在地',
                        duration: 2000
                    });
                    return false
            	    }
            		
            		if(this.date.length == 0){
            		Toast({
                        message: '请填写交付时间',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.introduction.length == 0){
            		Toast({
                        message: '请填写详细描述',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.consulting.length == 0){
            		Toast({
                        message: '请填写雇主报价(单位：元)',
                        duration: 2000
                    });
                    return false
            	    }
            		if(this.standard_charge.length == 0){
            		Toast({
                        message: '请选择竞价模式',
                        duration: 2000
                    });
                    return false
            	   } 
            
            	if(this.title.length == 0){
            		Toast({
                        message: '请填写项目标题',
                        duration: 2000
                    });
                    return false
            	}
            	if(this.phone.length == 0){
            		Toast({
                        message: '请填写手机号码',
                        duration: 2000
                    });
                    return false
            	}
            	if(!reg.test(phoneNum)){
            		Toast({
                        message: '输入的手机号码不正确，请重新输入',
                        duration: 2000
                    });
                    return false
            	}
            	}
            	
            		axios.post(this.baseCont.PHP_API + '/complete',{
            		 data:{
            		   miwen: {
						    type_one:this.items.classInfo.type_one,
					        use:this.items.classInfo.use,
					        type:this.items.classInfo.type,
					        specialty:this.items.classInfo.specialty,
					        type_srt:this.items.type_srt
					    },
					    district: this.district,
					    date: this.date,
					    project_site: this.project_site,
					    scale: this.project_des_area,
					    project_des_area: this.project_des,
					    one_num: this.one_num,
					    it_name: this.softw,
					    desc: this.introduction,
					    total_cost: this.total_cost,
					    ifratio: this.price,
					    price: this.consulting,
					    ratio: this.standard,
					    ratio_one: this.cost,
					    standard_charge: this.standard_charge,
					    title:this.title,
					    phone: this.phone,
					    qq: this.qq,
					    presenter_id: this.presenter
            			}
					
					    
				    }).then(response => {
	    		        if(response.data.code == 200){
                            Toast({
                                message: '项目发布成功',
                                duration: 2000
                            });
		    	            this.$router.push({path: '/cost1'});
                        }else if(response.data.code == 50002){
                            Toast({
                                message: response.data.message,
                                duration: 2000
                            });
                        }else{
//                      	Toast({
//                              message: response.data.message,
//                              duration: 2000
//                          });
                        }
	    		            
	    		    
                    }).catch((err) => {
                            console.log(err.msg);
                    });
            
            }
            
		}
	}
</script>

<style scoped>
a{
	text-decoration: none;
}
#start{
	width: 100%;
	height: 0.8rem;
}
#t-page{
	padding-bottom: 2rem;
	width: 100%;
	overflow-x: hidden;
}
.ui-bar-f {
    background: #db4b40;
    color: white;
}
.ui-header, .ui-footer {
    border-width: 1px 0;
    border-style: solid;
    position: relative;
    height: 1.2rem;
    line-height: 1.2rem;
}
.ui-header a{
	width: 0.8rem;
	height: 0.8rem;
	display: block;
	border-radius: 50%;
	border: solid 0.05rem #FFFFFF !important;
	border-color: ;
	float: left;
	margin: 0.1rem 0 0 0.1rem;
	text-align: center;
}
.ui-header h1{
    font-size: 0.6rem;
    padding-right: 0.5rem;
    text-align: center;
    display: block;
    
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    outline: 0 !important;
}
.ui-title{
	font-size: 0.5rem;
	padding: 0.4rem 0 0.4rem 0.4rem;
}
.ui-title span{
	color: #999;
}
.project-info-show {
    background: #f5f5f5;
    margin-bottom: 20px;
    margin-top: -20px;
    padding: 40px;
    font-size: 0.4rem;
}
.project-info-show span {
    margin: 5px 10px;
    display: inline-block;
}
.ve-time-right {
    padding-right: 0.6rem;    
}
.ve-time-right span{
    float: right;
    display: inline-block;
}
.form-item {
   
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}
.ui-mobile label, .ui-controlgroup-label {
    display: block;
    margin: 0 0 0.4rem;
}
.form-label i {
    color: red;
    margin-right: 5px;
    font-style: normal;
}
.ui-select {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    position: relative;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
}

.ui-select .ui-btn select {
    width: 100%;
    height: 0.9rem;
    outline: 0;
    -webkit-border-radius: inherit;
    border-radius: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    filter: Alpha(Opacity=0);
   font-size: 0.4rem;
    background: url(../../../static/images/icon.png) no-repeat scroll right center transparent;
    margin-left: 0.1rem;
}
#project_want_date,#project_entity_amount,#project_software_name,#project_mb_phone,#project_qq{
	width: 100%;
}
#project_area,#project_reward_zj{
	width: 95%;
}
 #project_want_date, #project_area,#project_cellar_area,#project_entity_amount,#project_software_name,#project_reward_zj,#project_mb_phone,#project_qq{ 	
    height: 0.8rem;
    outline: 0;
    -webkit-border-radius: inherit;
    border-radius: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    filter: Alpha(Opacity=0);
   font-size: 0.4rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
 }
 .ui-controlgroup{
 	height: 0.8rem;
    outline: 0;
    -webkit-border-radius: inherit;
    border-radius: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    filter: Alpha(Opacity=0);
   font-size: 0.4rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
 }
 .ui-checkbox{
 	height: 0.8rem;
 	line-height: 0.8rem;
 	float: left;
 }
 #project_has_abri,#project_has_garage,#project_has_cad,#project_bid_mod,#project_disable_night,#project_want_wt,#aggyfwxy{
 	width: 0.4rem;
 	height: 0.5rem;
 	position: relative;
 	top: 0.1rem;
 }
 .box{
 	width: 100%;
 	height: 0.8rem;
 	line-height: 0.8rem;
 	border: 0.05rem solid #ddd;
 	border-radius: 0.1rem;
 	margin-top: 0.4rem;
 	margin-bottom: 0.4rem;
 	padding-left: 0.1rem;
 	font-size: 0.4rem;
 }
 #project_detail_0{
 	width: 100%;
 	height: 2rem;
 	font-size: 0.4rem;
 	margin-top: 0.2rem;
 	margin-bottom: 0.2rem;
 	border: 0.05rem solid #DDDDDD;
 	border-radius: 0.1rem;
 }
 .textbox{
 	
 	width: 80%;
 	border: 0.05rem solid #ddd;
 	border-radius: 0.1rem;
 	margin-left: 6%;
 	font-size: 0.4rem;
 	padding-bottom: 10px;
    font-weight: normal;
    margin-top: 0.4rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
 	
 }
 .action{
	width: 100%;
	font-size: 0.5rem;
	padding: 2.5rem 0 0 0.8rem;
}
.action ul li{
	width: 40%;
	height: 1.1rem;
	display: inline-block;
	line-height: 1.1rem;
	text-align: center;
	border-radius: 0.4rem;
	cursor: pointer;
	background: #1296db;
	color: #FFFFFF;
}
.ui-header a img{
	width: 0.7rem;
	height: 0.7rem;
}
.project-info-show > div > li{
	display: inline-block;
	padding-top: 0.3rem;
}
.ve-bottom-tj{
	width: 80%;
	margin: 0 auto;
	margin-top: 1rem;
}
.teshu{
	font-size: 0.3rem;
}
.title{
	font-size: 16px;
}
.time > label{
	font-size: 16px;
	padding-left: 0.3rem;
}
.time > input{
	border: none;
	outline: none;
	padding-left: 2rem;
}
</style>