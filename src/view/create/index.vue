<template>
	<div class="list-block" id="fw-list">
		<div class="row col-center" >
			<li class="col-25" v-for="(value, index) in list">
				<div class="tip"  >
					<a @click="create(index)">
						<img :src="'//img.qlylian.com/images/create_'+index+'.png'" alt="" />
						{{ value }}
					</a>
				</div>
			</li>
			
		</div>
	</div>
</template>

<script>
    export default {
  	    name: 'index',
  	    props: {
  	    	list: {
                type: Object
          },
  	    },
  	    data(){
  		    return {
  			   
            }
        },
        
        mounted() {           
            
	    },
	    components: {

	    },
	    created () {
            
        },
        watch:{
            
        },
	    methods: {
		    create(index) {
		        this.$router.push({path: '/cost/' + index,params:{id:index}});
		        window.parent.scrollTo(0, 0);
  		   },
  		   
  	    }
    }
</script>

<style scoped="scoped">
	#fw-list {
    text-align: center;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0;
  }
  #fw-list .tip a {
  	text-decoration: none;
    display: inline-block;
    width: 2.8rem;
    /* height: 3rem; */
    text-align: center;
    font-size: 0.4rem;
    color: #666;
  }
  #fw-list .tip img {  
    width: 1.3rem;
    height: 1.3rem;
    margin: 0 0.7rem;
    
    margin-bottom: 0.2rem;
    display: flex;
    position: relative;
  }
  #fw-list .tip p span{
  	width: 1.6rem;
  	position: absolute;
  	top: 1.5rem;
  }
   .row .col-25 {
    width: 29%;
    min-height: 2.5rem;
    display: inline-block;
  }
</style>