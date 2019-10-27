<template>
    <div data-role="page" id="t-page">
    	<mt-header title="项目发布">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回首页</mt-button>
            </router-link>
        </mt-header>
        <div id="select_service_type">
        	<p>提交成功，等待管理员审核!</p>
        	<p>工作日1小时内审核完毕，周末2小时内完毕。紧急项目可联系客户经理加急处理，联系电话：18312586580。</p>
        </div>
        
        <div class="ve-bottom-tj"> 
            <mt-button  size="large" :disabled="subumting"  @click="nextgo" :plain="true" type="primary" >
                <span v-if="!subumting">查看我发布的项目</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>
        
    </div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Toast } from 'mint-ui';
	export default {
		name: 'cost1',
		data(){ 
            return{
            	subumting: false
            } 
        }, 
		mounted() {
			
		},
		components: {
			
		},
		created() {
			
		},
		methods: {
			nextgo(){
				this.$router.push({path: '/mytasklist'})
			}
            
		}
	}
</script>

<style scoped>
#select_service_type{
	padding: 5rem 0 0 0.5rem;
}
#select_service_type > p:nth-child(1){
	font-size: 0.6rem;
	padding-left: 0.9rem;
}
#select_service_type > p:nth-child(2){
	padding-top: 0.5rem;
}
.ve-bottom-tj{
	width: 80%;
	margin: 0 auto;
	margin-top: 1rem;
}
</style>