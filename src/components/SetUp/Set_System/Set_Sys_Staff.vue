<template>
  <!-- 系统设置/员工信息 -->
  <div class="d-flex">
    <div class="essent">基本信息</div>
    <table>
      <tr>
        <td>用户：</td>
        <td>
          <input class="SetInput" type="text" />
        </td>
        <td>密码:</td>
        <td>
          <input class="SetInput" type="password" />
        </td>
        <td>姓名:</td>
        <td>
          <input class="SetInput" type="text" />
        </td>
      </tr>
      <tr>
        <td>英文名：</td>
        <td>
          <input class="SetInput" type="text" />
        </td>
        <td>性别：</td>
        <td>
          <el-select
            v-model="valuebox"
            placeholder="--请选择--"
            style="width:99px;"
            size="mini"
            class="mar-5"
          >
            <el-option
              size="mini"
              v-for="item in options"
              :key="item.valuebox"
              :label="item.label"
              :value="item.valuebox"
            ></el-option>
          </el-select>
        </td>
        <td>手机：</td>
        <td>
          <input class="SetInput" type="text" />
        </td>
      </tr>
      <tr>
        <td>电话:</td>
        <td>
          <input class="SetInput" type="text" />
        </td>
        <td>公司邮箱:</td>
        <td>
          <input class="SetInput" type="text" />
        </td>
        <td>私人邮箱:</td>
        <td>
          <input class="SetInput" type="text" />
        </td>
      </tr>
      <tr>
        <td>紧急联系人:</td>
        <td>
          <input class="SetInput" type="text" />
        </td>
        <td>紧急联系电话:</td>
        <td>
          <input class="SetInput" type="text" />
        </td>
      </tr>
      <tr rowspan="3">
        <td >备注:</td>
        <td colspan="2">
          <input class="SetInput" type="text" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valuebox: "",

      options: [
        {
          valuebox: "选项1",
          label: "男"
        },
        {
          valuebox: "选项2",
          label: "女"
        }
      ]
    };
  }
};
</script>

<style scoped>
table {
  width: 98%;
  margin: 1%;
  border-collapse: separate;
  border-spacing: 10px;
}
.essent{
width: 80px;
margin-right:20px;
margin-left:20px;
margin-top:33px;
    color: #A2A2A2;
    font-size: 15px;
    text-align: center;
    font-weight: bold;

}
</style>