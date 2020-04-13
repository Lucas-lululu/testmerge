<template>
  <el-table
    :data="tableData"
    style="width: 98%;margin:15px auto;border-color: #e6e6e6;border:1px solid #e6e6e6"
    @row-dblclick="prevRoleTable"
  >
    <el-table-column type="selection" width="60"></el-table-column>
    <el-table-column prop="v_RoleName" label="角色名称" width="noeHeight"></el-table-column>
  </el-table>
</template>
<script>
import bus from "@/until/bus.js";
export default {
  data() {
    return {
      nowHeigh: window.innerHeight - "20px",
      tableData: []
    };
  },

  methods: {
    getRoleSet() {
      var aaa = {
        Type: "S",
        page: "1",
        Size: "10",
        v_System: this.config.systemId,
        v_CompanyId: "201808101442025910"
      };
      this.$axios
        .post(this.config.url + "RoleDetail", "JsonData=" + JSON.stringify(aaa))
        .then(res => {
          var retValue = res.data;
          if (retValue.code == 200) {
            this.tableData = retValue.data.data;
          }
        });
    },
    prevRoleTable(row) {
      // bus.$emit("prevRoleTable1", row);
      console.log(row)
      this.$router.push({ path: "/staff/role", query: { id: row.v_Id } });
    }
  },
  created() {
    this.getRoleSet();
  }
};
</script>

<style scoped>
</style>