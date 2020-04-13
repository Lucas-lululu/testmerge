<template>
  <el-container style="background:#f2f2f2;" class="div-besp">
    <el-header>
      <headers @menuld="menuld"></headers>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']" v-if="titlenav!=6">
          <el-menu-item
            v-for="(item,i) in arrList"
            :key="i"
            :index="item.index"
            @click="addTab(item.index,item.title)"
          ><router-link to='/newbook'>{{item.title}}</router-link></el-menu-item>
        </el-menu>

        <el-menu class="el-menu-vertical-demo" v-else :default-openeds="['1','2','3']">
          <el-submenu :index="item.id" v-for="item in menu" :key="item.id">
            <template slot="title">
              <span>{{item.obj.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="i.index"
                v-for="i in item.obj.list"
                :key="i.id"
                @click="addTab(i.index,i.title)"
              >{{i.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 增加的标签 -->
      <el-main class="bg-white">
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          closable
          @tab-click="_changeItem_"
          @tab-remove="removeTab"
          class="content"
        >
          <el-tab-pane
            v-for="(item,index) in editableTabs"
            :key="index + 'item.title'"
            :label="item.title"
            :name="item.name"
          ><router-view/>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import bus from '@/until/bus.js'
import headers from "../components/headers";
// import netBooking from "../components/Booking/Book_newBooking.vue";
// import Booktable from "../components/Booking/Book_table.vue";
// import navLabel from "../components/navLabel.vue";
// import setcontent from '@/components/SetUp/Set_System/Set_Sys_Content.vue'
// import about from '@/view/about.vue'
// import staffman from '@/components/SetUp/Set_System/Set_Sys_StaffManTable.vue'
// import staff from '@/components/SetUp/Set_System/Set_Sys_Staff.vue'
// import jurisd from '@/components/SetUp/Set_System/Set_Sys_jurisdiction/roueSet.vue'
export default {
  components: {
    headers,
    // navLabel,
    // netBooking,
    // Booktable,
    // setcontent,
    // about,
    // staffman,
    // staff,
    // jurisd
  },
  data() {
    return {
      deliveindex: "",
      arr: [
        {
          arrindex: 1,
          list: [
            {
              title: "新增订舱",
              index: "11"
            },
            {
              title: "订舱操作",
              index: "12"
            },
            {
              title: "计划调度",
              index: "13"
            },
            {
              title: "装柜运输",
              index: "14"
            },
            {
              title: "数据处理",
              index: "15"
            },
            {
              title: "申报通关",
              index: "16"
            },
            {
              title: "等待上船",
              index: "17"
            },
            {
              title: "上船签到",
              index: "18"
            }
          ]
        },
        {
          arrindex: 2,
          list: [
            {
              title: "新增计划",
              index: "21"
            },
            {
              title: "调度",
              index: "22"
            },
            {
              title: "装柜",
              index: "23"
            },
            {
              title: "进港",
              index: "24"
            }
          ]
        },
        {
          arrindex: 3,
          list: [
            {
              title: "新增申报",
              index: "31"
            },
            {
              title: "申报预录",
              index: "32"
            },
            {
              title: "正常申报",
              index: "33"
            },
            {
              title: "验收方形",
              index: "34"
            },
          ]
        },
      ],
      menu: [
        {
          id: "1",
          obj: {
            title: "系统设置",
            list: [
              {
                id: "1",
                index: "61",
                title: "角色设置"
              },
              {
                id: "2",
                index: "62",
                title: "员工管理"
              }
            ]
          }
        },
        {
          id: "2",
          obj: {
            title: "客户",
            list: [
              {
                id: "1",
                index: "63",
                title: "客户"
              },
              {
                id: "2",
                index: "64",
                title: "货运代理"
              },
              {
                id: "3",
                index: "65",
                title: "运输企业"
              },
              {
                id: "4",
                title: "报关企业"
              }
            ]
          }
        }
      ],
      viewName: '',
      // headers传进来的值
      titlenav: 1,
      // 左边标签的数组
      arrList: "",
      editableTabsValue: "0",
      editableTabs: [
        {
          title: "首页",
          name: "0",
          content: "首页"
          // close: 'closable'
        }
      ],
      headTitle: "", // 面包屑第一级
      title: "", // 面包屑第二级
      tabindex: 1, //当前tab的数量
      // 侧边栏的名字
      RolesetTitle: '首页'
    };
  },
  methods: {
    // 接收表格的名字和index
    tableNameIndex(a) {
      this.tableName = a.tableName;
      this.addTab(a.tableIndex,a.tableName)
    },
    // 头部标签触发事件
    _changeItem_(obj) {
      this.title = obj.label;
      // 把标签卡的值给他
      this.viewName = obj.name
      this.RolesetTitle = obj.label;
    },
    childvalue(value) {
      this.deliveindex = value;
    },
    // 判断选项卡的下标是否重复，重复则不进行添加
    compare(arr, data) {
      let flag = false;
      for (let key in arr) {
        if (arr[key].name == data.name) {
          flag = true;
        }
      }
     return flag;
    },
    addTab(i, ititle) {
  
      let data = {
        title: ititle,
        name: i, //与选项卡绑定值 value 对应的标识符，表示选项卡别名
        content: "New Tab content"
      };
      this.viewName = i
      var flag= this.compare(this.editableTabs, data);
      if(flag==false){
        this.editableTabs.push(data);
      }
      this.editableTabsValue = i;
      this.title = ititle;

      this.RolesetTitle = ititle
    },
    removeTab(targetName) {
      let tabs = this.editableTabs; //数组
      let activeName = this.editableTabsValue; //当前选中的tab
      if (activeName == targetName) {
        //当前选中的tab=c传进来的参数
        tabs.forEach((tab, index) => {
          if (tab.name == targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name; // 删除后的tab
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      for( let key of this.editableTabs){
        if(key.name==this.editableTabsValue){
          this.viewName=key.name
        }
      }
    },
    // 把headers的值尽心循环，值相等赋值
    changeItem(num) {
      for (let key of this.arr) {
        if (key.arrindex == num) {
          this.arrList = key.list;
        }
      }
    },
    //接受heasers的值
    menuld(v) {
      this.changeItem(v.key);
      this.titlenav = v.key;
    }
  },
  created() {
    this.changeItem(1);
    // Set_Sys_RoleTable传过来的值
    bus.$on('prevopenRole',(v)=>{
      this.tableName = v.StaffTableName;
      this.addTab(v.tableIndex,v.tableName)
    }),
    // 员工管理页面传过来的值
    bus.$on('prevstaff',(v)=>{
      this.viewName=v.StaffTableIndex;
      this.addTab(v.StaffTableIndex,v.StaffTableName)
    })
    // 角色设置传过来的值
    bus.$on('prevRoleTable1',(v)=>{
      this.viewName=v.v_RoleName;
      this.addTab(v.v_RoleName,v.v_RoleName);
})
  }
};
</script>

<style scoped>
.el-header {
  padding: 0 0;
}
.div-besp {
  width: 100%;
  height: 100%;
  background: yellow;
  position: absolute;
}
/* 容器位置 */
.content {
  position: relative;
  margin-left: -1px;
  /* width: 1688px; */
}
/* 选项单机效果 */
.el-menu-item:focus,
.el-menu-item:active {
  border-right: 3px royalblue solid;
}
/* 单机空白遮幕还在 */
.el-menu-item.is-active {
  border-right: 3px royalblue solid;
  background-color: #ecf5ff;
}
/* 选项的高度 */
.el-menu-item,
.el-submenu__title {
  height: 40px;
  line-height: 40px;
}
.bg-white {
  background: #fff;
  position: relative;
  margin-left: 15px;
  margin-top: 15px;
}
/* .navLabelClass{
  margin-left:20px;
}
.netBookingClass{
width: 100%;
} */
.suoxiao {
  width: 80%;
}
</style>