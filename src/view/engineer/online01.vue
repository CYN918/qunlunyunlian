<template>
<div id="online_projects" class="tab active infinite-tab infinite-scroll-bottom">
	<div style="margin: 0; padding: 0;" class="content-block">
		<div class="list-block media-list">
			<ul id="online_projects_list" class="projects-list">

				<li v-for="val in list.task_list" v-if="list.task_list.length != 0">
					
				    <router-link :to="'/projectsDetails/'+val.id" class="item-link item-content">
						<div class="item-inner">
							<div class="item-title-row" style="margin-bottom: 0.5rem;">
								<div class="item-title" style="font-weight: normal;">{{val.province_name}} {{val.city_name}} | {{val.title}}</div>
							</div>
							<div class="item-title-row">
								<div class="item-title" style="color: #f66626;font-size: 0.4rem;">¥{{val.bounty}}元</div>
								<div class="item-after" style="color: #999999; font-size: 0.4rem;">发布时间：{{val.created_at}}</div>
							</div>
						</div>
					</router-link>
					
				</li>
				<div class="nil-blank" v-if="this.list.task_list.length == 0">
				    暂时无线上项目
			    </div>

			</ul>
			
		</div>
	</div>
</div>

</template>

<script>	
	export default {
	name: 'online01',
	  data () {
	    return {
	    	
	    }
	},
	props: {
		list:{
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
.tab.active {
    display: block;
}
.content-block {
    color: #6d6d72;
}
.list-block {
    margin: 0 auto;
    font-size: 0.4rem;
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
	text-decoration: none;
    box-sizing: border-box;
    padding-left: 0.4rem;
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
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    display: block;
    color: inherit;
}
.list-block.media-list .item-inner {
    display: block;
    padding-top: 0.5rem;
    padding-bottom: 0.45rem;
    -webkit-align-self: stretch;
    align-self: stretch;
}
.list-block .item-link .item-inner {
    padding-right: 1.5rem;
    background-image: url(../../../static/images/youjiantou.png);
    background-size: 0.7rem;
    background-repeat: no-repeat;
    background-position: 97% center;
    background-position: -webkit-calc(100% - .5rem) center;
    background-position: calc(100% - .5rem) center;
}
.list-block .item-inner {
    padding-right: 0.75rem;
    position: relative;
    width: 100%;
    padding-top: 0.4rem;
    padding-bottom: 0.35rem;
    min-height: 2.2rem;
    overflow: hidden;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.list-block.media-list .item-title-row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.list-block .item-title {
    -webkit-flex-shrink: 1;
    -ms-flex: 0 1 auto;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}
.list-block .item-after {
    white-space: nowrap;
    color: #5f646e;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    margin-left: 0.25rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    max-height: 1.4rem;
}
.infinite-scroll-preloader {
    margin: 0.5rem;
    text-align: center;
}
.infinite-scroll-preloader .preloader {
    width: 1.5rem;
    height: 1.5rem;
}
.preloader {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-animation: preloader-spin 1s steps(12, end) infinite;
    animation: preloader-spin 1s steps(12, end) infinite;
}
.preloader:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(../../../static/images/down.gif);
    background-position: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
}
</style>