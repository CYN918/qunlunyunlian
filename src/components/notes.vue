<template>
    <div class="notes">
        <mt-header title="项目备注">
            <router-link to="/mytasklist" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="ve-notes-div" >
            <div>项目备注：</div>
            <mt-field class="ve-notes-box" placeholder="项目备注" type="textarea" rows="4" v-model="desc"></mt-field>
        </div>

        <div class="ve-bottom-tj">
            <mt-button  size="large" :disabled="subumting"  @click="refergo" :plain="true" type="primary">
                <span v-if="!subumting">提交</span>
                <span style="display:table-cell;" v-else><mt-spinner :type="2" color="#26a2ff"></mt-spinner></span>
            </mt-button>
        </div>

        <index-tab page="3"></index-tab>
    </div>
</template>
<script>
    import indexTab from '@/components/indexTabComponent';
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    
    export default {
	  name: 'notes',
        data () {
            return {
                sel: '',
                desc: '',
                subumting: false,
            }
        },
	    components:{
	  	    indexTab,
        },
		methods: {
            refergo () {
                if(!this.desc){
                    Toast({
                        message: '请选择项目专业',
                        duration: 2000
                    });
                    return false
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/tasknotes', {
                    desc: this.desc,
                    id: this.$route.params.id
				})
				.then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '修改成功',
                            duration: 2000
                        });
		    	        this.$router.push({path: '/mytasklist'});
                    }else if(response.data.code == 10003){
                        if(response.data.data.length >0){
                            Toast({
                                message: response.data.data[0],
                                duration: 2000
                            });
                        }
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
				})
				.catch(function (error) {
					console.log(error)
				})
            },
            getNotes () {
                axios.get(this.baseCont.PHP_API + '/user/tasknotes', {
                    params: {
                        id: this.$route.params.id
                    }
                })
                .then(response => {
                    if (response.data.code === 200) {
                        this.desc = response.data.data.remarks
                    }else{
                        Toast({
                            message: response.data.message,
                            duration: 2000
                        });
                    }
                })
            }
        },
        mounted () {
            this.getNotes()
        }
	}
</script>
<style scoped>
    .ve-notes-div{
        padding:0.2rem 0.3rem;
    }
    .ve-notes-div>div{
        margin-bottom: .3rem;
    }
    .ve-bottom-tj{
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
</style>