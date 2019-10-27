<template>
    <div class="page-group">
        <div class="page">
        	<div class="content">
        		<!-- advertising -->
        		<!--<div>
        			<a @click=""><img src="../../../static/images/advertising.jpg" alt="" width="100%"/></a>
        		</div>-->
        		
        		<!-- projects title -->
                <div style="background: #ffffff">

	                <div class="p-title" v-if="items.detail">{{items.detail.province}}{{items.detail.city}}|{{items.detail.title}}</div>
	                <div class="p-item">
		                <div class="state-mark">
			                <div class="state-text" v-if="items.detail">{{items.detail.status_name}}</div>
			                
		                </div>
		                <table>
			                <tr>
				                <th>雇主报价：</th>
				                <td style="color: #f66626;" v-if="items.detail">¥{{items.detail.show_cash}}元 ({{items.detail.type_id}})</td>
			                </tr>
			                <tr v-if="items.detail.cate_id == 241">
				                <th>预估总造价：</th>
				                <td v-if="items.detail">{{ items.detail.total_cost }}元</td>
			                </tr>
			                <tr v-if="items.detail.p_status != 1">
				                <th>交付比例：</th>
				                <td v-if="items.detail && items.detail.p_status == 2">{{ items.detail.ratio }}%</td>
				                <td v-if="items.detail && items.detail.p_status == 3">{{ items.detail.ratio }}‰</td>
			                </tr>
			                <tr v-if="items.detail.cate_id == 241">
				                <th>收费模式：</th>
				                <td v-if="items.detail.p_status == 1">咨询服务费</td>
				                <td v-if="items.detail.p_status == 2">当地政府收费标准的下浮</td>
				                <td v-if="items.detail.p_status == 3">总造价计费</td>
			                </tr>
		                </table>
	                </div>
	                <div class="p-button-group">

	                </div>
	                <div class="buttons-tab" v-model="tabView">
                        <li v-for="(tab ,index) in tabs" :class="{cur:iscur==index}" @click="iscur=index,tabChange('select' + (index + 1))">{{tab.name}}</li>

                        
                    </div>
                    <div class="tabs">
                    	<keep-alive> 
                            <component v-bind:is="tabView" v-bind:lists="items" v-if="items.detail"></component>
                        </keep-alive>
                    </div>
                </div>
            </div>
            
            <!--底部导航-->
            <index-tab page="1"></index-tab>
    
            <!--错误提示-->
            <div v-if="isShowTip">
			    <err-tip :errMsg="errTipMsg" v-bind:lists="items"></err-tip>
		    </div>
        </div>
    </div>

</template>

<script>
	import select1 from '@/view/projects/select01';
    import select2 from '@/view/projects/select02';
    import indexTab from '@/components/indexTabComponent';
	import errTip from '@/components/errTipComponent';
	import axios from 'axios'
	export default {
		name: 'projectsDetails',
		data() {
			return {
				tabView: 'select1',
                tabs: [{name: "项目详情"}, {name: "投标方案"}],
                iscur: 0,
                inPage:true,
	    	    isShowTip:false,
				errTipMsg:'',
				items:[]
			}
		},
		created() {
			
		},
		mounted() {
			axios.get(this.baseCont.PHP_API + '/tasksinfo/' + this.$route.params.id,{}).then(response => {
                this.items = response.data.data;
            }).catch((err) => {
                console.log(err.msg);
            });		       
		},
		components: {
			select1,
            select2,
            indexTab,
			errTip
		},
		methods: {
			tabChange:function(tab){
                this.tabView = tab;
            }
		}
	}
</script>

<style scoped>
a {
    color: #0894ec;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.page-group {
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.content {
    padding: 0;
    margin: 0;
    padding-bottom: 2.4rem;
}
.p-title {
    font-weight: normal;
    font-size: 0.5rem;
    text-align: left;
    color: #333333;
    padding: 0.5rem;
}
.p-item {
    background: #ffffff;
    width: 100%;
    position: relative;
}
.p-item .state-mark {
    padding: 0rem 0rem 0rem 0.3rem;
    position: absolute;
    right: 0;
    background: rgba(83, 145, 223, 1);
    text-align: center;
    border-width: 0.7rem 0 0.7rem 0.5rem;
    border-style: solid;
    border-color: transparent transparent transparent #ffffff;
}
.p-item .state-mark > .state-text {
    font-size: 0.4rem;
    color: #ffffff;
    margin-top: -0.5rem;
    position: relative;
    top: 0.2rem;
}
.p-item > table {
    border-bottom: 0.05rem solid #e7e7e7;
    width: 100%;
    background: #ffffff;
    font-size: 0.4rem;
}
.p-item th {
    font-weight: normal;
    color: #999999;
    padding-bottom: 0.6rem;
    width: 30%;
}
.p-item td {
    color: #333333;
    padding-bottom: 0.6rem;
    text-align: left;
}
.p-button-group {
    width: 100%;
    text-align: right;
    padding: 0.4rem 0.5rem 0.4rem 0;
}
.buttons-tab {
    -webkit-align-self: center;
    align-self: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-lines: single;
    -moz-box-lines: single;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    background: #f5f5f5;
    position: relative;
}
.buttons-tab li{
    font-size: 0.4rem;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    text-align: center;
}
.cur{
	color: #0894ec;
	border-bottom: 2px solid transparent;
    border-color: #0894ec;
    z-index: 100;
}
</style>