<template>
	<div class="box">
		<mt-header title="工程师履历" v-if="list.supervise_type == 1">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
		<mt-header title="工作室履历" v-if="list.supervise_type == 2">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-header title="企业履历" v-if="list.supervise_type == 3">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
		<div class="content">
			<div>
                <mt-cell  title="用户名:" >{{ list.name }}</mt-cell>
                <mt-cell  title="年龄:" >{{ list.age }}岁</mt-cell>
                <div id="select_service_type" style="padding: 0 15px;">
        	        <h3 class="ui-title">性别:</h3>
        	        <div class="options clearfix">
        		        <div class="create_input">
                            <input type="radio"  :value="1" name="type" id="male" v-model="list.sex">
                            <label for="male">男</label>                            
                        </div>
                        <div class="create_input">
                            <input type="radio"  :value="2" name="type" id="male" v-model="list.sex">
                            <label for="male">女</label>
                        </div>
        	        </div>
                </div>
                <mt-cell  title="类型:" :value="list.educational_leavel"></mt-cell>
                <districtBase @areaChange="getArea" :arealist="area_list" :sendsrt="myAdress" boxsrt="常驻地" class="dreen"></districtBase>          
                <mt-cell  title="手机号码:" :value="list.phone"></mt-cell>
			</div>
            <div class="top_title">基本信息</div>
            <div>
            	<mt-radio
                    title="当前状态:"
                    v-model="list.work_state"
                    :options="['兼职', '全职','自由职业']">
                </mt-radio>
                           	                             
                <div id="select_service_type" style="padding: 0 15px;">
        	        <h3 class="ui-title">擅长项目用途:</span></h3>
        	        <div class="options clearfix">
        		        <div class="create_input" v-for="val in hotcate">
                            <input type="checkbox" :value="val.id" name="specialty" :id="'specialty' + val.id" v-model="val.action">
                            <label :for="'specialty' + val.id">{{val.name}}</label>
                        </div>
        	        </div>        	
                </div>

                
                
                
                <div id="select_service_type" style="padding: 0 15px;">
        	        <h3 class="ui-title">擅长项目专业:</span></h3>
        	        <div class="options clearfix">
        		        <div class="create_input" v-for="val in projectarr">
                            <input type="checkbox" :value="val.id" name="specia" :id="'specia' + val.id" v-model="val.action">
                            <label :for="'specia' + val.id">{{val.name}}</label>
                        </div>
        	        </div>        	
                </div>
              
                
                
                <div id="select_service_type" style="padding: 0 15px;">
        	        <h3 class="ui-title">软件名称:</span></h3>
        	        <div class="options clearfix">
        		        <div class="create_input" v-for="val in softwarerone">
                            <input type="checkbox" :value="val.id" name="specialt" :id="'specialt' + val.id" v-model="val.action">
                            <label :for="'specialt' + val.id">{{val.name}}</label>
                        </div>
        	        </div>       	
                </div>
               
                
                
                
                <div v-if="list.supervise_type == 3" style="border-top: 0.05rem solid #CCCCCC;">
                	<mt-field class="ve-input-mt" label="公司:" placeholder="" type="text" v-model="list.engineer_info.company"></mt-field>
                	<mt-field class="ve-input-mt" label="统一社会信用代码:" placeholder="" type="text" v-model="list.engineer_info.credit"></mt-field>
                	<mt-field class="ve-input-mt" label="组织机构代码:" placeholder="" type="text" v-model="list.engineer_info.mechanism"></mt-field>
                	<mt-field class="ve-input-mt" label="注册号:" placeholder="" type="text" v-model="list.engineer_info.registration"></mt-field>
                	<mt-field class="ve-input-mt" label="经营状态:" placeholder="" type="text" v-model="list.engineer_info.operatingstate"></mt-field>
                	<mt-field class="ve-input-mt" label="公司类型:" placeholder="" type="text" v-model="list.engineer_info.typecompany"></mt-field>
                	<mt-field class="ve-input-mt" label="成立日期:" placeholder="" type="text" v-model="list.engineer_info.dateestablishment"></mt-field>
                	<mt-field class="ve-input-mt" label="法定代表人:" placeholder="" type="text" v-model="list.engineer_info.name"></mt-field>
                	<mt-field class="ve-input-mt" label="营业期限:" placeholder="" type="text" v-model="list.engineer_info.establishment"></mt-field>
                	<mt-field class="ve-input-mt" label="注册资本:" placeholder="" type="text" v-model="list.engineer_info.registered">元</mt-field>
                	<mt-field class="ve-input-mt" label="企业地址:" placeholder="" type="text" v-model="list.engineer_info.enterpriseaddress"></mt-field>
                	<mt-field label="经营范围:" placeholder="" type="textarea" rows="4" v-if="list.engineer_info.introduce" v-model="list.engineer_info.introduce"></mt-field>
                </div>
                
                
            </div>
            
            
           
            <div class="line"></div>
            
            <div class="border">                                                                                                                             
            <div  v-if="list.supervise_type == 1">
            	<div class="top_title">工程师简介</div>
            	<mt-field label="工程师简介" placeholder="" type="textarea" rows="4" v-model="list.introduce"></mt-field>
            </div>
            
            <div  v-if="list.supervise_type == 2">
            	<div class="top_title">工作室简介</div>
            	<mt-field label="工作室简介" placeholder="" type="textarea" rows="4" v-model="list.introduce"></mt-field>
            </div>
            
            <div  v-if="list.supervise_type == 3">
            	<div class="top_title">企业简介</div>
            	<mt-field label="企业简介" placeholder="" type="textarea" rows="4" v-model="list.introduce"></mt-field>
            </div>
            </div>
            
            
            <div class="border" v-if="list.supervise_type == 1">
            <div class="top_title">
            	<li class="text">教育经历</li>
            	<li class="button">
            		<router-link to="/educational">
            		    <mt-button type="primary" size="small">新增</mt-button>
            		</router-link>
            	</li>
            </div>
            <div v-if="list.educational">
            	<ul v-for="val in list.educational">
            	    <mt-field class="ve-input-mt" label="学校名称:" placeholder="" type="text" v-model="val.school_name"></mt-field>
            	    <mt-field class="ve-input-mt" label="就读学历:" placeholder="" type="text" v-model="val.education"></mt-field>
            	    <mt-field class="ve-input-mt" label="所学专业:" placeholder="" type="text" v-model="val.major"></mt-field>
            	    <mt-field class="ve-input-mt" label="毕业年份:" placeholder="" type="text" v-model="val.graduation_time"></mt-field>
            	    <div class="bottom">
    				    <router-link :to="'/eideducational/'+val.id">
    				        <mt-button type="primary" size="small">编辑</mt-button>
    				    </router-link>
    				    <mt-button type="primary" size="small" @click="educational(val.id)">删除</mt-button>
    			    </div>
            	</ul>
            	<div class="teshu" v-if="list.educational.length == 0">暂未填写教育经历...</div>                       	
            </div>
            
            </div>
            
            
            <div class="border" v-if="list.supervise_type == 1">
            <div class="top_title">
            	<li class="text">工作经历</li>
            	<li class="button">
            		<router-link to="/work">
            		    <mt-button type="primary" size="small">新增</mt-button>
            		</router-link>
            	</li>
            </div>
            <div v-if="list.work_info">
            	<ul v-for="val in list.work_info">
            		<mt-field class="ve-input-mt" label="在职时间:" placeholder="" type="text">{{val.start_time}}-{{val.end_time}}</mt-field>
            	    <mt-field class="ve-input-mt" label="公司名称:" placeholder="" type="text" v-model="val.company"></mt-field>
            	    <mt-field class="ve-input-mt" label="单位性质:" placeholder="" type="text" v-model="val.company_attr"></mt-field>
            	    <mt-field class="ve-input-mt" label="工作岗位:" placeholder="" type="text" v-model="val.position"></mt-field>
            	    <mt-field label="主要业绩:" placeholder="" type="textarea" rows="4" v-model="val.desc"></mt-field>
            	    <div class="bottom">
    				    <router-link :to="'/eidwork/'+val.id">
    				        <mt-button type="primary" size="small">编辑</mt-button>
    				    </router-link>
    				    <mt-button type="primary" size="small" @click="work(val.id)">删除</mt-button>
    			    </div>
            	</ul>
            	
            	<div class="teshu" v-if="list.work_info.length == 0">暂未填写工作经历...</div>
            </div>
            </div>
            
            
            <div class="border">
            <div class="top_title">
            	<li class="text">项目经验</li>
            	<li class="button">
            		<router-link to="/experience">
            		    <mt-button type="primary" size="small">新增</mt-button>
            		</router-link>
            	</li>
            </div>
            
            <div v-if="list.project_info">
            	<ul v-for="val in list.project_info">
            		<mt-field class="ve-input-mt" label="公司名称:" placeholder="" type="text" v-model="val.project_company"></mt-field>
                    <mt-field class="ve-input-mt" label="项目名称:" placeholder="" type="text" v-model="val.project_name"></mt-field>
                    <mt-field class="ve-input-mt" label="项目地址:" placeholder="" type="text" v-model="val.site"></mt-field>
                    <mt-field class="ve-input-mt" label="项目类型:" placeholder="" type="text" v-model="val.project_cate"></mt-field>
                    <mt-field class="ve-input-mt" label="项目专业:" placeholder="" type="text" v-model="val.project_major"></mt-field>
                    <mt-field class="ve-input-mt" label="项目周期:" placeholder="" type="text" v-model="val.time">天</mt-field>
                    <mt-field label="项目描述:" placeholder="" type="textarea" rows="4" v-model="val.work_content"></mt-field>
                    <div class="bottom">
    				    <router-link :to="'/eidexperience/'+val.id">
    				        <mt-button type="primary" size="small">编辑</mt-button>
    				    </router-link>
    				    <mt-button type="primary" size="small" @click="detal(val.id)">删除</mt-button>
    			    </div>
            	</ul>
            	
                <div class="teshu" v-if="list.project_info.length == 0">暂未填写项目经验...</div>
            </div>
            </div>
            
            
            
            
            
            
            <div class="border" v-if="list.supervise_type == 2||list.supervise_type == 3">
            <div class="top_title">
            	<li class="text">团队成员</li>
            	<li class="button">
            		<router-link to="/players">
            		    <mt-button type="primary" size="small">新增</mt-button>
            		</router-link>
            	</li>
            </div>
            
            <div class="list" v-if="list.supervise_type == 2||list.supervise_type == 3">
            	<ul>
            		<li v-for="val in list.createteam">
            			<div class="top" align="center">
            				<img :src="val.member_img" />
            			</div>
            			<div class="member_info">
            				<span>{{val.member_name}}</span>
            			</div>
            			<div class="bottom">
            				<router-link :to="'/editplayers/'+val.member_id">
            				    <mt-button type="primary" size="small">编辑</mt-button>
            				</router-link>
            				<mt-button type="primary" size="small" @click="membedle(val.member_id)">删除</mt-button>
            			</div>
            		</li>
            	</ul>
            	<div class="teshu" v-if="list.createteam.length == 0">暂未添加团队成员...</div>
            </div>
            
            </div>
            
		</div>
		
		<div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">确认修改</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>
        
		<!--底部导航-->
        <index-tab page="3"></index-tab>
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import { Header } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import { Button } from 'mint-ui';
    import { Field } from 'mint-ui';
    import { Radio } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    import districtBase from "@/view/assembly/districtbase";
    import axios from 'axios'
	export default {
		name: 'resume',
		data() {
			return {
				myAdress: null,
                subumting: false,
                district: [],
                area_list: [],
				list: [],
				cate:[],
                major:[],
                projectarr: [],
                hotcate:[],
				softwarer:[],
				softwarerone:[]
			}
		},
		components: {
			indexTab,
			districtBase
        },
        watch: {
        	hotcate: {
        		handler(e){
                    let b = []
                    for (let i = 0; i < e.length; i++) {
                        const element = e[i];
                        if(element.action){
                            b.push(element.id)
                        }
                    }
                    this.cate= b
　　　　　　　　 },
　　　　　　　　 deep:true
        	},
            projectarr: {
                handler(e){
                    let n = []
                    for (let i = 0; i < e.length; i++) {
                        const element = e[i];
                        if(element.action){
                            n.push(element.id)
                        }
                    }
                    this.major= n
　　　　　　　　 },
　　　　　　　　 deep:true
            },
            softwarerone: {
            	handler(e){
                    let c = []
                    for (let i = 0; i < e.length; i++) {
                        const element = e[i];
                        if(element.action){
                            c.push(element.id)
                        }
                    }
                    this.softwarer= c
　　　　　　　　 },
　　　　　　　　 deep:true
            },
        },
        created () {
			this.getdata()
        },
		methods: {
			getArea (obj) {
                this.myAdress = obj.myAdress
                this.district = obj.district
            },
            refergo() {
                if (this.district.length == 0) {
                    Toast({
                        message: '请选择地址',
                        duration: 2000
                    });
                    return false
                }
            	if(this.cate.length == 0){
            		Toast({
                        message: '请选择擅长项目用途!',
                        duration: 2000
                    });
                    return false
            	}
            	if(this.major.length == 0){
            		Toast({
                        message: '请选择擅长项目专业!',
                        duration: 2000
                    });
                    return false
            	}
            	if(this.softwarer.length == 0){
            		Toast({
                        message: '请选择软件名称!',
                        duration: 2000
                    });
                    return false
            	}
            	if(!this.list.introduce){
            		Toast({
                        message: '请填写简历!',
                        duration: 2000
                    });
                    return false
            	}
            	axios.post(this.baseCont.PHP_API + '/user/informationedit', {
                    sex:this.list.sex,
            		i_state:this.list.work_state,
            		district:this.district,
            		introduce:this.list.introduce,
            		i_use:this.cate,
         		    i_project:this.major,
            		i_software:this.softwarer,
            		registered:this.list.engineer_info.registered,
            		representative:this.list.engineer_info.name,
            		company:this.list.engineer_info.company,
            		credit:this.list.engineer_info.credit,
            		registration:this.list.engineer_info.registration,
            		operatingstate:this.list.engineer_info.operatingstate,
            		typecompany:this.list.engineer_info.typecompany,
            		operation:this.list.engineer_info.introduce,
            		establishment:this.list.engineer_info.establishment,
            		dateestablishment:this.list.engineer_info.dateestablishment,
            		enterpriseaddress:this.list.engineer_info.enterpriseaddress,
            		mechanism:this.list.engineer_info.mechanism
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '修改成功',
                            duration: 1000
                        });
                        this.$router.push({path: '/resume'});
                        location.reload()
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
            getdata () {
            	axios.get(this.baseCont.PHP_API + '/user/engineerDetail', {}).then(response => {
                    if(response.data.code == 200){
						this.list = response.data.data
						this.hotcate = response.data.data.hotcate
                        this.projectarr = response.data.data.projectarr
                        this.softwarerone = response.data.data.softwarer
                        this.area_list.push(response.data.data.province_id)
                        this.area_list.push(response.data.data.city_id)
                        this.area_list.push(response.data.data.area_id)
                        
                        this.district.push(response.data.data.province_id)
                        this.district.push(response.data.data.city_id)
                        this.district.push(response.data.data.area_id)
                        this.myAdress = response.data.data.province_name+'-'+response.data.data.city_name+'-'+response.data.data.earea_name
					}else{
						if(response.data.code == 50002){
							Toast({
                                message: response.data.message,
                                duration: 2000
                            });
                            this.$router.push({path: '/index_self'});

						}
					}
				})
            },
            membedle(member_id){   
        		MessageBox.confirm('确定执行此操作?').then(action => {
                axios.get(this.baseCont.PHP_API + '/user/memberdel', {
                    params: {
                        id: member_id   
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
                        Toast({
                            message: '删除成功',
                            duration: 1000
                        });
                        
                        this.$router.push({path: '/resume'});
                        location.reload()
                    }else if(response.data.code == 10003){
                        if(response.data.data.length >0){
                            Toast({
                                message: response.data.data[0],
                                duration: 2000
                            });
                        }
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
				  })
                });
        	},
        	detal(id){
        		MessageBox.confirm('确定执行此操作?').then(action => {
                axios.get(this.baseCont.PHP_API + '/user/projectdel', {
                    params: {
                        id: id   
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
                        Toast({
                            message: response.data.message,
                            duration: 1000
                        });
                        this.$router.push({path: '/resume'});
                        location.reload()
                    }else if(response.data.code == 10003){
                        if(response.data.data.length >0){
                            Toast({
                                message: response.data.data[0],
                                duration: 2000
                            });
                        }
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
				  })
                });
        	},
        	educational(id){
        		MessageBox.confirm('确定执行此操作?').then(action => {
                axios.get(this.baseCont.PHP_API + '/user/eductionaldel', {
                    params: {
                        id: id   
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
                        Toast({
                            message: response.data.message,
                            duration: 1000
                        });
                        this.$router.push({path: '/resume'});
                        location.reload()
                    }else if(response.data.code == 10003){
                        if(response.data.data.length >0){
                            Toast({
                                message: response.data.data[0],
                                duration: 2000
                            });
                        }
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
				  })
                });
        	},
        	work(id){
        		MessageBox.confirm('确定执行此操作?').then(action => {
                axios.get(this.baseCont.PHP_API + '/user/workdel', {
                    params: {
                        id: id   
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
                        Toast({
                            message: response.data.message,
                            duration: 1000
                        });
                        this.$router.push({path: '/resume'});
                        location.reload()
                    }else if(response.data.code == 10003){
                        if(response.data.data.length >0){
                            Toast({
                                message: response.data.data[0],
                                duration: 2000
                            });
                        }
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
				  })
                });
        	}
		},
		mounted() {
		}
	}
</script>

<style scoped="scoped">
.box{
	padding-bottom: 2rem;
}
.list{
	width: 100%;
	height: auto;
}
.list .top{	
	vertical-align: middle;
	height: 130px;
}
.list .top > img{
	max-width: 130px;
	max-height: 130px;
	vertical-align: middle;
}
.list > ul > li{
	width: 49%;
	display: inline-block;
}
.member_info {
    z-index: 2;
    text-align: center;
}
.member_info > span{
	font-size: 14px;
    width: 100%;
}
.bottom {
    text-align: center;
}
.text{
	width: 50%;
	height: 1.5rem;
	line-height: 1.5rem;
	font-size: 0.5rem;
	color: #30b9fa;
}
.title{
	font-size: 0.5rem;
	padding-left: 0.3rem;
	color: #30b9fa;
}
.title > b{
	color: red;
	font-size: 0.3rem;
}
.top_title{
	width: 100%;
	height: 1.5rem;
	background: #f2f2f2;
	font-size: 0.5rem;
    padding-left: 0.3rem;
    color: #30b9fa;
    line-height: 1.5rem;
}
.top_title > li{
	display: inline-block;
}
.button{
	padding-left: 2.8rem;
}
.ve-bottom-tj{
	width: 70%;
	padding-top: 1rem;
	margin: 0 auto;
}
.teshu{
	text-align: center;
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
.score input{
    width: 1rem;
}
.border{
	width: 100%;
	padding-top: 1rem;
}
.dreen{
	font-size: 16px;
}

</style>