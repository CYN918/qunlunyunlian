<template>
<div class="list-block" id="topc-list">
	<div>
		<div class="row col-center" align="center">
			<img src="../../../static/images/liuchengtu.jpg" />
		</div>
	</div>
</div>
</template>

<script>
export default {
  	name: 'index',
  	data(){
  		return {
  			
  		}
  	},
  	mounted(){

  	},
  	components:{
  		
  	},
  	methods:{
  		
  	}
 }
</script>

<style scoped="scoped">
   #topc-list {
    position: relative;
    z-index: 100;   
    margin: -7% 5% 0 5%;
   
   }
   .col-center > img{
   	width: 100%;
        vertical-align: middle;
   } 
  .row {
    overflow: hidden;
    vertical-align: middle;
  }
  
    #topc-list a {
    width: 2.8rem;
    height: 3.4rem;
    color: #666;
    font-size: 0.4rem;
    text-decoration: none;
  }
  #topc-list .tip img {
    width: 1.5rem;
    height: 1.5rem;
  }

</style>