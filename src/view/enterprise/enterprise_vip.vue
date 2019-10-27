<template>
	<div class="content" style="background: #ffffff;">
		<mt-header title="企业入驻">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div>
            <img width="100%" src="../../../static/images/vip.jpg" alt="" />
        </div>
        <div style="background: #ffffff;padding: 1rem;">您好，企业/团队认证目前仅支持在电脑端申请，请在电脑浏览器中登录http://test.qlylian.com  网站- 在“企业/团队”栏目中申请，谢谢！</div>
    </div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import axios from 'axios';
	export default {
		name: 'enterprise_vip',
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		components: {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	
</style>