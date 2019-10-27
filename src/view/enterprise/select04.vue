<template>
	<div id="tab4" class="tab">
        <div class="tab-content">
        <ul>
			<li class="item-content" v-for="val in lists.team" v-if="lists.team.length != 0">
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
							{{val.created_at}}
						</li>
					</div>
				</div>
			</li>
			<div v-if="this.lists.team.length == 0">
			    <div class="none-div">
                    <img src="../../../static/images/renyuan.png" alt="" />
                </div>
                <div class="none-desc">暂未添加此方面信息</div>
		    </div>
		</ul>
		
            
        </div>
    </div>
</template>

<script>
	export default {
		name: 'select04',
		data() {
			return {
				
			}
		},
		props: {
		    lists:{
			    type: Object
		    },
	    },
		created() {
			
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
.tab-content {
    background: #ffffff;
    padding: 0.5rem;
    margin: 0 0.8rem 0.5rem 0.8rem;
    border-radius: 0.2rem;
    
}
.none-div {
    text-align: center;
}
.none-desc {
    font-size: 0.4rem;
    color: #999999;
    text-align: center;
    margin-top: 1rem;
}
</style>