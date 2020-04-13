<template>
  <div class="tableContent">
    <el-table :data="tableData" :border="true" :height="400" @cell-dblclick="delivrey">
      <el-table-column type="selection" width="80"></el-table-column>
      <el-table-column fixed prop="q1" label="公司编号" width="145rem"></el-table-column>
      <el-table-column fixed prop="q2" label="合同编号" width="120"></el-table-column>
      <el-table-column prop="q3" label="发票编号" width="120"></el-table-column>
      <el-table-column prop="q4" label="订舱号" width="120"></el-table-column>
      <el-table-column prop="q5" label="客户名称" width="300"></el-table-column>
      <el-table-column prop="q6" label="收货人" width="120"></el-table-column>
      <el-table-column prop="q7" label="启运港" width="120"></el-table-column>
      <el-table-column prop="q8" label="卸货港" width="120"></el-table-column>
      <el-table-column prop="q9" label="目的港" width="120"></el-table-column>
      <el-table-column prop="q10" label="承运人" width="120"></el-table-column>
      <el-table-column prop="q11" label="箱型箱量" width="120"></el-table-column>
      <el-table-column prop="q12" label="开船日期" width="120"></el-table-column>
      <el-table-column prop="q13" label="到港日期" width="120"></el-table-column>
      <el-table-column prop="q14" label="订舱进度" width="120"></el-table-column>
      <el-table-column fixed="right" prop="q15" label="操作人" width="120"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      height: window.innerHeight,
      tableData: [
        {
          q1: "2016-05-03",
          q2: "王小虎",
          q3: "上海",
          q4: "普陀区",
          q5: "上海市普陀区金沙江路 1518 弄",
          q6: 200333,
          q7: "",
          q8: "",
          q9: "",
          q10: "上海市普陀区金沙江路 1518 弄",
          q11: 200333,
          q12: "",
          q13: "",
          q14: "",
          q15: "",
          id: "1",
                tableName:'王小虎',
      tableIndex:'999',
        }
      ]
    };
  },
  methods: {
    delivrey(column){
      this.$emit('tableNameIndex',column);
    }
  }
};
</script>

<style scoped>
.tableContent {
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  /* width: 1668px; */
  width: 100%;
}
</style>