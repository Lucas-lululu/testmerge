<template>
    <div>
    <el-table :data="staffMan" style="width: 98%;margin:15px auto;border-color: #e6e6e6;border:1px solid #e6e6e6" @cell-dblclick='staff'>
    <el-table-column type="selection" width="60"></el-table-column>
    <el-table-column  prop="ced1" label="姓名" ></el-table-column>
    <el-table-column  prop="ced2" label="联系方式"></el-table-column>
    <el-table-column prop="ced3" label="用户名"></el-table-column>
    <el-table-column prop="ced4" label="所属公司"></el-table-column>
    <el-table-column prop="ced5" label="账号性质"></el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
 data(){
    return{
         staffMan: [
        {
          com1: "黛西",
          ced2: "135123456781",
          ced3: "ccc",
          ced4: "中策橡胶集团有限公司",
          ced5: "在职",
        StaffTableName:'黛西',
        StaffTableIndex:'543543',
        }
      ]
    }
},   
}
</script>

<style scoped>

</style>