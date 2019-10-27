<template>
	<div class="swiper-container" id="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../static/images/banner_01.jpg"/></div>
          <div class="swiper-slide"><img src="../../../static/images/banner_02.jpg"/></div>
          <div class="swiper-slide"><img src="../../../static/images/banner_03.jpg"/></div>
          <div class="swiper-slide"><img src="../../../static/images/banner_04.jpg"/></div>
        </div>    
    </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css'
  export default {
  	name: 'index',
  	data(){
  		return {
  			
  		}
  	},
  	mounted(){
  		var my = document.getElementsByClassName('#swiperOption');
      	var my = new Swiper('#swiperOption', {
      		autoplay: 4000,
      	});

  	},
  	components:{
  		
  	},
  	methods:{
  		
  	}
  }
</script>

<style scoped="scoped">
	.swiper-slide > img{
		width: 100%;
	}
</style>