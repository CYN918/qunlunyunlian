<template>
	<div class="box">
		<mt-header title="找回密码">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="mb-login-logobox">
            <div class="mb-logobox-img">
                <img src="//img.qlylian.com/cyn/images/new_logo_o.png" alt="群伦集团" title="群伦集团"/>
            </div>
        </div>
        <mt-field class="ve-input-mt" :attr="{ maxlength: 11 }" label="手机号" type="number" style="margin-top:0.5rem;" placeholder="请输入手机号" v-model="phone"></mt-field>
        <mt-field class="ve-input-mt" :attr="{ maxlength: 4 }" label="验证码" type="number" style="margin-top:0.5rem;" placeholder="请输入用验证码" v-model="code">
            <mt-button v-if="phoneCodeStatus" size="small" type="default" class="ve-send-code"  @click="postphonecode">发送验证码</mt-button>
            <mt-button v-else-if="!phoneCodeStatus" size="small" type="default" class="ve-send-code" >倒计时{{ count }}S</mt-button>
        </mt-field>
	
	    <mt-field class="ve-input-mt" label="新密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field class="ve-input-mt" label="确认密码" placeholder="请输入密码" type="password" v-model="pass"></mt-field>
        
        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">确认</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>
	     
		<index-tab page="3"></index-tab>
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
    import md5 from 'js-md5';
    import { Spinner } from 'mint-ui';
    import { Field } from 'mint-ui';
    import { Header } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    export default {
	  name: 'password',
        data () {
            return {
                phone: '',
                code: '',
                encrypt: '',
                subumting: false,
                phoneCodeStatus: true,
                timer: null,
                count: 0,
                password: '',
                pass: ''
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
			refergo () {
		        if (this.phone.length != 11) {
                    Toast({
                        message: '请填写正确手机号码',
                        duration: 2000
                    });
                    return false
                }
				 if (this.code.length != 4) {
                    Toast({
                        message: '请填写4位验证码',
                        duration: 2000
                    });
                    return false
                }
			    if (this.password.length < 6 || this.password.length > 16) {
                    Toast({
                        message: '请填写6到16位的密码',
                        duration: 2000
                    });
                    return false
                }
				  if (this.pass != this.password) {
                    Toast({
                        message: '请确认两个相同密码',
                        duration: 2000
                    });
                    return false
                }
				 
				 
			    this.subumting = true
                axios.post(this.baseCont.PHP_API + '/pwdResetConfirm', {
                    phone: this.phone,
                    code: this.code,
                    password: this.password,
                    pass: this.pass,
                })
				.then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: response.data.message,
                            duration: 1000
                        });
                        this.$router.push({path: '/login'});
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
            getInfo () {
                let token = window.sessionStorage.token
                if (token) {
                    if(this.$route.query.redirect){
                        this.$router.push({path: this.$route.query.redirect});
                    }else{
                        this.$router.push({path: '/index_self'});
                    }
                }
            },
            postphonecode () {
                if(this.phone.length != 11){
                    Toast({
                        message: '请填写正确手机号码',
                        duration: 2000
                    });
                    return false
                }
                this.encrypt = md5(this.phone+'QLYlian');
                axios.post(this.baseCont.PHP_API + '/passwordsms', {
                    phone: this.phone,
                    code: this.encrypt,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        let _this = this
                        const TIME_COUNT = 60;//倒计时60s
                        this.count = TIME_COUNT;//赋值，以便判断时间
                        this.phoneCodeStatus = false
                        this.timer = setInterval(function() {
                            if (_this.count > 0 && _this.count <= TIME_COUNT) {
                                _this.count--;
                            } else {
                                _this.phoneCodeStatus = true
                                clearInterval(_this.timer);
                                _this.timer = null;
                            }
                        }, 1000)       
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
            this.getInfo()
        }
	}
</script>

<style scoped="scoped">
	.mb-logobox-img{
		text-align: center;
		padding-top: 0.5rem;
	}
    .ve-bottom-tj{
        margin-top: 1.2rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
</style>