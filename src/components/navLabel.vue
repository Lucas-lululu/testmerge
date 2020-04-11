<template>
<!-- 面包屑 -->
    <div class="d-flex">
        <div class="label"></div>
        <div class="name">{{headTitle}}-{{title}}</div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    headTitle: {
        type: String
    }
  },
  data() {
    return {
      twoName: ""
    };
  }
};
</script>

<style scoped>
.label{
    display: inline-block;
    width: 3px;
    height: 16px;
    background: royalblue;
    position: relative;
    top: 3px;
}
.name{
    color: #003CC8;
    font-size: 16px;
    margin-left:13px;
}
.name:hover{
    color: #777;
    outline: 0;
    cursor: pointer;
}
</style>