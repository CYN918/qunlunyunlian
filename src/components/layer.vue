<template>
    <button @click="test">点击</button>
    
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		name: 'layer',
		data() {
			return {
				list: []
			}
		},
		mounted(){
		    
	    },
		methods: {
			test(){
				MessageBox.prompt('请输入姓名').then(({ value, action }) => {
                    
                });
			}
		},
		components: {
			
		}
	}
</script>

<style scoped>
   
</style>