<template>
    <div class="taskaccept">
        <mt-header title="项目验收">
            <router-link to="/mytasklist" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <div class="ve-accept-box">
            <mt-radio
                title="验收确认"
                align="right"
                v-model="status"
                :options="typelist">
            </mt-radio>

            <mt-field v-if="status == 1" class="ve-notes-box" placeholder="验收说明" type="textarea" rows="4" v-model="desc"></mt-field>
            <mt-field v-else-if="status == 2" class="ve-notes-box" placeholder="驳回理由" type="textarea" rows="4" v-model="desc"></mt-field>

            <div v-if="status == 1">
                <mt-cell v-if="info.p_status != 1" title="实际总造价" :value="info.examine_cost+'元'"></mt-cell>
                <mt-cell title="项目金额" :value="info.real_cash+'元'"></mt-cell>
                <mt-cell title="付款金额" :value="info.fk_cash+'元'"></mt-cell>
                <mt-cell title="平台审核意见:" :label="info.reason_one_admin"></mt-cell>
                <mt-cell title="群伦云联温馨提示:"></mt-cell>
                <div class="ve-tips-label" >
                    <label>1、请您确认成果文件已符合要求</label><br />
                    <label>2、雇主付款成功之后不可申请工程师退款</label><br />
                    <label>3、雇主如对工程师的成果文件有不满意的地方，可在质保期内提出，由工程师负责修改。为了保证交易安全，点击获取验证码后请查收您的手机短信，并输入验证码以完成支付。</label><br />
                </div> 
            </div>

            <div class="ve-bottom-tj">
                <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                    <span v-if="!subumting">提交</span>
                    <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
                </mt-button>
                <mt-button  size="large"  @click="refercancel" type="primary">取消</mt-button>
            </div>
        </div>

        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
	import { Toast } from 'mint-ui';

    import axios from 'axios'
    
    export default {
	  name: 'taskaccept',
        data () {
            return {
                subumting: false,
                desc: '',
                status: '1',
                info:{
                    'real_cash': 0.00,
                    'examine_cost': 0.00,
                    'p_status': null,
                    'fk_cash': 0.00,
                    'reason_one_admin': '',
                },
                typelist:[
                    {
                        label: '通过',
                        value: '1',
                    },
                    {
                        label: '驳回',
                        value: '2'
                    }
                ],
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            refergo () {
                if(!this.desc){
                    Toast({
                        message: '请填写验收信息',
                        duration: 2000
                    });
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/taskaccept', {
                    status: this.status,
                    desc: this.desc,
                    id: this.$route.params.id
				})
				.then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '修改成功',
                            duration: 2000
                        });
		    	        this.$router.push({path: '/mytasklist'});
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
				.catch(function (error) {
					console.log(error)
				})
            },
            getAccept () {
                axios.get(this.baseCont.PHP_API + '/user/taskaccept', {
                    params: {
                        id: this.$route.params.id
                    }
                })
                .then(response => {
                    if (response.data.code === 200) {
                        this.info = response.data.data
                    }else if(response.data.code === 50002){
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
		    	        this.$router.push({path: '/mytasklist'});
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
                })
            },
            refercancel () {
		    	this.$router.push({path: '/mytasklist'});
            }
        },
        mounted () {
            this.getAccept()
        }
	}
</script>
<style scoped>
    .ve-accept-box{
        padding:0.2rem 0.3rem;
    }
    .ve-tips-label{
        padding:0rem 0.4rem;
    }
    .ve-bottom-tj{
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
    .ve-bottom-tj>button{
        margin:0.5rem 0rem;
    }
</style>