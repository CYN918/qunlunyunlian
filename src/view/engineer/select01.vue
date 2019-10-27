<template>
<div id="tab1" class="tab active">
	<!--<div class="card">
		<div class="card-header no-border" style="padding-bottom: 0;">
			<div style="text-align: center;width: 100%;">完成项目数据</div>
		</div>
		<div valign="bottom" class="card-header color-white no-border no-padding" style="width: 100%;">
			<div id="pie2d_container" style="width: 100%;height:5rem;"></div>
		</div>
		<div class="card-footer">
			<span>共完成：11&nbsp;个</span>
			<span>总规模：69483&nbsp;平方米</span>
		</div>
		<div class="card-footer">
			<span>总用时：34&nbsp;天</span>
			<span>总收入：17300.0元</span>
		</div>
	</div>-->
	<!--<div class="card">
		<div class="card-header no-border">
			<div style="text-align: center;width: 100%;">工程师能力数据</div>
		</div>
		<div valign="bottom" class="card-header color-white no-border no-padding" style="width: 100%;">
			<div id="radar_container" style="width: 100%;height:5rem;"></div>
		</div>
		<div class="card-footer">
			<span>好评率：100%</span>
			<span>信誉分：100（高）</span>
		</div>
		<div class="card-footer">
			<span>纠纷：0&nbsp;个</span>
			<span>成果按时交付率：80%</span>
		</div>
	</div>-->
	<div class="card">
		<div class="card-header no-border">
			<div style="text-align: center;width: 100%;">个人介绍</div>
		</div>
		<div valign="bottom" class="card-header color-white no-border no-padding" style="width: 100%; padding: 0 0.5rem 2rem 0.6rem;">
			<p v-if="datas.user">
				{{datas.user.introduce}}
			</p>
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
//		this.drawLine();
        
    },
	methods: {
//	  	drawLine(datas){
//	  	    var myChart = echarts.init(document.getElementById('pie2d_container'));
//	        myChart.setOption({
//          series : [
//              {
//                  name: '',
//                  type: 'pie',
//                  radius: '55%',
//              data:[
//                  {value:310, name:'房屋建筑与装修工程：datas.cost_type1%'},
//                  {value:1548, name:'仿古建筑工程：datas.cost_type2%'},
//                  {value:236, name:'通用安装工程：datas.cost_type3%'},
//                  {value:400, name:'市政工程：datas.cost_type4%'},                    
//                  {value:135, name:'园林绿化工程：datas.cost_type5%'},
//                  {value:234, name:'矿山工程：datas.cost_type6%'},
//                  {value:235, name:'构建物工程：datas.cost_type7%'},
//                  {value:335, name:'城市轨道交通工程：datas.cost_type8%'},
//                  {value:274, name:'爆破工程：datas.cost_type9%'},
//                  {value:275, name:'其他: datas.cost_type10%'}
//              ],
//              itemStyle: {
//              	normal: {
//              		label: {
//              			textStyle: {
//              				fontSize: 12
//              			}
//              		}
//              	}
//              }
//          }
//      ]
//      });
//     var myChart = echarts.init(document.getElementById('radar_container'));
//	
//  var option = {
//      tooltip: {
//          trigger: 'item',
//          formatter: "{a} <br/>{b}: {c} ({d}%)"
//      },
//      series: [
//      {
//          name:'',
//          type:'pie',
//          radius: ['50%', '70%'],
//          avoidLabelOverlap: false,
//          label: {
//              normal: {
//                  show: false,
//                  position: 'center'
//              },
//              emphasis: {
//                  show: true,
//                  textStyle: {
//                      fontSize: '30',
//                      fontWeight: 'bold'
//                  }
//              }
//          },
//          labelLine: {
//              normal: {
//                  show: false
//              }
//          },
//          data:[
//              {value:335, name:'经验'},
//              {value:310, name:'沟通'},
//              {value:234, name:'效率'},
//              {value:135, name:'态度'},
//              {value:1548, name:'规范'},
//              {value:235,name:'质量'}
//          ]
//      }
//  ]
//};
//myChart.setOption(option);
//	  }
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
</style>