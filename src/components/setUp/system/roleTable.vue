<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="selection" width="60"></el-table-column>
    <el-table-column prop="v_RoleName" label="角色名称" width="noeHeight"></el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      nowHeigh: window.innerHeight - "20px",
      tableData: []
    };
  },

  methods: {
    getRoleSet() {
      var JsonData = {
        Type: "S",
        page: "1",
        Size: "10",
        v_System: this.config.systemId,
        v_CompanyId: "201808101442025910"
      };
      this.$axios
        .post(this.config.url+"RoleDetail", "JsonData=" + JSON.stringify(JsonData))
        .then(res => {
          var retValue = res.data;
          if(retValue.code==200){
            this.tableData=retValue.data.data;
          }
        });
    }
  },  
  created() {
    this.getRoleSet();
  },
};
</script>

<style scoped>
</style>