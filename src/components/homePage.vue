<template>
<!-- 首页选项 -->
  <div class="bg">
    <el-col :xs="24" :sm="12" class="bg-elcol">
      <div class="">
        <div class="d-flex verthead">
          <div class="vert"></div>
          <div>订舱</div>
        </div>
        <div>111111</div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="11" class="bg-elcol">
      <div class="">
        <div class="d-flex verthead">
          <div class="vert"></div>
          <div>运输</div>
        </div>
        <div>111111</div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" class="bg-elcol">
      <div class="">
        <div class="d-flex verthead">
          <div class="vert"></div>
          <div>报关</div>
        </div>
        <div>111111</div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" class="bg-elcol">
      <div class="">
        <div class="d-flex verthead">
          <div class="vert"></div>
          <div>文件</div>
        </div>
        <div>111111</div>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.bg{
width:100%;
height:300px;
background:#f2f2f2;
border-radius: 3;
}
.vert {
  height: 20px;
  width: 5px;
  background: #0542c0;
  margin-right:5px;
}
.verthead{
    border-bottom: 1px solid #f2f2f2;
}
.bg-elcol{
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    margin-right:5px;
}
.bg-elcol:hover{
    border:1px solid #0542c0 ;
}
</style>
