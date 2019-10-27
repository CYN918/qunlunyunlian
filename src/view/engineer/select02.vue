<template>
	<div id="tab2" class="tab" style="background: #ffffff;">
	<div class="sk-buttons-row"  v-model="tabView">
		<li v-for="(tab ,index) in tabs" :class="{cur:iscur==index}" @click="iscur=index,tabChange('online' + (index + 1))">{{tab.name}}</li>
	</div>
	<div class="tabs">
		<keep-alive> 
            <component v-bind:is="tabView" v-bind:list="datas"></component>
        </keep-alive> 
	</div>
</div>
</template>

<script>
	import online1 from '@/view/engineer/online01';
    import online2 from '@/view/engineer/online02';
	export default {
	name: 'select02',
	  data () {
	    return {
	    	tabView: 'online1',
            tabs: [{name: "线上项目"}, {name: "线下项目"}],
            iscur: 0
	    }
	},
	props: {
		datas:{
			type: Object
		},
	},
	components:{
		online1,
		online2
	},
	created(){
		/*放这里也可以,这里是页面渲染之前就请求this.test = 后台返回的数据;*/
	},
	mounted() {
		
        
    },
	methods: {
	  	tabChange:function(tab){
            this.tabView = tab;
        }
	  }
	}
</script>

<style scoped="scoped">
.cur{
    border-color: #f60;
    background: #f60;
    color: #FFFFFF;
}
.sk-buttons-row, .buttons-tab {
    -webkit-align-self: center;
    align-self: center;
    display: -webkit-box;
    /* display: -webkit-flex; */
    /* display: flex; */
    -webkit-box-lines: single;
    -moz-box-lines: single;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding-top: 0.4rem;
}
.sk-buttons-row li:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
    margin-left: 0;
    border-left-width: 1px;
    border-left-style: solid;
}
.sk-buttons-row li:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
}
.sk-buttons-row li{
	border: 1px solid #0894ec;
    text-decoration: none;
    text-align: center;
    display: block;
    border-radius: 0.25rem;
    line-height: 1rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    padding: 0 0.5rem;
    margin: 0;
    height: 1rem;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
    font-size: 0.4rem;
    font-family: inherit;
    cursor: pointer;
    border-radius: 0 0 0 0;
    margin-left: -1px;
    width: 100%;
    -webkit-box-flex: 1;
    -ms-flex: 1;
}
</style>