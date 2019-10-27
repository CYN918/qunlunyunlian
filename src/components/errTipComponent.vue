<!--
**错误提示公用组件
**author:cyn
**导入     import 组件 from '@/components/'
**注册	components:{组件}
-->
<template>
<div class="errTipComponent">
    <div class="errTips">{{errMsg}}</div>
</div>
</template>

<script>
export default {
  name: 'errTipComponent',
  props: ['errMsg'],
  data () {
    return {

    };
  },
  mounted () {
    this.initData();
  },
  methods: {
    initData () {

    }
  }
};
</script>

<style scoped>
.errTips {
    font-size: 0.4rem;
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 0.2rem 0.4rem;
    border-radius: 0.15rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>
