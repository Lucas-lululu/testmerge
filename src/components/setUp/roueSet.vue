<template>
  <div>
    <div style="margin: 20px 20px 0 20px;">
      <span
        style="display: inline-block;width: 3px;height: 16px;background: royalblue;position: relative;top: 3px;"
      ></span>
      <span style="font-size: 16px;margin-left: 5px;">
        <a class="aColor" href="List.html">
          <span class="change-language" data-name="SystemSetup">系统管理</span>
        </a>
      </span>
      <span style="font-size: 16px;margin-left: 5px;">
        <label class="label_dg">/</label>
        <a class="aColor" href="List.html">
          <span class="change-language" data-name="RoleSetting">角色设置</span>
        </a>
      </span>
      <span style="font-size: 16px;">
        <label class="label_dg">/</label>
        <a class="aColor change-language" data-name="Save" href name="title">保存</a>
      </span>
    </div>
    <div class="contentBottom">
      <div class="tabChanges tabChanges1" style="display: block;">
        <table>
          <tr>
            <td>
              <div class="inline-div change-language" data-name="RoleName">角色名称</div>
            </td>
            <td>
              <input
                class="inline-input1"
                type="text"
                autocomplete="off"
                name="v_RoleName"
                id="v_RoleName"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div class="inline-div change-language" data-name="Remark">备注</div>
            </td>
            <td style="height: 100px">
              <textarea class="textareabox" autocomplete="off" name="v_Remark"></textarea>
            </td>
          </tr>
        </table>

        <div style="margin:15px;font-size: 16px;">
          <span
            style="background: royalblue;display: inline-block;width: 10px;height: 10px;margin-right: 5px;"
          ></span>
          <span class="change-language" data-name="CheckAccess">选择权限</span>
          <span style="color: red;font-size: 13px;">(滚动选择)</span>
        </div>

        <div class="limitList" style="height: 450px;">
          <div
            class="conCheckbox"
            style="margin-left: 35px;height: 100%;overflow-y: auto;margin-right: -17px;"
          ></div>
        </div>
        <div class style="width: 50%;float: left;">
          <div
            style="margin-right: 0px;"
            class="pareCon submitBtn submitBtntitle backbtn change-language"
            data-name="Save"
            lay-submit
            lay-filter="submit"
            @click="SubmitBtn(false)"
          >保存</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Qx from "./AddEdit.js";
export default {
	created(){
		Qx.SubmitBtn()
		Qx.OnLoad()
		Qx.getUserRoleList()
		Qx.getUserRoleOne()
		Qx.checkAllChildren()
	}
};
</script>

<style>
@import "./publicstyle.css";
@import "./universal_addStyle.css";
</style>