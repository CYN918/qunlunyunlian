<template>
	<div id="tab3" class="tab">
        <div class="tab-content" v-if="this.lists.user.supervise_type == 2">
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
                        <div class="none-desc">暂无团队成员</div>
		            </div>
		        </ul>
		
            
            </div>
            
        </div>
        <div class="tab-content" v-if="this.lists.user.supervise_type == 3">
            <div>
                <img :src="lists.user.engineer_business" alt="" />
            </div>
            <div class="img-title">营业执照</div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'select03',
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
    margin: 0 0.8rem 0.5rem 0.8rem;
    border-radius: 0.2rem;   
}
.img-div {
    position: relative;
    width: 48%;
    display: inline-grid;
    margin: 0.1rem;
    padding: 0.2rem;
    border: 0.05rem solid #e7e7e7;
    border-radius: 0.15rem;
    text-align: center;
}
.img-div img {
    width: 100%;
}
.img-div .img-title {
    font-size: 0.4rem;
}
.none-desc{
	text-align: center;
}
</style>