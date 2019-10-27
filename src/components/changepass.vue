<template>
    <div class="changepass">
        <mt-header title="修改密码">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <mt-field class="ve-input-mt" label="当前密码" placeholder="请输入密码" type="password" v-model="oldpassword"></mt-field>
        <mt-field class="ve-input-mt" label="新密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field class="ve-input-mt" label="确认密码" placeholder="请输入密码" type="password" v-model="pass"></mt-field>

        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">提交</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>

        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    
    export default {
	  name: 'changepass',
        data () {
            return {
                oldpassword: '',
                password: '',
                pass: '',
                subumting: false,
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            refergo () {
                if (!this.oldpassword) {
                    Toast({
                        message: '请填写当前密码',
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
                if(this.pass != this.password){
                    Toast({
                        message: '请确认两个相同密码',
                        duration: 2000
                    });
                    return false
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/changepass', {
                    oldpassword: this.oldpassword,
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
                        this.$router.push({path: '/index_self'});
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
            }
        },
        mounted () {
        }
	}
</script>
<style scoped>
    .changepass{
        padding-bottom:2rem;
    }
    .ve-bottom-tj{
        margin-top: 1.2rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
</style>