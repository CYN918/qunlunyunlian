<template>
    <div class="page page-current join-mem">
        <div class="content" style="padding-bottom: 2.5rem;">
	        <div class="content-block">
		        <div class="my-box">
			        <div class="row">
				        <div class="col-25">
					        <div class="my-img text-right">
						        <img src="../../assets/touxiang.png" alt="" />
					        </div>
				        </div>
				        <div class="col-75">
					        <div class="my-title">
						                 陈工(0093236)
						        <span class="iden">普通算客</span>
					        </div>
					        <div class="probar">
						        <div class="cont" style="width:15%;"></div>
					        </div>
					        <div class="row">
						        <div class="col-3 done">
							                 普通算客
						        </div>
						        <div class="col-3">
							                  雇主保障
						        </div>
						        <div class="col-3">
							                  金牌算客
						        </div>
					        </div>
				        </div>
			        </div>
		        </div>
	        </div>
	        <div class="content-block step">
		        <div class="done">
			        <div class="step-title">成为正式算客</div>
			        <div class="step-tip">以下必填项，完成即可成为算客，可以报名普通项目。</div>
			        <div class="list-block">
				        <ul>
					        <li>
						        <a class="item-link item-content" href="">
							        <div class="item-media">
								        <img src="../../../static/images/phone.png" alt="" />
							        </div>
							        <div class="item-inner">
								        <div class="item-title">手机认证</div>
								        <div class="item-after">
									        <span class="sub-label success">已完成</span>
								        </div>
							        </div>
						        </a>
					        </li>

					        <li>
						        <a class="item-content item-link" href="/wx/person_iden_temps/new">
							        <div class="item-media">
								        <img src="../../../static/images/name.png" alt="" />
							        </div>
							        <div class="item-inner">
								        <div class="item-title">实名认证</div>
								        <div class="item-after">
								        	<span class="sub-label success">已完成</span>
								        </div>
							        </div>
						        </a>
					        </li>
					        <li class="">
						        <a class="item-content item-link" href="">
							        <div class="item-media">
								        <img src="../../../static/images/ziliao.png" alt="" />

							        </div>

							        <div class="item-inner">
								        <div class="item-title">完善算客资料</div>
								        <div class="item-after">
								        	<span class="sub-label success">已完成</span>
								        </div>
							        </div>
						        </a>
					        </li>
					        <li>
						        <a class="item-link item-content" href="">
							        <div class="item-media">
								        <img src="../../../static/images/jineng.png" alt="" />
							        </div>
							        <div class="item-inner go">
								        <div class="item-title">技能认证</div>
								        <div class="item-after">
									        <span class="sub-label fail">去认证 ></span>
								        </div>
							        </div>
						        </a>
					        </li>
				        </ul>
			        </div>
		        </div>
	        </div>
	        <div class="content-block step">
		        <div class="step-title">可选进阶条件</div>
	            <div class="row">
		            <div class="col-50">
			            <div class="step-box">
				            <div>
					            <img src="../../../static/images/bao.png" alt="" />
				            </div>
				            <div class="step-sub-title">加入雇主保障</div>
				            <div class="step-tip">可报名1000元以上项目</div>
				            <div>
					            <a class="go" href="">了解详情&gt;</a>
				            </div>
			            </div>
		            </div>
		            <div class="col-50" style="margin-left: 4%;">
			            <div class="step-box">
				            <div>
					            <img src="../../../static/images/vip.png" alt="" />
				            </div>
				            <div class="step-sub-title">成为金牌算客</div>
				            <div class="step-tip">可报名派单项目</div>
				            <div>
					            <a class="go" href="">了解详情&gt;</a>
				            </div>
			            </div>
		            </div>
	            </div>
	            <div class="text-center">
		            <a style="text-decoration: underline;font-size:0.4rem;color: #0894ec;" @click="projects">查看所有项目</a>
	            </div>
	        </div>
        </div>
        
        <!--底部导航-->
        <index-tab></index-tab>
    
        <!--错误提示-->
        <div v-if="isShowTip">
			<err-tip :errMsg="errTipMsg"></err-tip>
		</div>
    </div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import errTip from '@/components/errTipComponent';
	export default {
		name: 'user_engineer',
		data() {
			return {
				inPage:true,
	    	    isShowTip:false,
				errTipMsg:''
			}
		},
		mounted() {
			
		},
		components: {
			indexTab,
			errTip
		},
		methods: {
			projects(){
				this.$router.push({path: '/index_projects'})
			}
		}
	}
</script>

<style scoped>
.content-block {
    background: white;
    margin: 0;
    padding: 0.4rem 0;
    margin-bottom: 0.5rem;
    color: #6d6d72;
}
.my-box {
    background: linear-gradient(90deg, rgba(254, 115, 60, 1), rgba(255, 215, 144, 1));
    border-radius: 0.6rem;
    font-size: 0.3rem;
    color: #333;
    padding: 1rem 0;
    margin: 0 0.5rem;
}
.row {
    overflow: hidden;
    margin-left: -4%;
}
.row .col-25 {
    width: 21%;
    margin-left: 4%;
    box-sizing: border-box;
    float: left;
}
.text-right {
    text-align: right;
}
.my-img img {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
}
.row .col-75 {
    width: 71.00000000000001%;
    margin-left: 4%;
    box-sizing: border-box;
    float: left;
}
.my-box .my-title {
    font-size: 0.4rem;
    font-weight: bold;
}
.iden {
    padding: 0.1rem;
    border: 1px solid rgba(51, 51, 51, 1);
    border-radius: 0.6rem;
    font-size: 0.3rem;
    margin-left: 0.5rem;
    font-weight: normal;
}
.probar {
    width: 75%;
    height: 0.1rem;
    border: 1px solid rgba(240, 103, 70, 1);
    border-radius: 0.1rem;
    margin-top: 0.5rem;
}
.probar .cont {
    width: 100%;
    height: 100%;
    background: #F06746;
}
.col-3.done {
    background: url(../../../static/images/box_banground.png) no-repeat;
    background-size: 100% 100%;
}
.col-3 {
    width: 27%;
    margin-right: 4%;
    text-align: center;
    margin-top: 0.2rem;
    float: left;
    font-size: 0.4rem;
}
.step {
    padding-left: 0.75rem;
}
.step .done {
    background: white url(../../../static/images/wancheng.png) no-repeat;
    background-size: 2rem 2rem;
    margin-right: 0.2rem;
    background-position: right top;
}
.step-title {
    font-size: 0.6rem;
    color: #333;
    font-weight: bold;
}
.step-tip {
    font-size: 0.3rem;
}
.list-block {
    margin: 1rem 0 0 0;
    font-size: 0.5rem;
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
.list-block .item-media {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    -webkit-box-lines: single;
    -moz-box-lines: single;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    box-sizing: border-box;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.item-media img {
    height: 1rem;
    width: 1rem;
}
.list-block .item-link .item-inner {
    padding-right: 1.5rem;
    background-image: url(../../../static/images/youjiantou.png);
    background-size: 0.4rem;
    background-repeat: no-repeat;
    background-position: 97% center;
    background-position: -webkit-calc(100% - .5rem) center;
    background-position: calc(100% - .5rem) center;
}
.list-block .item-media + .item-inner {
    margin-left: 0.5rem;
}
.list-block .item-inner {
    padding-right: 0.75rem;
    position: relative;
    width: 100%;
    padding-top: 0.4rem;
    padding-bottom: 0.35rem;
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
.list-block .item-title {
    color: #333;
    font-weight: bold;
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
.list-block .item-after .sub-label.success {
    color: #999;
    font-size: 0.4rem;
}
.list-block .item-inner.go .sub-label.fail {
    height: 0.7rem;
    line-height: 0.7rem;
    background: linear-gradient(90deg, rgba(253, 188, 74, 1), rgba(245, 104, 34, 1));
    border-radius: 0.2rem;
    font-size: 0.4rem;
    font-weight: bold;
    padding: 0 0.3rem;
    color: rgba(255, 255, 255, 1);
}
.row .col-50 {
    width: 46%;
   
}
.row > [class*="col-"], .row > [class*="tablet-"] {
    box-sizing: border-box;
    float: left;
}
.step-box {
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(231, 231, 231, 1);
    box-shadow: 0px 0px 0.8rem rgba(188, 188, 188, 0.21);
    border-radius: 0.5rem;
    text-align: center;
    margin: 1rem 0;
    padding: 0.5rem;
}
.step-box img {
    height: 3rem;
    width: 3rem;
    margin-bottom: 0.2rem;
}
.step-sub-title {
    color: #333;
    font-weight: bold;
    font-size: 0.5rem;
}
.step-tip {
    font-size: 0.3rem;
}
.step-box a.go {
    height: 1rem;
    line-height: 1rem;
    background: linear-gradient(90deg, rgba(253, 188, 74, 1), rgba(245, 104, 34, 1));
    border-radius: 0.2rem;
    font-size: 0.4rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    display: inline-block;
    padding: 0 0.5rem;
    margin-top: 0.4rem;
}
.text-center {
    text-align: center;
}
</style>