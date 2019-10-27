<template>
    <div class="engineer">
        <mt-header title="工程师入驻">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="ve-jion-box">
            <!-- 项目用途 -->
            <mt-checklist 
            align="right" 
            title="项目用途"
            v-model="purpose_list" 
            :options="indexjson.purpose_list">
            </mt-checklist> 
            <!-- 项目专业 -->
           <mt-checklist 
            align="right" 
            title="项目专业"
            v-model="major_list" 
            :options="indexjson.major_list">
            </mt-checklist>   
            <!-- 项目使用软件 -->
           <mt-checklist 
            align="right" 
            title="项目使用软件"
            v-model="soft_warer"
            :options="indexjson.soft_warer">
            </mt-checklist>       
            <!-- 地址选择 -->
            <districtBase @areaChange="getArea" :sendsrt="myAdress" boxsrt="常驻地址"></districtBase>
            <div class="ve-base-toptitle ve-base-lrbox">
                <span>是否能现场</span>
                <mt-switch style="float: right;display:block;" v-model="is_scene"></mt-switch>
            </div>
            <div class="ve-base-toptitle ve-base-lrbox">
                <span>是否团队</span>
                <mt-switch style="float: right;display:block;" v-model="is_team"></mt-switch>
            </div>

            <mt-radio
            title="入驻类型"
            v-model="status"
            :options="typelist">
            </mt-radio>

            <mt-field label="QQ号码" placeholder="请输入QQ号码" type="number" v-model="qq"></mt-field>
            <mt-field v-if="status == 1" label="个人介绍" placeholder="个人介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
            <mt-field v-if="status == 2" label="工作室介绍" placeholder="工作室介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
            <mt-field v-if="status == 3" label="企业介绍" placeholder="企业介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
            <div v-if="status == 3">
                <mt-field label="公司" placeholder="请输入公司名" v-model="company"></mt-field>
                <mt-field label="社会信用代码" placeholder="请输入社会信用代码" v-model="credit"></mt-field>
                <mt-field label="组织机构代码" placeholder="请输入组织机构代码" v-model="mechanism"></mt-field>
                <mt-field label="注册号" placeholder="请输入注册号" v-model="registration"></mt-field>
                <mt-field label="经营状态" placeholder="请输入经营状态" v-model="operatingstate"></mt-field>
                <mt-field label="公司类型" placeholder="请输入公司类型" v-model="typecompany"></mt-field>
                <mt-field label="成立日期" placeholder="请输入成立日期" type="date" v-model="dateestablishment"></mt-field>
                <mt-field label="法人代表" placeholder="请输入法人代表" v-model="representative"></mt-field>
                <mt-field label="营业期限" placeholder="请输入营业期限" v-model="establishment"></mt-field>
                <mt-field label="注册资金" placeholder="请输入注册资金" type="number" v-model="registered"></mt-field>
                <mt-field label="企业地址" placeholder="请输入企业地址" v-model="enterpriseaddress"></mt-field>
                <mt-field label="经营范围" placeholder="请输入经营范围" v-model="operation"></mt-field>
                <updateFile @fileChange="updateImg"  :sendsrt="tosrt" :max="1"></updateFile>
                <div class="ve-enterprise-img">
                    <img :src="imgsrc" alt="">
                </div>
            </div>

            <mt-field label="身份证号码" placeholder="请输入身份证号码" v-model="card"></mt-field>
            <mt-field label="真实姓名" placeholder="请输入真实姓名" v-model="name"></mt-field>

            <div class="ve-bottom-tj">
                <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                    <span v-if="!subumting">提交</span>
                    <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
                </mt-button>
            </div>
        </div>
        <!--底部导航-->
        <index-tab page="3"></index-tab>
    </div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
    import updateFile from "@/view/assembly/updatefile";
    import districtBase from "@/view/assembly/districtbase";
    import { Indicator } from 'mint-ui';
    import { checklist } from 'mint-ui'
    import { Switch } from 'mint-ui';
    import { Field } from 'mint-ui';
    import { Header } from 'mint-ui';
    import { Radio } from 'mint-ui';
    import { Button } from 'mint-ui';
    import { Spinner } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    
    export default {
	  name: 'engineer',
        data () {
            return {
                myAdress: null,
                district: [],
                selected: '',
                username: '',
                introduction: '',
                tosrt: '营业执照',
                boxsrt: '常驻地址',
                qq: '',
                company: '',
                credit: '',
                mechanism: '',
                registration: '',
                operatingstate: '',
                typecompany: '',
                dateestablishment: '',
                representative: '',
                establishment: '',
                registered: '',
                enterpriseaddress: '',
                operation: '',
                name: '',
                card: '',
                imgsrc: '//img.qlylian.com/images/m/business.png',
                status: '1',
                business: '',
                ifupladfile: false,
                subumting: false,
                is_scene: false,
                is_team: false,
                popupVisible: false,
                address: [],
                indexjson: {
                    'purpose_list': [],
                    'major_list': [],
                    'soft_warer': []
                },
                purpose_list:[],
                major_list:[],
                soft_warer:[],
                typelist:[
                    {
                        label: '个人',
                        value: '1',
                    },
                    {
                        label: '工作室',
                        value: '2'
                    },
                    {
                        label: '企业',
                        value: '3'
                    }
                ],
                slots: []
            }
        },
	    components:{
            indexTab,
            districtBase,
            updateFile
        },
		methods: {
            getArea (obj) {
                this.myAdress = obj.myAdress
                this.district = obj.district
            },
            getIfenginner () {
                let _this = this
                axios.post(this.baseCont.PHP_API + '/user/ifengineer', {
                })
                .then(response => {
                    if(response.data.code == 200){
		    	        _this.getIndexjson()
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                        _this.$router.push({path: '/index_self'});
                    }
                })
            },
            getIndexjson () {
                axios.get(this.baseCont.PHP_API + '/user/engineer', {
                    params: {
                    }
                })
                .then(response => {
                    this.indexjson = response.data.data
                })
            },
            updateImg (obj) {
                this.imgsrc = obj.base64
                this.ifupladfile = true
                Indicator.close();
            },
            refergo () {
                if (this.purpose_list.length == 0) {
                    Toast({
                        message: '请选择项目用途',
                        duration: 2000
                    });
                    return false
                }
                if (this.major_list.length == 0) {
                    Toast({
                        message: '请选择项目专业',
                        duration: 2000
                    });
                    return false
                }
                if (this.soft_warer.length == 0) {
                    Toast({
                        message: '请选择使用软件',
                        duration: 2000
                    });
                    return false
                }
                if (this.district.length == 0) {
                    Toast({
                        message: '请选择地址',
                        duration: 2000
                    });
                    return false
                }
                if(!this.qq){
                    Toast({
                        message: '请填写QQ号码',
                        duration: 2000
                    });
                    return false
                }
                if(!this.introduction){
                    Toast({
                        message: '请填写介绍内容',
                        duration: 2000
                    });
                    return false
                }
                if(this.status == 3){
                    if (!this.company) {
                        Toast({
                            message: '请填写公司名',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.credit) {
                        Toast({
                            message: '请填写社会信用代码',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.mechanism) {
                        Toast({
                            message: '请填写组织机构代码',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.registration) {
                        Toast({
                            message: '请填写注册号',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.operatingstate) {
                        Toast({
                            message: '请填写经营状态',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.typecompany) {
                        Toast({
                            message: '请填写公司类型',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.dateestablishment) {
                        Toast({
                            message: '请填写成立日期',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.representative) {
                        Toast({
                            message: '请填写法人代表',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.establishment) {
                        Toast({
                            message: '请填写营业期限',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.registered) {
                        Toast({
                            message: '请填写注册资金',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.enterpriseaddress) {
                        Toast({
                            message: '请填写企业地址',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.operation) {
                        Toast({
                            message: '请填写经营范围',
                            duration: 2000
                        });
                        return false
                    }
                    if (!this.ifupladfile) {
                        Toast({
                            message: '请上传营业执照',
                            duration: 2000
                        });
                        return false
                    }
                }
                if(!this.card){
                    Toast({
                        message: '请填写身份证卡号',
                        duration: 2000
                    });
                    return false
                }
                if(!this.name){
                    Toast({
                        message: '请填写真实姓名',
                        duration: 2000
                    });
                    return false
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/engineer', {
                    purpose_list: this.purpose_list,
                    major_list: this.major_list,
                    soft_warer: this.soft_warer,
                    district: this.district,
                    is_scene: this.is_scene,
                    is_team: this.is_team,
                    status: this.status,
                    qq: this.qq,
                    introduction: this.introduction,
                    company: this.company,
                    credit: this.credit,
                    mechanism: this.mechanism,
                    registration: this.registration,
                    operatingstate: this.operatingstate,
                    typecompany: this.typecompany,
                    dateestablishment: this.dateestablishment,
                    representative: this.representative,
                    establishment: this.establishment,
                    registered: this.registered,
                    enterpriseaddress: this.enterpriseaddress,
                    operation: this.operation,
                    name: this.name,
                    card: this.card,
				})
				.then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '入驻申请成功',
                            duration: 2000
                        });
		    	        this.$router.push({path: '/index_self'});
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
        mounted () {
            this.getIfenginner()
        }
	}
</script>
<style scoped>
    .engineer{
        padding-bottom: 2rem;
    }
    .ve-jion-box .ve-base-toptitle{
        padding: 0.3rem;
        border-top: 0.01rem solid #ccc;
    }
    .ve-jion-box .ve-base-lrbox{
        height: 0.8rem;
        line-height: 0.8rem;
    }
    .ve-jion-box .ve-bottom-tj{
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
    .ve-enterprise-img{
        display: flex;
        justify-content: center;
        align-items: Center;
        margin-bottom: .8rem;
    }
    .ve-enterprise-img>img{
        height: 5rem;
    }
</style>
