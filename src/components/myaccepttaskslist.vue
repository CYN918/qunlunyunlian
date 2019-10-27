<template>
    <div class="myaccepttaskslist">
        <mt-header title="我参与的项目">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-navbar v-model="selected">
            <mt-tab-item id="0">全部</mt-tab-item>
            <mt-tab-item id="1">工作中</mt-tab-item>
            <mt-tab-item id="2">托管中</mt-tab-item>
            <mt-tab-item id="3">交付中</mt-tab-item>
            <mt-tab-item id="4">已结束</mt-tab-item>
        </mt-navbar>

        <mt-field style="margin-top:0.5rem;" placeholder="搜索" v-model="keywork">
            <mt-button size="small" type="default" class="ve-send-code" @click="gosearch">搜索</mt-button>
        </mt-field>

        <div class="ve-list-box">
            <div v-if="isnot && ifload">
                <center><mt-spinner :type="3"></mt-spinner></center>
            </div>
            <ul
                v-if="isnot"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10"
                class="ve-list-divbox">
                <li v-for="item in list" class="ve-list-topbox">
                    <div class="ve-list-status">
                        {{ item.status_name }}
                        <span>{{ item.created_at }}</span>
                    </div>
                    <div class="ve-list-tit">
                        <router-link :to="'/projectsDetails/'+item.id">
                            <div class="ve-left-bothtit">
                                {{ item.title }}
                            </div>
                            <div v-if="item.cate_id ==241 && item.p_status == 2" class="ve-right-bothtit"> &nbsp;&nbsp;{{ item.ratio }}%</div>
                            <div v-else-if="item.cate_id ==241 && item.p_status == 3" class="ve-right-bothtit"> &nbsp;&nbsp;{{ item.ratio }}‰</div>
                            <div v-else="item.cate_id ==241 && item.p_status == 3" class="ve-right-bothtit"> &nbsp;&nbsp;￥{{ item.real_cash }}</div>
                        </router-link>
                    </div>
                    <div class="ve-list-operation">
                   
                        <span v-if="item.status == 5 && item.deliver_one == 0 ">
                        	 <router-link :to="'/getharvest/'+item.id">发布动态</router-link>
                        	
                        </span>
                          <span v-if="item.status == 5 && item.deliver_one == 0 ">
                        	 <router-link :to="'/getdeliver/'+item.id">确定交付</router-link>
                        </span>
                        <span v-if="item.status == 5 && item.deliver_one == 3 ">
                             <router-link :to="'/getharvest/'+item.id">发布动态</router-link>
                        	 
                        </span>
                        <span v-if="item.status == 5 && item.deliver_one == 3 ">
                            <router-link :to="'/getdeliver/'+item.id">确定交付</router-link>
                        	 
                        </span>
                           <span v-if="item.status == 5 && item.deliver_one == 5 ">
                             <router-link :to="'/getharvest/'+item.id">发布动态</router-link>
                        	
                        </span>
                       <span v-if="item.status == 5 && item.deliver_one == 5 ">
                
                        	  <router-link :to="'/getdeliver/'+item.id">确定交付</router-link>
                        </span>
                        <span>
                          <router-link :to="'/harvestlist/'+item.id">动态详情</router-link>
                        </span>
                       <span v-if="item.e_status == 1">
                        	  <router-link :to="'/engineerEvaluate/'+item.id">评价雇主</router-link>
                        </span>
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
    import { Navbar, TabItem } from 'mint-ui';
    import { Header } from 'mint-ui';
    import { Search } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
    import { Spinner } from 'mint-ui';
    import { Field } from 'mint-ui';
    import axios from 'axios'

    export default {
	  name: 'myaccepttaskslist',
        data () {
            return {
                total: 0,
                page: 1,
                lastpage: 0,
                ifload: true,
                loading: false,
                isnot: true,
                list: [],
                value: '',
                keywork: '',
                selected: '0',
            }
        },
	    components:{
	  	    indexTab,
        },
        watch: {
           selected(){
               this.ifload = true
               this.isnot = true
               this.page = 1
               this.list = []
               this.loadMore()
           } 
        },
		methods: {
            gosearch() {
               this.ifload = true
               this.isnot = true
               this.page = 1
               this.list = []
               this.loadMore()
            },
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    this.getList()
                }, 1000);
            },
            getList () {
                axios.get(this.baseCont.PHP_API + '/user/myaccepttaskslist', {
                    params: {
                        page: this.page,
                        keywork: this.keywork,
                        status: this.selected
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
    .myaccepttaskslist{
        height:100vh;
        padding-bottom: 2rem;
        background-color: #f5f5f5 !important;   
    }
    .ve-list-box{
        padding: 0rem .3rem;
        min-height: 100%;
    }
    .ve-no-message{
        padding:0.3rem 0rem;
    }
    .ve-list-topbox{
        margin-top:0.2rem;
        background:#fff;
        border-radius:.1rem;
        padding:.2rem .3rem;
    }
    .ve-list-status{
        padding:.1rem 0rem;
        border-bottom:.01rem solid #ccc;
        font-size: 0.5rem;
    }
    .ve-list-status>span{
        float:right;
    }
    .ve-list-tit>a{
        color:#1b1a1a;
    }
    .ve-list-tit{
        width: 100%;
        zoom: 1;
        display: inline-block;
        margin-top:0.1rem;
        font-size: 0.16rem;
        overflow:hidden;
    }
    .ve-left-bothtit{
        display:inline-block;
        float:left;
        width:70%;
        min-height: 1rem;
        font-size: 0.4rem;
    }
    .ve-right-bothtit{
        display:inline-block;
        float:right;
        width:30%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size: 0.4rem;
    }
    .ve-list-operation{
        display: inline-block;
        margin-top:.2rem;
    }
    .ve-list-operation>span{
        padding: .08rem .2rem;
        border:0.02rem solid #199ED8;
        border-radius: .1rem;
        color: #199ED8;
        margin-right: .2rem;
        display: inline-block;
        margin-bottom: .3rem;
    }
    .ve-send-code{
        color: #fff;
        padding:0rem .2rem;
        background: #1296DB;
    }
  .ve-list-operation>span>a{
        color: #199ED8;
    }
</style>