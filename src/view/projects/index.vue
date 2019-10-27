<template>
<div class="list-block white">
	<div class="row">
		<div class="col-40">
			<div class="col-title">最新项目</div>
		</div>
		<div class="col-60">
			<div class="col-more">
				<router-link to="index_projects">查看更多</router-link>
			</div>
		</div>
	</div>
	<div class="col-box" id="pros-list">
		<div class="card" style="" >
			<div class="card-content">
				<div class="list-block media-list">
					<ul>
						<li v-for="(value, index) in item" v-if="index < 2">
							<a @click="projects(value.id)" class="item-content external" style=" line-height: 0.9rem;">
								<div class="item-inner" style="font-size: 0.6rem;">
									<div class="item-title-row">
										<div class="item-title" style="color: #333333; font-size: 0.8rem;">
											<div class="wx-project-name-topic">
												<em class="wx-normal-pd-block" style="border: 0; color: #FFFFFF; background-image: linear-gradient(#47befa, #47befa);">{{value.type_id}}</em>
												<!--<em style="border: 0.1rem solid #f06746;color:#ffffff;background-color: #f06746;border-radius: 0.1rem;"><span style="color:#ffffff;margin: 0rem 0.1rem">派单项目</span></em>-->
												<em style="font-weight: bold;font-style: normal;">
                                                    <span style='color: #f66626'></span>{{district[value.province]}} {{district[value.city]  }} | {{value.title}}
                                                </em>
											</div>

										</div>
									</div>
									<div class="item-title-row">
										<div class="item-subtitle" v-bind:style="{ color: activeColor }">
											¥{{value.show_cash}}元
											<span class="mini-title">
                                            (雇主报价)
                                            </span>
											<span class="project-tags">
                                                <span v-bind:style="{ color: activeColor }">{{value.status_name}}</span>
											    <i class="project-tag-views"></i>
											    <span>{{value.view_count}}</span>
											</span>
											<span class="mini-title">
                                            </span>

										</div>
									</div>
									<div class="item-title-row">
										<div class="item-subtitle" style="font-size: 0.4rem;">
											<span class="red-font-color">{{value.work_count}}人投标中...</span>
										</div>
										<div class="item-after" style="color: #999999;">
											发布日期：{{value.created_at}}
										</div>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		

	</div>
</div>
</template>

<script>
export default {
  	name: 'index',
  	props: {
  	    item: {
            type: Array
        },
        district: {
        	type: Object
        },
  	},
    data() {
		return {
            lists: [],
            activeColor:'#f22929'
		}
	},
	mounted() {         
		
	},
	components: {

	},
	methods: {
		projects(id) {
			this.$router.push({path:'/projectsDetails/' + id});
  			window.parent.scrollTo(0, 0);
  	    }
  	    
  	}
 }
</script>

<style scoped="scoped">
	a{
		text-decoration: none;
	}
	.row {
    overflow: hidden;
    margin-left: -4%;
  }
  .row.col-center > div {
    text-align: center;
    padding: 0.4rem 0 0.2rem;
  }  
  .row .col-25 {
    width: 29%;
    margin-left: 4%;
    display: inline-block;
  }  
  .list-block {
    background: white;
  }
  .row .col-40 {
    width: 36%;
    margin-left: 4%;
    float: left;
  }
  .col-title {
    margin: 0.7rem 0 0rem 0.6rem;
    border-left: #F06746 solid 0.2rem;
    padding-left: 0.2rem;
    font-size: 0.6rem;
    line-height: 100%;
    color: #333;
    font-weight: bold;
  } 
  .row .col-60 {
    width: 55.99999999999999%;
    margin-left: 4%;
    float: left;
  }
  .col-more {
    padding-right: 0.5rem;
    text-align: right;
  }
  .col-more a {
    color: rgba(240, 103, 70, 1);
    font-size: 0.4rem;
    line-height: 2rem;
    width: 100%;
    display: block;
  }  
  .card {
    position: relative;
    border-radius: 0.1rem;    
  }
  .com-list .card {
    width: 95%;
    border-radius: 0.4rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 0.4rem #d6d6d6;
    margin: 0.4rem 0.2rem !important;
  }
  .card-content {
    position: relative;
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
  .list-block .item-inner {
    padding-right: 0.75rem;
    position: relative;
    width: 100%;
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
    display: block;
    -webkit-align-self: stretch;
    align-self: stretch;
    padding-top: 0.3rem;
  }
  .item-media{
  	padding-top: 0.3rem;
  }
  .list-block.media-list .item-title-row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
  .model span {
    font-size: 0.3rem;
    background: rgba(245, 245, 245, 1);
    border-radius: 4px;
    padding: 0.1rem;
    color: #666;
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
    font-weight: 500;
  }
  .item-title-row .item-title .wx-project-name-topic {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.4rem;
  }
  .item-title-row .item-title .wx-project-name-topic .wx-normal-pd-block {
    font-size: 0.4rem;
    border: 1px solid #999999;
    border-radius: 2px;
    color: #666666;
    padding: 0rem 0.1rem;
    font-style: normal;
  }
  .list-block.media-list .item-title-row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
  .list-block .item-subtitle {
    font-size: 0.75rem;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
  }
  .item-title-row .item-subtitle .mini-title {
    font-size: 0.4rem;
    color: #999999;
  }
  .item-title-row .item-subtitle .project-tags {
    color: #666666;
    font-size: 0.4rem;
    display: inline-flex;
    align-items: center;
    vertical-align: bottom;
  }
  .item-title-row .item-subtitle .project-tags i.project-tag-price {
    display: inline-flex;
    margin-right: 0.1rem;
    margin-left: 0.6rem;
  }
  .item-title-row .item-subtitle .project-tags i.project-tag-price{
    content: '';
    width: 1.2em;
    height: 1.2em;
    background: url(../../../static/images/jiage.png) no-repeat;
    background-size: 1.2em 1.2em;
  }
  .item-title-row .item-subtitle .project-tags i.project-tag-views {
    display: inline-flex;
    margin-right: 0.1rem;
    margin-left: 0.6rem;
  }
  .item-title-row .item-subtitle .project-tags i.project-tag-views:before {
    content: '';
    width: 1.2em;
    height: 1.2em;
    background: url(../../../static/images/kejian.png) no-repeat;
    background-size: 1.2em 1.2em;
  }
  .item-title-row .item-subtitle .project-tags i.project-tag-cad {
    content: '';
    width: 1.2em;
    height: 1.2em;
    background: url(../../../static/images/tuzhi.png) no-repeat;
    background-size: 1.2em 1.2em;
  }
  .list-block.media-list .item-title-row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
  .list-block .item-subtitle {
    font-size: 0.4rem;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
  }
  .red-font-color {
    color: #47befa;
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
    font-size: 0.4rem;
  }

</style>