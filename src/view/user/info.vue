<template>
    <div class="info">
        <mt-header title="基本信息">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="真实姓名" placeholder="请真实姓名" type="name" v-model="name"></mt-field>
        <mt-picker label="所在地" :slots="slots" @change="onValuesChange"></mt-picker>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="微信" placeholder="请输入微信" type="url" v-model="website"></mt-field>
        <mt-field label="QQ" placeholder="请输入QQ" type="number" v-model="number"></mt-field>
        <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>
        
        <mt-button @click.native="handleClick">提交</mt-button>
         
        <index-tab page="3"></index-tab>
    </div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
    import { Header } from 'mint-ui';
    import { Field } from 'mint-ui';
    import { Spinner } from 'mint-ui';
    import { Button } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
	export default {
		name:'info',
		data() {
			return {
				slots: [
                    {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot1',
                        textAlign: 'right'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ],
                username:'',
                name:'',
                phone:'',
                website:'',
                number:'',
                introduction:''               
			}
		},
	    components:{
	    	indexTab,
	    },
	    methods: {
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
            }
	    },
	    mounted() {
	    	
	    }
		
	}
</script>

<style scoped="scoped">
</style>