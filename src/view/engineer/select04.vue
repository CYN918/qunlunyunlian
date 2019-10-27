<template>
	<div id="online_projects" class="tab active infinite-tab infinite-scroll-bottom">
		<ul>
			<li class="item-content" v-for="val in datas.team" v-if="datas.team.length != 0">
				<div class="item-media">
					<a>
						
						<img style="width: 2rem; height:2rem; border-radius: 0.2rem;" :src="val.img" alt="" />
					</a>
				</div>
				<div class="item-inner">
					<div class="item-title-row">
						<div class="item-title">
							<a @click="test(val.id)" style="font-size: 0.5rem;color: #333;"> {{val.name}}</a>
						</div>
						<div class="item-title">
							<a style="font-size: 0.5rem;color: #333;"> {{val.members}}</a>
						</div>
					</div>
					<div class="instr">
						<li style="font-size: 0.3rem;color: #666;">
							{{val.describe}}
						</li>
					</div>
				</div>
			</li>
			<div class="nil-blank" v-if="this.datas.team.length == 0">
				 暂时未创建团队
			</div>

		</ul>
		
	</div>

</template>

<script>	
	export default {
	name: 'select04',
	  data () {
	    return {
	    	
	    }
	},
	props: {
		datas:{
			type: Object
		},
	},
	components:{
		
	},
	created(){
		/*放这里也可以,这里是页面渲染之前就请求this.test = 后台返回的数据;*/
	},
	mounted() {
		
        
    },
	methods: {
	  
	  }
	}
</script>

<style scoped="scoped">
#online_projects p{
	font-size: 0.4rem;
	text-align: center;
	padding-top: 0.5rem;
}
.item-media{
	float: left;
	padding: 0.5rem 0 0 0.5rem;
}
.item-inner{
	float: left;
	padding: 0.5rem 0 0 0.5rem;
}
.nil-blank{
	text-align: center;
}
</style>