<template>
	<div class="box">
		<mt-header title="我的优惠券">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <div class="title">此活动暂未开始，敬请期待，谢谢!请移步<router-link to="/">首页</router-link></div>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import axios from 'axios'
	export default {
		name: 'coupons',
		data() {
			return {
				
			}
		},
		components: {
			
		},
		methods: {
			
		},
		mounted () {
			
		}
	}
</script>

<style scoped="scoped">
	.title{
		font-size: 0.4rem;
		text-align: center;
		padding-top: 2rem;
	}
</style>