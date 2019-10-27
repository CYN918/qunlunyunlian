<template>
    <div class="box">
        <mt-header title="新增教育经历">
            <router-link to="/resume" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <mt-field class="ve-input-mt" label="学校名称:" placeholder="" type="text"  v-model="name" ></mt-field>
        
        <mt-field class="ve-input-mt" label="所学专业:" placeholder="" type="text"  v-model="professional" ></mt-field>
        
     
        
        <div id="select_service_type" style="padding: 0 15px;">
	        <h3 class="ui-title">就读学历:</span></h3>
	        <div class="options clearfix">
		        <div class="create_input" v-for="val in formallist">
                    <input type="radio" :value="val.label" name="box" :id="'box' + val.value" v-model="formal">
                    <label :for="'box' + val.value">{{val.label}}</label>
                </div>
	        </div>        	
        </div>
        
        
        <div style="margin-left:0.3rem;padding: 0.3rem 0rem 0.3rem 0rem;">
            <span style="float:left;font-size: 0.5rem;"> 毕业年份:</span>
            <span>
                <select name="education_time" id="education_time" v-model="date">
                    <option value="" selected>请选择</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="其他">其他</option>
                </select>
            </span>
        </div>
        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">确认新增</span>
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
		name: 'educational',
		data () {
			return {
				name:'',
				professional:'',
				formal:'',
				formallist:[
				    {
				    	label: '本科',
				    	value: '1'
				    },
				    {
				    	label: '专科',
				    	value: '2'
				    },
				    {
				    	label: '研究生',
				    	value: '3'
				    },
				    {
				    	label: '博士生',
				    	value: '4'
				    },
				    {
				    	label: '高中',
				    	value: '5'
				    },
				    {
				    	label: '其他',
				    	value: '6'
				    }
				
				],
				date:'',
				subumting: false
			}
		},
		components: {
			
		},
		methods: {
			refergo(){
				if(!this.name){
					Toast({
                        message: '请填写学校名称!',
                        duration: 2000
                    });
                    return false
				}
				if(!this.professional){
					Toast({
                        message: '请填写所学专业!',
                        duration: 2000
                    });
                    return false
				}
				if(!this.formal){
					Toast({
                        message: '请选择就读学历!',
                        duration: 2000
                    });
                    return false
				}
				if(!this.date){
					Toast({
                        message: '请选择毕业年份!',
                        duration: 2000
                    });
                    return false
				}
				axios.post(this.baseCont.PHP_API + '/user/eductionaladd', {
                    school_name:this.name,
            		education:this.formal,
            		major:this.professional,
            		graduation_time:this.date      		
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '新增教育经历成功',
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
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped="scoped">
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
    .options .create_input input {
        width: 0.5rem;
        height: 0.5rem;
    }
</style>