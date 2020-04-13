<template>
<div class='netBookingContent'>
  <div class="bookDiv">
    <div class="bookingButton">新增</div>
    <div class="bookingButton">复制</div>
    <div class="bookingButton">查看</div>
    <div class="bookingButton">删除</div>
    <div class="bookingRate">订舱进度</div>
 
        <div class="d-flex choseBox">
               <!-- 单选框 -->
    <div class="checksData">日期：</div>
    <el-checkbox v-model="checked1" style='margin-right:8px'></el-checkbox>
    <!-- 下拉选择框 -->
    <el-select v-model="valuebox" placeholder="--请选择--" style="width:99px;" size="mini" class="mar-5" :disabled='!checked1'>
      <el-option 
        size="mini"
        v-for="item in options"
        :key="item.valuebox"
        :label="item.label"
        :value="item.valuebox"
      ></el-option>
    </el-select>
    <!-- 起始日期 -->
    <div class="block mar-5" >
      <span class="demonstration"></span>
      <el-date-picker 
        :disabled='!checked1'
        size="mini"
        style="width:85px"
        :picker-options="pickerOptions0"
        v-model="value1"
        type="date"
        placeholder="--请选择--"
      ></el-date-picker>
    </div>
    <!-- 结束日期 -->
    <div class="block mar-5">
      <span class="demonstration"></span>
      <el-date-picker
        :disabled='!checked1'
        size="mini"
        style="width:85px"
        :picker-options="pickerOptions1"
        v-model="value2"
        type="date"
        placeholder="--请选择--"
      ></el-date-picker>
    </div>
    <!-- 条件框 -->
    <div class="checksData">条件：</div>
    <el-checkbox v-model="checked2"></el-checkbox>
    <!-- 下拉选择 -->
        <el-select v-model="valuebox2" placeholder="--请选择--" style="width:95px;margin:0 5px;" size="mini" :disabled='!checked2'>
      <el-option
        size="mini"
        v-for="item in options"
        :key="item.valuebox"
        :label="item.label"
        :value="item.valuebox"
      ></el-option>
    </el-select>
    <!-- 搜索 -->
    <input type="text" class="serach" :disabled='!checked2'>
    <!-- 搜索按钮 -->
    <div class="searchButton">搜索</div> 
    </div>
    
  </div>
</div>
</template>

<script>
export default {
    components:{

    },
  data() {
    return {
      checked1: false,
      checked2:false,
      options: [
        {
          valuebox: "选项1",
          label: "开船日期"
        },
        {
          valuebox: "选项2",
          label: "到港时间"
        }
      ],
         pickerOptions0: {
                disabledDate: (time) => {
                    if (this.value2 != "") {
                        return time.getTime() > Date.now() || time.getTime() > this.value2;
                    } else {
                        return time.getTime() > Date.now();
                    }

                }
            },
            pickerOptions1: {
                disabledDate: (time) => {
                    return time.getTime() < this.value1 || time.getTime() > Date.now();
                }
            },
      valuebox: "",
      valuebox2: "",
      value1: "",
      value2: ""
    };
  }
};
</script>

<style scoped>
.bookDiv {
  height: 40px;
  width: 100%;
  margin-top: 10px;
  display: flex;
}
/* 截至日期位置的位置 */
.choseBox{
    position: absolute;
    right:-1%;
}


</style>