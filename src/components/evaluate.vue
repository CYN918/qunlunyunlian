<template>
    <div class="message">
        <mt-header title="发布动态">
            <router-link to="/mytasklist" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-cell title="技术水平">
            <span><star @starNumber="getTechnical"></star></span>
        </mt-cell>
        <mt-cell title="完成时间">
            <span><star @starNumber="getComplettime"></star></span>
        </mt-cell>
        <mt-checklist
            align="right"
            title="印象标签"
            v-model="tag"
            :options="['态度好', '响应快', '很专业']">
        </mt-checklist>
        <mt-field placeholder="追加标签" v-model="tagspan"></mt-field>

        <mt-field style="border-top:0.01rem solid #ccc;" label="评价内容" placeholder="评价内容" type="textarea" rows="4" v-model="desc"></mt-field>

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
    import star from "@/view/assembly/star";
    import { Checklist } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import axios from 'axios'

    export default {
	  name: 'message',
        data () {
            return {
                subumting: false,
                tag: [],
                desc: '',
                tagspan: '',
                technical: 0,
                complettime: 0,
            }
        },
	    components:{
              indexTab,
              star
        },
		methods: {
            getTechnical (e) {
               this.technical = e
            },
            getComplettime (e) {
               this.complettime = e
            },
            refergo () {
                if(this.tag.length == 0){
                    Toast({
                        message: '请选择印象标签',
                        duration: 2000
                    });
                    return false
                }
                if(!this.desc){
                    Toast({
                        message: '请填写评价内容',
                        duration: 2000
                    });
                    return false        
                }
                if(this.tagspan){
                    this.tag.push(this.tagspan)
                }
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/evaluate', {
                    id: this.$route.params.id,
                    desc: this.desc,
                    tag: this.tag,
                    technical: this.technical,
                    complettime: this.complettime,
                })
                .then(response => {
                    this.subumting = false
                    if(response.data.code == 200){
                        Toast({
                            message: '发布成功',
                            duration: 1000
                        });
                        this.$router.push({path: '/mytasklist'});
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
            }
        },
        mounted () {
        }
	}
</script>
<style scoped>
    .ve-bottom-tj{
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding:0rem 0.4rem;
    }
</style>