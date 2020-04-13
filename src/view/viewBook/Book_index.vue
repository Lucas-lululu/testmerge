<template>
    <div>
        <newbook></newbook>
        <bookTable></bookTable>
        <paging></paging>
    </div>
</template>

<script>
 import newbook from '@/components/Booking/Book_newBooking.vue';
 import bookTable from '@/components/Booking/Book_table.vue';
  import paging from '@/components/paging';
export default {
    components:{
        newbook,
        bookTable,
        paging
    }
}
</script>

<style scoped>

</style>