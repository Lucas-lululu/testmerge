<template>
  <div class="d-flex">
    <div class="label"></div>
    <div class="name">
      {{headTitle}}-{{title}}
    </div>
  </div>
</template>

<script>
import bus from "@/util/Bus";
export default {
  props: {
    // title: {
    //   type: String
    // },
    headTitle: {
        type: String
    }
  },
  data () {
    return {
      title: ''
    }
  },
  mounted() {
    const self = this
    bus.$on('_titleChange_', val => {
      self.$nextTick(() => {
        self.title = val
      })
      // console.log(this.title)
    })
  },
  beforeDestroy() {
    bus.$off('_titleChange_')
  },
  created() {
    
  }
};
</script>

<style scoped>
.label {
  display: inline-block;
  width: 3px;
  height: 16px;
  background: royalblue;
  position: relative;
  top: 3px;
}
.name {
  color: #003cc8;
  font-size: 16px;
  margin-left: 13px;
}
.name:hover {
  color: #777;
  outline: 0;
  cursor: pointer;
}
</style>