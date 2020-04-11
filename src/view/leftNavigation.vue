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
          >{{item.title}}</el-menu-item>
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
              <!-- <el-menu-item index="6-2" @click="addTab('6-2','员工管理')">员工管理</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-submenu index="2">
            <template slot="title">
              <span>客户</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-3" @click="addTab('6-3','客户')">客户</el-menu-item>
              <el-menu-item index="6-4" @click="addTab('6-4','货运代理')">货运代理</el-menu-item>
              <el-menu-item index="6-5" @click="addTab('6-5','运输企业')">运输企业</el-menu-item>
              <el-menu-item index="6-6" @click="addTab('6-6','报关企业')">报关企业</el-menu-item>
            </el-menu-item-group>
          </el-submenu>-->
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
            :key="index"
            :label="item.title"
            :name="item.name"
          >
            <!-- 标签页的内容 -->
            <navLabel :title="title" :headTitle="headTitle" class="navLabelClass"></navLabel>
            <netBooking class="netBookingClass"></netBooking>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import bus from '@/util/Bus'
import headers from "../components/headers";
import netBooking from "../components/booking/newBooking.vue";
import navLabel from "../components/navLabel.vue";
export default {
  components: {
    headers,
    // netBooking,
    navLabel,
    netBooking
  },
  data() {
    return {
      datalist: "",
      deliveindex: "",
      arr: [
        {
          arrindex: 1,
          list: [
            {
              title: "新订舱",
              index: "11"
            },
            {
              title: "订舱中",
              index: "12"
            },
            {
              title: "正常操作",
              index: "13"
            },
            {
              title: "等待上船",
              index: "14"
            },
            {
              title: "已上船",
              index: "15"
            },
            {
              title: "历史业务",
              index: "16"
            },
            {
              title: "退关",
              index: "17"
            },
            {
              title: "取消订舱",
              index: "18"
            },
            {
              title: "全部订舱",
              index: "19"
            }
          ]
        },
        {
          arrindex: 2,
          list: [
            {
              title: "对货",
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
              title: "申报",
              index: "24"
            },
            {
              title: "进港",
              index: "25"
            },
            {
              title: "放空",
              index: "26"
            },
            {
              title: "过夜",
              index: "27"
            },
            {
              title: "重新装箱",
              index: "28"
            },
            {
              title: "全部运输",
              index: "29"
            }
          ]
        },
        {
          arrindex: 3,
          list: [
            {
              title: "预报关",
              index: "31"
            },
            {
              title: "港口数据申报",
              index: "32"
            },
            {
              title: "实际申报",
              index: "33"
            },
            {
              title: "海关检查",
              index: "34"
            },
            {
              title: "退关",
              index: "35"
            },
            {
              title: "重新装箱",
              index: "36"
            },
            {
              title: "已放行",
              index: "37"
            },
            {
              title: "历史业务",
              index: "38"
            }
          ]
        },
        {
          arrindex: 3,
          list: []
        }
      ],
      menu: [
        {
          id: '1',
          obj: {
            title: "往来客户",
            list: [
              {
                id: '1',
                index: "6-1",
                title: "角色设置"
              },
              {
                id: '2',
                index: "6-2",
                title: "员工管理"
              }
            ]
          }
        },
        {
          id: '2',
          obj: {
            title: "客户",
            list: [
              {
                id: '1',
                index: "6-3",
                title: "客户"
              },
              {
                id: '2',
                index: "6-4",
                title: "货运代理"
              },
              {
                id: '3',
                index: "6-5",
                title: "运输企业"
              },
              {
                id: '4',
                title: "报关企业"
              }
            ]
          }
        }
      ],
      // headers传进来的值
      titlenav: "",
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
      tabindex: 1 //当前tab的数量
    };
  },
  methods: {
    // 头部标签触发事件
    _changeItem_(obj) {
      this.title = obj.label;
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
      if (flag == false) {
        arr.push(data);
      }
    },
    addTab(i, ititle) {
      let data = {
        title: ititle,
        name: i, //与选项卡绑定值 value 对应的标识符，表示选项卡别名
        content: "New Tab content"
      };
      this.compare(this.editableTabs, data);
      this.editableTabsValue = i;
      this.title = ititle;
    },
    removeTab(targetName) {
      // this.tabindex--;
      let tabs = this.editableTabs; //数组
      let activeName = this.editableTabsValue; //当前选中的tab
      if (activeName === targetName) {
        //当前选中的tab=c传进来的参数
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
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