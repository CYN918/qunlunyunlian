<template>
    <div class="message">
        <mt-header title="发布评价">
            <router-link to="/myaccepttaskslist" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-cell title="沟通是否融洽">
            <span><star @starNumber="potcommunicate_level"></star></span>
        </mt-cell>
        <mt-cell title="要求是否详细">
            <span><star @starNumber="potrequirement_level"></star></span>
        </mt-cell>
         <mt-cell title="专业程度">
            <span><star @starNumber="potprofessional_level"></star></span>
        </mt-cell>
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
                communicate_level: 0,
                requirement_level: 0,
                professional_level: 0,
            }
        },
	    components:{
              indexTab,
              star
        },
		methods: {
            potcommunicate_level (e) {
               this.communicate_level = e
            },
            potrequirement_level (e) {
               this.requirement_level = e
            },
             potprofessional_level (e) {
               this.professional_level = e
            },
            refergo () {
             
                        
                this.subumting = true
                axios.post(this.baseCont.PHP_API + '/user/postengineerevaluate', {
                    id: this.$route.params.id,
                    communicate_level: this.communicate_level,
                    requirement_level: this.requirement_level,
                    professional_level: this.professional_level,
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