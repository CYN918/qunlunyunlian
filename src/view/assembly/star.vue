<template>
    <div class="star">
        <div class="ve-star-xin" v-for="(item,index) in list" :key='index'>
            <div @click="star(index)"><img :src="xing>index?stara:starb"/></div>
        </div>
    </div>
</template>
<script>
    
    export default {
	  name: 'star',
        data () {
            return {
                list:[0,1,2,3,4],
                stara:'//img.qlylian.com/images/m/on.png',//亮星星
                starb:'//img.qlylian.com/images/m/off.png',//暗星星
                xing:0
            }
        },
		methods: {
            star(val){
                this.xing = val+1
                this.$emit('starNumber',val+1);
            }
        },
        mounted () {
        }
	}
</script>
<style scoped>
    .ve-star-xin>div{
        float: left;
        display: inline-block;
        width: 20%;
    }
    .ve-star-xin>div>img{
        width: 50%;
    }
</style>