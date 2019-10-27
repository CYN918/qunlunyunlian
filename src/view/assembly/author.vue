<template>
    <div class="author">
        <div class="ve-no-author"><center>授权登录中...</center></div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import wechatAuth from '@/base/js/wechatAuth'//微信登录插件
    import { Toast } from 'mint-ui';
    import axios from 'axios'

    const qs= require('qs');
    Vue.use(wechatAuth, {appid: 'wxcb641edd5ad72fff'});

    export default {
	  name: 'author',
        data () {
            return {
            }
        },
	    components:{
        },
        created () {
            let url = window.location.href;
            let parseUrl = qs.parse(url.split('?')[1]);
            if (parseUrl.code && parseUrl.state) {
                window.sessionStorage.wxcode = parseUrl.code
                window.sessionStorage.wxstate = parseUrl.state
                
                let wxcode = window.sessionStorage.wxcode
                let wxstate = window.sessionStorage.wxstate
                let wxinfo = window.sessionStorage.wxinfo

                axios.post(this.baseCont.PHP_API + '/wxauth', {
                    code: wxcode,
                })
                .then(response => {
                    if(response.data.code == 200){
                        let wxsrt = JSON.stringify(response.data.data.wxinfo);
                        window.sessionStorage.wxinfo = wxsrt
                        window.sessionStorage.token = response.data.data.token

                        let url =  window.localStorage.getItem("beforeLoginUrl");
                        this.$router.push(url);
                        removeLocalStorage("beforeLoginUrl");
                    }else if(response.data.code == 50001){
                        let wxsrt = JSON.stringify(response.data.data.wxinfo);
                        window.sessionStorage.wxinfo = wxsrt
                        Toast({
                            message: '请绑定手机号！',
                            duration: 2000
                        });
                        this.$router.push('/wxauthbind');
                    }else if(response.data.code == 10003){
                        wechatAuth.redirect_uri = url;
                        window.location.href = wechatAuth.authUrl
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
            }else{
                wechatAuth.redirect_uri = url;
                window.location.href = wechatAuth.authUrl
            }
        },
		methods: {
        },
        mounted () {
        }
	}
</script>
<style scoped>
    .ve-no-author{
        padding:0.3rem 0rem;
    }
</style>