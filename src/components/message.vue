<template>
    <div class="message">
        <mt-header title="信息提醒">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <div class="ve-box-message">
            <div v-if="isnot && ifload">
                <center><mt-spinner :type="3"></mt-spinner></center>
            </div>
            <ul
                v-if="isnot"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <li v-for="item in list">
                    <span class="ve-box-toptitle">
                        <img src="//img.qlylian.com/images/message.png">
                        <b>{{ item.title }}</b>
                    </span>
                    <div class="ve-box-mcandt">
                        <div class="m_content">{{ item.content }}</div>
                        <div class="m_creattime">{{ item.created_at }}</div>
                    </div>
                </li>
            </ul>
            <div v-else class="ve-no-message"><center>暂无信息</center></div>
        </div>
        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
    import { Header } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
    import { Spinner } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    
    export default {
	  name: 'message',
        data () {
            return {
                total: 0,
                page: 1,
                lastpage: 0,
                ifload: true,
                loading: false,
                isnot: true,
                list: []
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    this.getList()
                }, 1000);
            },
            getList () {
                axios.get(this.baseCont.PHP_API + '/user/message', {
                    params: {
                        page: this.page
                    }
                })
                .then(response => {
                    if (response.data.code === 200) {
                        let arr = response.data.data.list
                        for (let i = 0; i < arr.length; i++) {
                            this.list.push(arr[i])
                        }
                        this.lastpage = response.data.data.lastpage
                        this.loading = false
                        if(this.lastpage <= this.page){
                            Toast({
                                message: '已经加载到底！',
                                duration: 2000
                            });
                            this.loading = true
                        }
                        this.ifload = false
                        this.page++
                    }else{
                        this.loading = true
                        this.isnot = false
                    }
                })
            }
        },
        mounted () {
        }
	}
</script>
<style scoped>
    .message{
        padding-bottom: 2rem;
    }
    .ve-box-message{
        padding: 0 0.2rem;
    }
    .ve-box-message ul li{
        margin-top: 0.1rem;
        margin-bottom: 0.3rem;
        padding-bottom: 0.2rem;
        border-bottom: 0.1rem dotted #ccc;
    }
    .ve-box-message .ve-box-toptitle>img{
        position: relative;
        top: 0.1rem;
    }
    .ve-box-message .ve-box-toptitle>b{
        margin-left: 0.2rem;
    }
    .ve-box-message .ve-box-mcandt{
        margin-top: 0.1rem;
        padding-left: 0.6rem;
    }
    .ve-box-message .ve-box-mcandt .m_creattime{
        margin-top: 0.1rem;
    }
    .ve-box-message .ve-no-message{
        padding:0.3rem 0rem;
    }
</style>