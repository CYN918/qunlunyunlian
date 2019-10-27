<template>
	<div id="tab2" class="tab">
		<div class="list-block media-list">
			<ul id="online_projects_list" class="projects-list" data-total_pages="3" data-current_page="1" data-url="">

				<li v-for="val in lists.task_list" v-if="Object.keys(lists.task_list).length > 0">
					<a href="" class="item-link item-content">
						<div class="item-inner">
							<div class="item-title-row" style="margin-bottom: 0.5rem;">
								<div class="item-title" style="font-weight: normal;">{{val.province_name}} {{val.city_name}} | {{val.title}}</div>
							</div>
							<div class="item-title-row">
								<div class="item-title" style="color: #f66626;font-size: 0.4rem;">¥{{val.bounty}}元</div>
								<div class="item-after" style="color: #999999; font-size: 0.4rem;">发布时间：{{val.created_at}}</div>
							</div>
						</div>
					</a>
				</li>
				
                <div class="tab-content" v-else>            
                    <div class="none-div">
                        <img src="../../../static/images/box.png" alt="" />
                    </div>
                    <div class="none-desc">暂未添加此方面信息</div>
                </div>
			</ul>
			
		</div>
        
    </div>
</template>

<script>
	export default {
		name: 'select02',
		data() {
			return {
				
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
    font-size: 0.6rem;
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
</style>