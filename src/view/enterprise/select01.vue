<template>
<div id="tab1" class="tab active" style="padding-bottom: 2rem;">
	<div class="card">
		<div class="card-header no-border">
			<div style="text-align: center;width: 100%;" v-if=" lists.user.supervise_type == 2">工作室简介</div>
			<div style="text-align: center;width: 100%;" v-if=" lists.user.supervise_type == 3">公司介绍</div>
		</div>
		<div valign="bottom" class="card-header color-white no-border no-padding" style="width: 100%; padding: 0 0.5rem 1rem 0.6rem;">
			<p>
				{{lists.user.eintroduce}}
			</p>
		</div>
	</div>
	<div class="card" v-if=" lists.user.supervise_type == 3">
		<table class="table table1 table-bordered margin-t-1x" border="1" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
            <tbody>
                <tr>
                    <td style="width: 3.5rem;">统一社会信用代码</td>
                    <td>{{lists.user.credit}}</td>
                </tr>
                <tr>
                    <td>组织机构代码</td>
                    <td>{{lists.user.mechanism}}</td>
                </tr>
                <tr>
                    <td>注册号</td>
                    <td>{{lists.user.registration}}</td>
                </tr>
                <tr>
                    <td>经营状态</td>
                    <td>{{lists.user.operatingstate}}</td>
                </tr>
                <tr>
                    <td>公司类型</td>
                    <td>{{lists.user.typecompany}}</td>
                </tr>
                <tr>
                    <td>成立日期</td>
                    <td class="qxb-num">{{lists.user.dateestablishment}}</td>
                </tr>
                <tr>
                    <td>法定代表人</td>
                    <td>{{lists.user.representative}}</td>
                </tr>
                <tr>
                    <td>营业期限</td>
                    <td>{{lists.user.establishment}}</td>
                </tr>
                <tr>
                    <td>注册资本</td>
                    <td class="qxb-num">
                        {{lists.user.registered}}
                    </td>
                </tr>
                <tr>
                    <td>企业地址</td>
                    <td colspan=3>    {{lists.user.enterpriseaddress}}</td>
                </tr>
                <tr>
                    <td>经营范围</td>
                    <td style="text-align: left;" colspan=3>{{lists.user.operation}}</td>
                </tr>
            </tbody>
        </table>
	</div>
	<div class="card" v-if=" lists.user.supervise_type == 3">
		<div class="card-header no-border">
			<div style="text-align: center;width: 100%;">公司类型</div>
		</div>
		<div valign="bottom" class="card-header color-white no-border no-padding" style="text-align:center;width: 100%; padding: 0 0.5rem 1rem 0.6rem;display: inline-block;">
			<li class="box" v-for="val in lists.user.cate">{{val.name}}</li>
		</div>
	</div>
	
	<div class="card">
		<div class="card-header no-border" style="padding-bottom: 0;">
			<div style="text-align: center;width: 100%;">完成项目数据</div>
		</div>
		<div valign="bottom" class="card-header color-white no-border no-padding" style="width: 100%;">
			<div id="pie2d_container" style="width: 100%;height:5rem;"></div>
		</div>
		<div class="card-footer">
			<span>完成项目：{{lists.user_engineer}}&nbsp;个</span>
			<span>进行中项目：{{lists.user_create}}&nbsp;个</span>
		</div>
		<div class="card-footer">
			<span>合作雇主：{{lists.user_cooperation}}&nbsp;个</span>
			<span>回头客：{{lists.user.praise_count}}个</span>
		</div>
		<div class="card-footer">
			<span>总收入：{{lists.user_bounty}}&nbsp;元</span>
			<span>总加入时长：{{lists.totaltime}}天</span>
		</div>
		<div class="card-footer">
			<span>积分：{{lists.user.integral}}&nbsp;分</span>
		</div>
	</div>
	<div class="card">
		<div class="card-header no-border">
			<div style="text-align: center;width: 100%;">工程师能力数据</div>
		</div>
		<div valign="bottom" class="card-header color-white no-border no-padding" style="width: 100%;">
			<div id="radar_container" style="width: 100%;height:5rem;"></div>
		</div>
		<div class="card-footer">
			<span>成果质量：{{lists.user.e_quality}}分</span>
			<span>完成时间：{{lists.user.e_time}}分</span>
		</div>
		<div class="card-footer">
			<span>沟通服务：{{lists.user.e_service}}&nbsp;分</span>
			<span>技术水平：{{lists.user.e_skill}}分</span>
		</div>
	</div>
	
</div>
</template>

<script>
	import * as echarts from 'echarts/lib/echarts';
    import 'zrender/lib/svg/svg';
    // 引入提示框和标题组件

	export default {
	name: 'select01',
	  data () {
	    return {
	    			
	    }
	},
	props: {
		lists:{
			type: Object
		},
	},
	components:{
		
	},
	created(){
		/*放这里也可以,这里是页面渲染之前就请求this.test = 后台返回的数据;*/
	},
	mounted() {
		this.drawLine();
//		console.log(this.lists)
        
    },
	methods: {
	  	drawLine(){
	  		var lists = this.lists;
	  	    var myChart = echarts.init(document.getElementById('pie2d_container'));
	        myChart.setOption({
            series : [
                {
                    name: '',
                    type: 'pie',
                    radius: '55%',
                data:[
                    {value:lists.cost_type1, name:'房屋建筑与装修工程:'+lists.cost_type1+'%'},
                    {value:lists.cost_type2, name:'仿古建筑工程:'+lists.cost_type2+'%'},
                    {value:lists.cost_type3, name:'通用安装工程：'+lists.cost_type3+'%'},
                    {value:lists.cost_type4, name:'市政工程：'+lists.cost_type4+'%'},
                    {value:lists.cost_type5, name:'园林绿化工程：'+lists.cost_type5+'%'},
                    {value:lists.cost_type6, name:'矿山工程：'+lists.cost_type6+'%'},
                    {value:lists.cost_type7, name:'构建物工程：'+lists.cost_type7+'%'},
                    {value:lists.cost_type8, name:'城市轨道交通工程：'+lists.cost_type8+'%'},
                    {value:lists.cost_type9, name:'爆破工程：'+lists.cost_type9+'%'},
                    {value:lists.cost_type10, name:'其他：'+lists.cost_type10+'%'}
                ],
                itemStyle: {
                	normal: {
                		label: {
                			textStyle: {
                				fontSize: 10
                			}
                		}
                	}
                }
            }
        ]
        });
       var myChart = echarts.init(document.getElementById('radar_container'));
	
    var option = {
        
         angleAxis: {
    type: 'category',
            data: ['成果质量', '完成时间', '沟通服务', '技术水平'],
            z: 10
    },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
            type: 'bar',
                    data: [lists.user.e_quality, lists.user.e_time, lists.user.e_service, lists.user.e_skill],
                    coordinateSystem: 'polar',
                    name: 'A',
                    stack: 'a'
            }],
};
myChart.setOption(option);
	  }
	}
	}
</script>

<style scoped="scoped">
.tab.active {
    display: block;
}
.card {
    box-shadow: none;
    background: #fff;
    position: relative;
    border-radius: 0.1rem;
    font-size: 0.4rem;
}
.card-header {
    border-radius: 0.1rem 0.1rem 0 0;
    font-size: 0.4rem;
    position: relative;
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
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
.card-header, .card-footer {
    position: relative;
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 0.4rem;
    
}
.card-footer {
    border-radius: 0 0 0.1rem 0.1rem;
    color: #5f646e;
}
.card .card-header .box{ 
    background: #ffefd9;
    border: 1px solid #ff9e45;
    height: 32px;
    line-height: 32px;
    margin-top: 10px;
    border-radius: 2px;
    color: #333333;
    display: inline-block;
    margin-left: 0.2rem;
}

</style>