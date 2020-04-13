<template>
    <div>
        <buttom></buttom>
        <roleTable class="roleTable"></roleTable>
    </div>
</template>

<script>
import buttom from '@/components/SetUp/Set_System/Set_Sys_Buttom.vue'
import roleTable from '@/components/SetUp/Set_System/Set_Sys_RoleTable.vue'
export default {
    components:{
        buttom,
        roleTable,

    }
}
</script>

<style>
.roleTable{
margin-top:10px
}
</style>