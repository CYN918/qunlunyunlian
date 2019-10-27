<template>
    <div class="content" style="background: #ffffff;">
    	<mt-header title="联系客服">
            <router-link to="/sendLive" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="list-block media-list" style="margin-top: 0;">
            <ul>
                <li class="item-content">
                    <div class="item-inner" style="line-height: 2rem;">
                        <div>竭诚为您服务</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="content-block" style="text-align: center;">
            <p>群伦集团</p>
            <a href="tel:4001067895" class="button button-big">服务热线：400 106 7895</a>
            <p>联系人：谭小燕</p>
            <a href="tel:18138237537" class="button button-big">手机：18138237537</a>
            <p>联系人：郭诚茹</p>
            <a href="tel:13662653637" class="button button-big">手机：13662653637</a>
            <a href="email:1005734003@qq.com" class="button button-big">邮 件：1005734003@qq.com</a>
            <p>地 址：深圳龙华新区新区大道东方天德13楼</p>
        </div>
    </div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import axios from 'axios';
	export default {
		name: 'service',
		data() {
			return {
				
			}
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
.list-block {
    font-size: 0.4rem;
    border-bottom: 1px solid #DDDDDD;
}
.list-block ul {
    background: #fff;
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
}
.list-block .item-content {
    box-sizing: border-box;
    padding-left: 0.75rem;
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
    -webkit-align-self: stretch;
    align-self: stretch;
    margin-left: 0.75rem;
}
.list-block .item-inner {
    padding-right: 0.75rem; 
    position: relative; 
    width: 100%;  
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
.content-block {
    margin: 1rem 0;
    padding: 0 0.75rem;
    color: #6d6d72;
}
#mobile_publish_way p {
    font-size: 0.8rem;
}
p {
    margin: 0.2em 0;
    font-size: 0.5rem;
    text-align: left;
}
#mobile_publish_way a {
    border-color: #f66626;
    color: #f66626;
    width: 80%;
    height: 2rem;
    margin: 0 auto;
    line-height: 2rem;
}
.button {
	color: #666;   
    text-decoration: none;
    text-align: left;
    display: block;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    margin: 0;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
    font-size: 0.5rem;
    font-family: inherit;
    cursor: pointer;
}

</style>