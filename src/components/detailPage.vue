<template>
  <div>
      <ul>
          <li v-for='(item,i) in detail' :key='i'>{{item.value}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        detail:[{
            value:'系统编号',
            
        }]
    };
  }
};
</script>

<style scoped>
</style>