<template>
  <el-container style="background:#f2f2f2;" class="div-besp">
    <el-header>
      <headers @menuld="menuld" @_headerTitle_="_headerTitle_"></headers>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item
            v-for="(item,i) in arrList"
            :key="i"
            :index="item.index"
            @click="addTab(item.index,item.title)"
          >{{item.title}}</el-menu-item>
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
            <navLabel :title="title" :headTitle="headTitle" class="navLabelClass"></navLabel>
            <netBooking class="netBookingClass"></netBooking>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import bus from '@/util/Bus'
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
      deliveindex: "",
      arr: [
        {
          arrindex: 1,
          list: [
            {
              title: "新订舱",
              index: "1-1"
            },
            {
              title: "订舱中",
              index: "1-2"
            },
            {
              title: "正常操作",
              index: "1-3"
            },
            {
              title: "等待上船",
              index: "1-4"
            },
            {
              title: "已上船",
              index: "1-5"
            },
            {
              title: "历史业务",
              index: "1-6"
            },
            {
              title: "退关",
              index: "1-7"
            },
            {
              title: "取消订舱",
              index: "1-8"
            },
            {
              title: "全部订舱",
              index: "1-9"
            }
          ]
        },
        {
          arrindex: 2,
          list: [
            {
              title: "对货",
              index: "2-1"
            },
            {
              title: "调度",
              index: "2-2"
            },
            {
              title: "装柜",
              index: "2-3"
            },
            {
              title: "申报",
              index: "2-4"
            },
            {
              title: "进港",
              index: "2-5"
            },
            {
              title: "放空",
              index: "2-6"
            },
            {
              title: "过夜",
              index: "2-7"
            },
            {
              title: "重新装箱",
              index: "2-8"
            },
            {
              title: "全部运输",
              index: "2-9"
            }
          ]
        },
        {
          arrindex: 3,
          list: [
            {
              title: "预报关",
              index: "3-1"
            },
            {
              title: "港口数据申报",
              index: "3-2"
            },
            {
              title: "实际申报",
              index: "3-3"
            },
            {
              title: "海关检查",
              index: "3-4"
            },
            {
              title: "退关",
              index: "3-5"
            },
            {
              title: "重新装箱",
              index: "3-6"
            },
            {
              title: "已放行",
              index: "3-7"
            },
            {
              title: "历史业务",
              index: "3-8"
            }
          ]
        },
        {
          arrindex: 4,
          list: [
            {
              title: "正本提交",
              index: "4-1"
            },
            {
              title: "报关单",
              index: "4-2"
            },
            {
              title: "产地证",
              index: "4-3"
            },
            {
              title: "大使馆证明",
              index: "4-4"
            }
          ]
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
    beforeDestroy() {
    bus.$off('_titleChange_')
  },
  methods: {
    // 头部标签触发事件
    _headerTitle_(title) {
      this.headTitle = title;
    },
    _changeItem_(obj) {
      this.title = obj.label;
    },
    childvalue(value) {
      this.deliveindex = value;
    },
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
      }
      this.compare(this.editableTabs, data)
      this.editableTabsValue = i;
      this.title = ititle;
      // this.$emit('_tabChange_', ititle)
      bus.$emit('_titleChange_', ititle)
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