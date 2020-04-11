<template>
  <div>
    <div class="menuList">
      <ul>
        <li
          v-for="(item,index) in curseList"
          :key="item.id"
          :class="{active:num==index}"
          @click="getNum(index)"
        >{{item.curseListTitle}}</li>
      </ul>
    </div>
    <div class="tabCon">
      <div v-for="(itemCon,index) in tabContents" :key="index" v-show="index == num">{{itemCon}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
      curseList: [
        { curseListTitle: "基本信息" },
        { curseListTitle: "员工" },
        { curseListTitle: "手册管理" },
        { curseListTitle: "商品编码" },
        { curseListTitle: "合同信息" },
        { curseListTitle: "收货人列表" },
        { curseListTitle: "品牌" },
        { curseListTitle: "装柜地点" }
      ],
      tabContents: ["111111111", "222222222", "333333333"]
    };
  },
  methods: {
    getNum(index) {
      this.num = index;
    }
  }
};
</script>

<style scoped>
.active {
  color: #000;
  background: #fff;
}

.menuList {
  margin: 10px 0;
  text-align: left !important;
}

.menuList ul {
  width: 100%;
  height: 31px;
  border-bottom: 1px solid #a9a9a9;
  padding-top: 10px;
  padding-left: 14px;
  position: relative;
  left: 0;

  white-space: nowrap;
  font-size: 0;
}

ul li {
  height: 31px;
  color: black;
  background-color: #e9ecf0;
  float: left;
  padding: 0 10px;
  border: 1px solid #a9a9a9;
  border-bottom: none;
  line-height: 30px;
  margin-right: 15px;
  cursor: pointer;
  font-size: 14px;
  width: auto;
  min-width: 5%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
ul li:focus {
  background: #fff;
}
.tabCon {
  width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #999;
  font-size: 14px;
  background-color: #fff;
}
</style>