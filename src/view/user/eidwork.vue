<template>
    <div class="box">
        <mt-header title="编辑工作经历">
            <router-link to="/resume" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <mt-field class="ve-input-mt" label="公司名称:" placeholder="" type="text"  v-model="list.company" ></mt-field>
        <div id="select_service_type" style="padding: 0 15px;">
	        <h3 class="ui-title">单位性质:</span></h3>
	        <div class="options clearfix">
		        <div class="create_input" v-for="val in projectlist">
                    <input type="radio" :value="val.label" name="tes" :id="'tes' + val.value" v-model="list.company_attr">
                    <label :for="'tes' + val.value">{{val.label}}</label>
                </div>
	        </div>        	
        </div>
        
        
        
        <div id="select_service_type" style="padding: 0 15px;">
	        <h3 class="ui-title">工作岗位:</span></h3>
	        <div class="options clearfix">
		        <div class="create_input" v-for="val in typelist">
                    <input type="radio" :value="val.label" name="box" :id="'box' + val.value" v-model="list.position">
                    <label :for="'box' + val.value">{{val.label}}</label>
                </div>
	        </div>        	
        </div>
        
        <div class="time ve-time-right" @click="startPicker">
            <label>在职开始时间:</label>
            <span>{{ startTimesrt }}</span>
        </div>
        <mt-datetime-picker
            ref="start_picker" 
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="start_sDate"
            :endDate="start_eDate"
            @confirm="startConfirm" 
            v-model="startTime">
        </mt-datetime-picker>

        <div class="time ve-time-right" @click="endPicker">
            <label>在职结束时间:</label>
            <span>{{ endTimesrt }}</span>
        </div>
        <mt-datetime-picker
            ref="end_picker" 
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="end_sDate"
            :endDate="end_eDate"
            @confirm="endConfirm" 
            v-model="endTime">
        </mt-datetime-picker>
        
        <mt-field label="主要业绩:" placeholder="" type="textarea" rows="4" v-model="list.desc"></mt-field>
        
        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">确认修改</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>
    
    </div>
</template>

<script>
	import { Header } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import { Button } from 'mint-ui';
    import { Field } from 'mint-ui';
    import { Radio } from 'mint-ui';
    import { DatetimePicker } from 'mint-ui';
    import axios from 'axios'
	export default {
		name: 'work',
		data() {
			return {
				name: '',
				project_site:'',
				projectlist:[
                    {
                    	label: '施工单位',
                    	value: '1',
                    },
                    {
                    	label: '招标代理审计公司监理',
                    	value: '2'
                    },
                    {
                    	label: '设计',
                    	value: '3'
                    },
                    {
                    	label: '咨询单位建设单位个人工作室',
                    	value: '4'
                    },
                    {
                    	label: '自由职业者',
                    	value: '5'
                    },
                    {
                    	label: '招标代理',
                    	value: '6'
                    },
                    {
                    	label: '其他',
                    	value: '7'
                    }
                ],
                project_type:'',
                typelist:[
                    {
                    	label: '商务经理(经营管理,成本管理)',
                    	value: '1',
                    },
                    {
                    	label: '造价师(造价员、预算员)',
                    	value: '2'
                    },
                    {
                    	label: '资料员',
                    	value: '3'
                    },
                    {
                    	label: '质检员',
                    	value: '4'
                    },
                    {
                    	label: '测量员',
                    	value: '5'
                    },
                    {
                    	label: '规划员(项目前期)',
                    	value: '6'
                    },
                    {
                    	label: '设计师',
                    	value: '7'
                    },
                    {
                    	label: '招标采购员',
                    	value: '8'
                    },
                    {
                    	label: '招标工程师',
                    	value: '9'
                    },
                    {
                    	label: '审计工程师(含财务审计)',
                    	value: '10'
                    },
                    {
                    	label: '项目总监',
                    	value: '11',
                    },
                    {
                    	label: '监理工程师',
                    	value: '12'
                    },
                    {
                    	label: '结构设计',
                    	value: '13'
                    },
                    {
                    	label: '建筑设计',
                    	value: '14'
                    },
                    {
                    	label: '方案设计(渲染)',
                    	value: '15'
                    },
                    {
                    	label: '水暖电设计',
                    	value: '16'
                    },
                    {
                    	label: '专业设计(精装修、外幕墙、消防、人防等)',
                    	value: '17'
                    },
                    {
                    	label: 'BIM工程师',
                    	value: '18'
                    },
                    {
                    	label: '公司负责人',
                    	value: '19'
                    },
                    {
                    	label: '其他',
                    	value: '20'
                    }
                ],
                startTimesrt: '',
                startTime:'',
                endTimesrt: '',
                endTime: '',
                work_content:'',
                start_sDate: new Date(),
                start_eDate: new Date(),
                end_sDate: new Date(),
                end_eDate: new Date(),
                subumting: false,
                list:[]
			}
		},
		watch: {
            startTime: function(e){
                this.startTimesrt = this.fmtDate(e)
                this.end_sDate = e
            },
            endTime: function(e){
                this.endTimesrt = this.fmtDate(e)
                this.start_eDate = e
            },
        },
		components: {
			
		},
		methods: {
            fmtDate(obj){
                var date =  new Date(obj);
                var y = 1900+date.getYear();
                var m = "0"+(date.getMonth()+1);
                var d = "0"+date.getDate();
                return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
            },
            startPicker () {
				this.$refs.start_picker.open();
            },
            startConfirm (e) {
                this.startTimesrt = this.fmtDate(e)
            },
            endPicker () {
				this.$refs.end_picker.open();
            },
            endConfirm (e) {
                this.endTimesrt = this.fmtDate(e)
            },
			refergo() {
				if(!this.list.company){
					Toast({
                        message: '请填写公司名称!',
                        duration: 2000
                    });
                    return false
				}
				if(!this.list.company_attr){
					Toast({
                        message: '请选择单位性质!',
                        duration: 2000
                    });
                    return false
				}
				if(!this.list.position){
					Toast({
                        message: '请选择工作岗位!',
                        duration: 2000
                    });
                    return false
				}
				if(!this.startTime){
					Toast({
                        message: '请选择在职开始时间!',
                        duration: 2000
                    });
                    return false
				}
				if(!this.endTime){
					Toast({
                        message: '请选择在职结束时间!',
                        duration: 2000
                    });
                    return false
				}
				if(!this.list.desc){
					Toast({
                        message: '请填写业绩描述!',
                        duration: 2000
                    });
                    return false
				}
                this.startTime = this.fmtDate(this.startTime)
                this.endTime   = this.fmtDate(this.endTime)

				axios.post(this.baseCont.PHP_API + '/user/workedit', {
					id:this.$route.params.id,
					company:this.list.company,
					company_attr:this.list.company_attr,
					start_time:this.startTime,
					end_time:this.endTime,
					position:this.list.position,
					desc:this.list.desc
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '编辑成功',
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
				axios.get(this.baseCont.PHP_API + '/user/workeditlist', {
                    params: {
                    	id: this.$route.params.id,
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
                        this.list = response.data.data.engineer_work
                        this.startTimesrt = response.data.data.engineer_work.start_time
                        this.endTimesrt = response.data.data.engineer_work.end_time

                        this.startTime = new Date(response.data.data.engineer_work.start_time)
                        this.endTime = new Date(response.data.data.engineer_work.end_time)
					}
				})
			},
		},
		mounted() {
			this.getindex();
            let gaga = new Date(),
                _y = gaga.getFullYear(),
                _m = gaga.getMonth(),
                _d = gaga.getDate();
            let new_gaga = new Date(_y+10,_m,_d);
            let end_gaga = new Date(_y+20,_m,_d);
            this.start_eDate = new_gaga
            this.end_eDate = end_gaga
		}
	}
</script>

<style scoped="scoped">
	.box{
		padding-bottom: 2rem;
	}
	select {
        padding: 3px 4px;
        height: 30px;
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
    .create_input > label{
    	font-size: 0.45rem;
    }
    .options .create_input input {
        width: 0.4rem;
        height: 0.4rem;
    }
    .time{
	    margin-top: 0.5rem;
    	
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
    .ve-time-right {
        padding-right: 0.6rem;    
    }
    .ve-time-right span{
        float: right;
        display: inline-block;
    }
</style>