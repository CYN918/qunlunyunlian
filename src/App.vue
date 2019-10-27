<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	*{		
		margin: 0;
		padding: 0;
	}
	.ub{
		display: -webkit-flex;
		display: -webkit-box;
		display: -moz-flex;
		display: -moz-box;
		display: -ms-flex;
		display: -ms-box;
		display: -o-flex;
		display: -o-box;
		display: flex;
	}
	.ub_f1{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		-ms-box-flex: 1;
		-o-flex: 1;
		-o-box-flex: 1;
		box-flex: 1;
		flex: 1;
	}
	ul,li{
		list-style: none outside none;
	}
	/* Mozilla Firefox 4 to 18 */
	:-moz-placeholder {
	  color: #B2B2B2;
	  opacity:1; 
	}
	/* Mozilla Firefox 19+ */
	::-moz-placeholder {
	  color: #ccc;
	  opacity:1;
	}
	input:-ms-input-placeholder{
	  color: #ccc;
	  opacity:1;
	}
	input:-o-input-placeholder{
	  color: #ccc;
	  opacity:1;
	}
	input::-webkit-input-placeholder{
	  color: #ccc;
	  opacity:1;
	}
	textarea:-ms-input-placeholder{
	  color: #ccc;
	  opacity:1;
	}
	textarea:-o-input-placeholder{
	  color: #ccc;
	  opacity:1;
	}
	textarea::-webkit-input-placeholder{
	  color: #ccc;
	  opacity:1;
	}
</style>
