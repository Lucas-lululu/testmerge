<template>
    <div>
        <navLabel></navLabel>
        <buttom></buttom>
        <roleTable class="roleTable"></roleTable>
        <staff></staff>
        <!-- <roleSet></roleSet> -->
    </div>
</template>

<script>
import navLabel from '@/components/navLabel.vue'
import buttom from '@/components/setUp/system/buttom.vue'
import roleTable from '@/components/setUp/system/roleTable.vue'
import staff from '@/components/setUp/system/staff.vue'
// import roleSet from '@/components/setUp/roleSet.vue'
export default {
    components:{
        navLabel,
        buttom,
        roleTable,
        staff,
        // roleSet
    }
}
</script>

<style>
.roleTable{
margin-top:10px
}
</style>