<template>
	<div class="box">
	    <mt-header title="编辑项目经验">
            <router-link to="/resume" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
		
		<mt-field label="公司名称:" placeholder="" type="text" v-model="list.project_company"></mt-field>
		<mt-field label="项目名称:" placeholder="" type="text" v-model="list.project_name"></mt-field>
		
		<district @areaChange="getArea" :arealist="area_list" :sendsrt="myAdress" boxsrt="项目地址" class="dreen"></district>
		
		
		
		<div id="select_service_type" style="padding: 0 15px;">
	        <h3 class="ui-title">单位性质:</span></h3>
	        <div class="options clearfix">
		        <div class="create_input" v-for="val in typelist">
                    <input type="radio" :value="val.name" name="specia" :id="'specia' + val.id" v-model="list.company_attr">
                    <label :for="'specia' + val.id">{{val.name}}</label>
                </div>
	        </div>        	
        </div>
        
        
        
        
        <div id="select_service_type" style="padding: 0 15px;">
	        <h3 class="ui-title">项目类型:</span></h3>
	        <div class="options clearfix">
		        <div class="create_input" v-for="val in lists.project_type">
                    <input type="radio" :value="val.name" name="box" :id="'box' + val.id" v-model="list.project_cate">
                    <label :for="'box' + val.id">{{val.name}}</label>
                </div>
	        </div>        	
        </div>
        
        
        
        <div id="select_service_type" style="padding: 0 15px;">
	        <h3 class="ui-title">项目专业:</span></h3>
	        <div class="options clearfix">
		        <div class="create_input" v-for="val in lists.pmajor">
                    <input type="radio" :value="val.id" name="tek" :id="'tek' + val.id" v-model="list.project_major">
                    <label :for="'tek' + val.id">{{val.name}}</label>
                </div>
	        </div>        	
        </div>
        
        <mt-field label="项目周期:" placeholder="" type="text" v-model="list.time">天</mt-field>
        <mt-field label="项目描述:" placeholder="" type="textarea" rows="4" v-model="list.work_content"></mt-field>
        
        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">确定修改</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>
		
		<!--底部导航-->
        <index-tab page="3"></index-tab>
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import district from "@/view/assembly/district";
	import { Header } from 'mint-ui';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default {
		name: 'experience',
		data() {
			return {
				company:'',
				project:'',
				myAdress: '',
				project_site:'',
				typelist:[
                    {
                    	name: '施工单位',
                    	id: 1
                    },
                    {
                    	name: '招标代理审计公司监理',
                    	id: 2
                    },
                    {
                    	name: '设计',
                    	id: 3
                    },
                    {
                    	name: '咨询单位建设单位个人工作室',
                    	id: 4
                    },
                    {
                    	name: '自由职业者',
                    	id: 5
                    },
                    {
                    	name: '招标代理',
                    	id: 6
                    },
                    {
                    	name: '其他',
                    	id: 7
                    }
                    
                ],
                project_type:'',                              
                project_professional:'',
                cycle:'',
                introduction:'',
                subumting: false,
                list:[],
                lists:[],
                area_list: [],
                district: []
			}
		},
		components: {
			indexTab,
			district
		},
		methods: {
			getArea (obj) {
                this.myAdress = obj.myAdress
                this.district = obj.district
            },
            refergo () {
            	if(!this.list.project_company){
            		Toast({
            		    message: '请填写公司名称!',
            		    duration: 2000
            	    })
            		return false
            	}
            	if(!this.list.project_name){
            		Toast({
            		    message: '请填写项目名称!',
            		    duration: 2000
            	    })
            		return false
            	}
            	if(!this.list.company_attr){
            		Toast({
            		    message: '请选择单位性质!',
            		    duration: 2000
            	    })
            		return false
            	}
            	if(!this.list.project_cate){
            		Toast({
            		    message: '请选择项目类型!',
            		    duration: 2000
            	    })
            		return false
            	}
            	if(!this.list.project_major){
            		Toast({
            		    message: '请选择项目专业!',
            		    duration: 2000
            	    })
            		return false
            	}
            	if(!this.list.time){
            		Toast({
            		    message: '请填写项目周期!',
            		    duration: 2000
            	    })
            		return false
            	}
            	if(!this.list.work_content){
            		Toast({
            		    message: '请填写项目描述!',
            		    duration: 2000
            	    })
            		return false
            	}
            	axios.post(this.baseCont.PHP_API + '/user/projectedit', {
                    id:this.$route.params.id,
            		project_name:this.list.project_name,
            		district:this.district,
            		project_company:this.list.project_company,
            		company_attr:this.list.company_attr,
            		project_cate:this.list.project_cate,
         		    project_major:this.list.project_major,
            		time:this.list.time,
            		work_content:this.list.work_content           		
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '修改成功',
                            duration: 1000
                        });
                        this.$router.push({path: '/resume'});
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
            },
            getindex () {
				axios.get(this.baseCont.PHP_API + '/user/projecteditlist', {
                    params: {
                    	id: this.$route.params.id,
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
						this.list = response.data.data.engineer_project
						
						this.area_list.push(response.data.data.engineer_project.province_id)
                        this.area_list.push(response.data.data.engineer_project.city_id)
                        
                        
                        this.district.push(response.data.data.engineer_project.province_id)
                        this.district.push(response.data.data.engineer_project.city_id)
                        
                        this.myAdress = response.data.data.province_name + '-' + response.data.data.city_name
                    
					}
				})
			},
			getdata(){
            	axios.get(this.baseCont.PHP_API + '/user/editproject', {}).then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        this.lists = response.data.data
                    }
				})
				.catch(function (error) {
					console.log(error)
				})
            }
            
		},
		mounted() {
			this.getindex();
			this.getdata();
		}
	}
</script>

<style scoped="scoped">
	.box{
		padding-bottom: 3rem;
	}
	.title{
		font-size: 0.4rem;
	}
	.ui-title{
        font-size: 0.5rem;
        padding: 0.4rem 0 0.4rem 0rem;
    }
    .options .create_input {
    
        height: 1.1rem;
        line-height: 1.1rem;
        font-size: 0.5rem;
        font-family: "\5FAE\8F6F\96C5\9ED1";
    }
    .options .create_input input {
        width: 0.5rem;
        height: 0.5rem;
    }
    .dreen{
    	font-size: 16px;
    }
</style>