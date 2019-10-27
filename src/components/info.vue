<template>
    <div class="changepass">
        <mt-header title="基本信息">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <div  v-if="userinfo">
        <mt-field class="ve-input-mt" label="用户名" placeholder="请输入用户名" type="text"  v-model="userinfo.name" ></mt-field>
        <mt-field class="ve-input-mt" label="真实姓名" placeholder="请输入真实姓名" type="text"  v-model="userinfo.realname"></mt-field>
        <mt-field class="ve-input-mt" label="手机号码" type="number" disabled="disabled"v-model="userinfo.mobile"></mt-field>
        <mt-field class="ve-input-mt" label="微信"  placeholder="微信" type="text"  v-model="userinfo.wechat"></mt-field>
        <mt-field class="ve-input-mt" label="QQ"  placeholder="QQ" type="text" v-model="userinfo.qq"></mt-field>
        <mt-field class="ve-input-mt" label="自我介绍"  placeholder="自我介绍" type="textarea" rows="4" v-model="userinfo.introduce"></mt-field>
       </div>
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
                subumting: false,
                userinfo: []
                
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            refergo () {
                if (!this.userinfo.name) {
                    Toast({
                        message: '请填写用户名',
                        duration: 2000
                    });
                    return false
                }
                if (!this.userinfo.realname) {
                    Toast({
                        message: '请填写真实姓名',
                        duration: 2000
                    });
                    return false
                }

                 if(!this.userinfo.qq){
                    Toast({
                        message: '请填写QQ',
                        duration: 2000
                    });
                    return false
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/infoUpdate', {
                    username: this.userinfo.name,
                    realname: this.userinfo.realname,
                    wechat: this.userinfo.wechat,
                    qq: this.userinfo.qq,
                    introduce: this.userinfo.introduce,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: response.data.message,
                            duration: 1000
                        });
                        this.$router.push({path: '/info'});
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
             getindex () {
				axios.get(this.baseCont.PHP_API + '/user/userinfo', {
                    params: {
                    }
                })
                .then(response => {
                    if(response.data.code == 200){
						this.userinfo = response.data.data.user_info
					}
				})
			},
        },
       
        mounted () {
        	this.getindex()
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