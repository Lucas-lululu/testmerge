<template>
  <!-- 系统设置/员工信息 -->
  <div>
    <ul class="d-flex ui-more">
      <li>
        用户名
        <input type="text" />
      </li>
      <li>
        密码
        <input type="password" />
      </li>
      <li>
        姓名
        <input type="text" />
      </li>

      <li>
        英文名
        <input type="text" />
      </li>

      <li>
        性别
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
      </li>
      <li>
        手机
        <input type="text" />
      </li>

      <li>
        电话
        <input type="text" />
      </li>
      <li>
        公司邮箱
        <input type="text" />
      </li>
      <li>
        私人邮箱
        <input type="text" />
      </li>
      <li>
        紧急联系人
        <input type="text" />
      </li>
      <li>
        紧急联系电话
        <input type="text" />
      </li>
      <li>
        备注
        <input type="text" />
      </li>
    </ul>
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
          label: "开船日期"
        },
        {
          valuebox: "选项2",
          label: "到港时间"
        }
      ]
    };
  }
};
</script>

<style scoped>
.ui-more {
  width: 80vw;
  height: 10vh;
  flex-wrap: wrap
}
.ul-more li {
  display: block;
  float: left;
}
</style>