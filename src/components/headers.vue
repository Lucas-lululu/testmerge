<template>
<!-- 头部标题栏 -->
  <div class="bg-color d-flex">
    <div class="title">X2.BOOKING</div>
    <el-menu :default-active="activeIndex" class="el-menu-demo ep-position" mode="horizontal" @select="handleSelect" background-color= #0542C0 text-color=#fff active-text-color=#fff>
      <el-menu-item @click.native="_change_(item.title)"   v-for='(item,i) in headernav' :key='i'  :index=item.index>{{item.title}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:'headers',
  data(){
    return{
       headernav:[
        {title:'订舱',index:"1"},
        {title:'运输',index:"2"},
        {title:'报关',index:"3"},
        // {title:'文件',index:"4"},
        // {title:'结算',index:"5"},
        {title:'设置',index:"6"},
        ],
        // 初始停留位置
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods:{
    _change_(title) {
      this.$emit('_headerTitle_', title)
    },
    //切换之后的方法
     handleSelect(key,keyPath) {
       let obj = {
         key,
         keyPath
       }
       this.$emit('menuld', obj)
      }
  }
   
}
</script>

<style scoped>
.bg-color{
  height:60px;
  width: 100%;
  background: #0542C0;

}
.title{
  position: relative;
  width: 200px;
  height: 100%;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}
.nav-title{
  font-size: 14px;
  display: block;
  padding: 0 20px;
  color: white;
  line-height: 60px;
}
.nav-title:visited{
  font-size:16px;
}
.el-menu.el-menu--horizontal {
    border-bottom: 0;
}
.el-menu-item{
  padding:0 30px;
}
/* 获取焦点后变大 */
.el-menu-item:focus{
  font-size: 18px;
  border-bottom:3px solid #fff;
}

</style>