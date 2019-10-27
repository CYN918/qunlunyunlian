<template>
    <div class="content-block" style="text-align: center;padding:0;margin: 1.4rem 0;">
        <h1 style="font-size:0.8rem;">欢迎加入算群伦云联！</h1>
        <p style="font-size:0.4rem;text-align: center;padding: 0.6rem 0;">利用空闲时间贡献专业能力，轻松获取收入。</p>
        <p class="join-member">
            <a class="external" @click="join_engineer">
            	<img style="width: 95%;" src="../../../static/images/join.jpg" alt="" />
            </a>
        </p>
        <p class="join-com">
            <a class="external" @click="enterprise_vip">
            	<img style="width: 95%;" src="../../../static/images/join_enterprise.jpg" alt="" />
            </a>
        </p>
        <p style="width:95%;text-align: right;">
        	<a @click="dele" class="close-popup">
                <img style="width: 1rem;height:1rem;" src="../../../static/images/delete.png" alt="" />
            </a>
        </p>
    </div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default {
		name: 'welcome',
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		components: {
			
		},
		methods: {
			join_engineer(){
				axios.post(this.baseCont.PHP_API + '/user/ifengineer', {
                })
                .then(response => {
                    if(response.data.code == 200){
		    	        this.$router.push({path: '/engineer'});
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
                })
			},
			enterprise_vip(){
				this.$router.push({path: '/enterprise_vip'})
			},
			dele(){
				this.$router.push({path: '/'})
			}			
		}
	}
</script>

<style scoped>

</style>