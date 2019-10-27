<template>
	<div id="tab2" class="tab">
		<mt-navbar v-model="selected">
            <mt-tab-item id="1">线上项目</mt-tab-item>
            <mt-tab-item id="2">线下项目</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="list-block media-list">
			        <ul id="online_projects_list" class="projects-list">

				        <li v-for="val in lists.task_list" v-if="lists.task_list.length != 0">
					        
					        <router-link :to="'/projectsDetails/'+val.id" class="item-link item-content">
						        <div class="item-inner">
							        <div class="item-title-row" style="margin-bottom: 0.3rem;">
								        <div class="item-title" style="font-weight: normal;">{{val.province_name}} {{val.city_name}} | {{val.title}}</div>
							        </div>
							        <div class="item-title-row">
								        <div class="item-title" style="color: #f66626;font-size: 0.4rem;">¥{{val.bounty}}元</div>
								        <div class="item-after" style="color: #999999; font-size: 0.4rem;">发布时间：{{val.created_at}}</div>
							        </div>
						        </div>
						    </router-link>
					        
				        </li>
				
                        <div class="tab-content" v-if="this.lists.task_list.length == 0">            
                            <div class="none-div">
                                <img src="../../../static/images/box.png" alt="" />
                            </div>
                            <div class="none-desc">暂未添加此方面信息</div>
                        </div>
			        </ul>
			
		        </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                 <div class="content-block">
			<div class="list-block media-list">
				<ul id="online_projects_list" class="projects-list">

					<li v-for="val in lists.project_info" v-if="lists.project_info.length != 0">
						<div class="item-inner">
							<div class="item-title-row">
								<li class="item-after">公司名称:{{val.project_company}}</li>
								<li class="item-after">项目名称：{{val.project_name}}</li>
								
							</div>
							<div class="item-title-row">
								<li class="item-after">项目地址：{{val.site}}</li>
								<li class="item-after">项目类型：{{val.project_cate}}</li>
								
							</div>
							<div class="item-title-row">
								<li class="item-after">项目专业：{{val.project_major}}</li>
								<li class="item-after">项目周期：{{val.time}}</li>
																	
							</div>
							<div class="item-title-row">
								<li class="item-title-describe">项目描述：{{val.work_content}}</li>
							</div>
						</div>
					</li>
					
				    <div class="tab-content" v-if="this.lists.project_info.length == 0">            
                        <div class="none-div">
                            <img src="../../../static/images/box.png" alt="" />
                        </div>
                        <div class="none-desc">暂未添加此方面信息</div>
                    </div>
				</ul>
				
			</div>
		</div>
            </mt-tab-container-item>
           
        </mt-tab-container>
		
        
    </div>
</template>

<script>
	import { Navbar, TabItem } from 'mint-ui';
	export default {
		name: 'select02',
		data() {
			return {
				selected:'1'
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
    border: 1px solid #e7e7e7;
}
.none-div {
    margin-top: 1rem;
    text-align: center;
}
.none-desc {
    font-size: 0.4rem;
    color: #999999;
    text-align: center;
    margin-top: 1rem;
}
.list-block {
    margin: 0 auto;
    font-size: 0.5rem;
    padding-bottom: 2rem;
}
.list-block ul {
    background: #fff;
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
}
.mint-tab-item-label{
	font-size: 0.5rem !important;
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
    background-size: 0.5rem;
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
.item-title-row{
	
}
.item-title-row > li{
	display: inline-block;
	font-size: 0.4rem;
}
.item-after{
	width: 60%;
}
.item-title-describe{
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
    display: inline-block;
	font-size: 0.4rem;
}
</style>