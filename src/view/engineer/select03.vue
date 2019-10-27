<template>
	<div id="tab3" class="tab">
        <div style="margin: 0; padding: 0;" class="list-block media-list">               
            <ul>
                <li v-for="val in datas.work_info" v-if="datas.work_info.length != 0">
                    <a class="item-content item-link">
                        <div class="item-inner">
                            <div class="item-title-row" style="margin-bottom: 0.5rem;">
                                <div class="item-subtitie" style="font-size: 0.4rem; color: #999999;">{{val.start_time}}-{{val.end_time}}</div>
                            </div>
                            <div class="item-title-row">
                                <div style="font-size: 0.4rem;" > {{val.company_attr}}</div>
                                <div style="font-size: 0.4rem;margin-left: 1rem;" >{{val.position}}</div>
                            </div>
                        </div>
                    </a>
                </li>
                <div class="nil-blank" v-if="this.datas.work_info.length == 0">
				    暂时无工作经历
			    </div>
            </ul>
        </div>
    </div>

</template>

<script>
	export default {
	name: 'select03',
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
a {
    color: #0894ec;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.list-block ul {
    background: #fff;
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
}
.list-block li {
    box-sizing: border-box;
    position: relative;
}
.list-block .item-content {
    box-sizing: border-box;
    padding-left: 0.75rem;
    min-height: 2.2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.list-block.media-list .item-inner {
    display: block;
    padding-top: 0.5rem;
    padding-bottom: 0.45rem;
    -webkit-align-self: stretch;
    align-self: stretch;
}
.list-block .item-link .item-inner {
    padding-right: 2.8rem;
    background-image: url(../../../static/images/youjiantou.png);
    background-size: 0.7rem;
    background-repeat: no-repeat;
    background-position: 97% center;
    background-position: -webkit-calc(100% - .5rem) center;
    background-position: calc(100% - .5rem) center;
}
.list-block.media-list .item-title-row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.nil-blank{
	text-align: center;
}
</style>