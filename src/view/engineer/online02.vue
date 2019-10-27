<template>
	<div id='offline_projects' class='tab infinite-tab infinite-scroll-bottom'>
		<div class="content-block">
			<div class="list-block media-list">
				<ul id="online_projects_list" class="projects-list">

					<li v-for="val in list.project_info" v-if="list.project_info.length != 0">
						<div class="item-inner">
							<div class="item-title-row">
								<li class="item-after">公司名称：<strong>{{val.project_company}}</strong></li>
								<li class="item-after">项目名称：<strong>{{val.project_name}}</strong></li>
								
							</div>
							<div class="item-title-row">
								<li class="item-after">项目地址：<strong>{{val.site}}</strong></li>
								<li class="item-after">项目类型：<strong>{{val.project_cate}}</strong></li>
								
							</div>
							<div class="item-title-row">
								<li class="item-after">项目专业：<strong>{{val.project_major}}</strong></li>
								<li class="item-after">项目周期：<strong>{{val.time}}</strong></li>
																	
							</div>
							<div class="item-title-row">
								<li class="item-title-describe">项目描述：<strong>{{val.work_content}}</strong></li>
							</div>
						</div>
					</li>
					<div class="nil-blank" v-if="this.list.project_info.length == 0">
					    <img src="../../../static/images/file.png" alt="" /><br> 暂时无线下项目
				    </div>
				</ul>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	name: 'online02',
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
.tabs .tab.active {
    display: block;
}
.content-block {
    color: #6d6d72;
    padding-left: 0.1rem;
}
.list-block {
    font-size: 0.4rem;
}
.nil-blank {
    line-height: 3rem;
    text-align: center;
    font-size: 0.8rem;
    color: #999999;
    background: #efeff4;
    padding-top: 10%;
}
.nil-blank img {
    width: 7rem;
}
.item-title-row{
	padding-top: 0.2rem;
}
.item-title-row > li{
	display: inline-block;
	font-size: 0.4rem;
}
.item-after{
	width: 45%;
}
.item-after > strong{
	font-weight: bold;
}
</style>