<template>
    <div class="login">
        <mt-header title="群伦登录">
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
        <mt-field class="ve-input-mt" label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <!-- <mt-field class="ve-input-mt" :attr="{ maxlength: 4 }" label="验证码" type="number" style="margin-top:0.5rem;" placeholder="请输入用验证码" v-model="code"></mt-field> -->
        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">登录</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>
        <div class="ve-bottom-tj ve-bottom-dx">
            <mt-button  size="large" @click="smslogingo" :plain="false" type="primary">
                <span>短信登录</span>
            </mt-button>
        </div>
        <div class="quick-nav clearfix">
            <a class="J_ping quickReg" style="display:block;">
                <router-link to="/register" slot="left">
                    <span class="txt-quickReg">手机快速注册</span>
                </router-link>
            </a>
            <a class="J_ping planBLogin" style="display:block;">
                <router-link to="/password" slot="right">
                    <span class="txt-planBLogin">忘记密码</span>
                </router-link>
            </a>
	    </div>

        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
    import { Spinner } from 'mint-ui';
    import { Field } from 'mint-ui';
    import { Header } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'

    export default {
	  name: 'login',
        data () {
            return {
                phone: '',
                password: '',
                code: '',
                subumting: false,
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
                if (this.password.length < 6 || this.password.length > 16) {
                    Toast({
                        message: '请填写6到16位的密码',
                        duration: 2000
                    });
                    return false
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/login', {
                    phone: this.phone,
                    password: this.password,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        window.sessionStorage.token = response.data.data.token
                        Toast({
                            message: response.data.message,
                            duration: 1000
                        });
                        if(this.$route.query.redirect){
		    	            this.$router.push({path: this.$route.query.redirect});
                        }else{
                            this.$router.push({path: '/index_self'});
                        }
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
            smslogingo () {
                if(this.$route.query.redirect){
                    let _this = this
                    this.$router.replace({
                        path: '/smslogin',
                        query: {redirect: _this.$route.query.redirect}
                    })
                }else{
                    this.$router.push({path: '/smslogin'});
                }
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
            }
        },
        mounted () {
            this.getInfo()
        }
	}
</script>
<style scoped>
    .mb-login-logobox .mb-logobox-img{
        text-align:center;
        margin-top:20px;
    }
    .ve-bottom-tj{
        margin-top: 1.2rem;
        margin-bottom: 0.2rem;
        padding:0rem 0.4rem;
    }
    .ve-bottom-dx{
        margin-top: 0.5rem;
    }
    .ve-bottom-dx a{
        color:#fff;
    }
    .ve-input-mt{
    }
    .quick-nav {
        width:100%;
        zoom: 1;
        display: inline-block;
        margin-top: .6rem;
        text-align: center;
    }
    .quick-nav a:first-child {
        float: left;
    }
    .quick-nav a:last-child {
        float: right;
    }
    .quick-nav a {
        font-size: 0.4rem;
        color: #999;
        line-height: .22rem;
        text-decoration: none;
        padding: 0rem .3rem;
    }

</style>