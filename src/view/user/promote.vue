<template>
    <div class="changepass">
        <mt-header title="我的推广">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="box">
        	<div class="box-title">我的推广二维码</div>
        	<div class="box-name">阔达的白猫</div>
        	<div class="box-images">
        		
        	</div>
        </div>
        

        <index-tab page="3"></index-tab>
    </div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
    import { Header } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
	export default {
		name: 'promote',
		data() {
			return {
				
			}
		},
		components: {
			indexTab
		},
		methods: {
			
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>