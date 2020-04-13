<template>
    <div>
      <el-table :data="staffMan" style="width: 98%;margin:15px auto;border-color: #e6e6e6;border:1px solid #e6e6e6" @cell-dblclick='staff'>
    <el-table-column type="selection" width="60"></el-table-column>
    <el-table-column  prop="com1" label="姓名" ></el-table-column>
    <el-table-column  prop="com2" label="联系方式"></el-table-column>
    <el-table-column prop="com3" label="用户名"></el-table-column>
    <el-table-column prop="com4" label="所属公司"></el-table-column>
    <el-table-column prop="com5" label="账号性质"></el-table-column>
    </el-table>
    </div>

</template>

<script>
import bus from '@/until/bus.js'
export default {
data(){
    return{
         staffMan: [
        {
          com1: "booking",
          com2: "135123456781",
          com3: "booking",
          com4: "浙江虎鲸科技有限公司",
          com5: "在职",
        StaffTableName:'booking',
        StaffTableIndex:'10056',
        }
      ]
    }
},
methods:{
  staff(column){
    bus.$emit('prevstaff',column);
  }
}    
}
</script>

<style scoped>

</style>