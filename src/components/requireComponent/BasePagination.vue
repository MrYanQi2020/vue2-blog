<template>
  <el-pagination
              class="BasePagination"
              background
              :hide-on-single-page="false"
              layout="prev, pager, next"
              :total="paginData.total"
              :current-page = "paginData.currentPage"
              :pager-count = "5"
              @current-change = "currentChange"
              :page-size="paginData.pageSize"
        >
  </el-pagination>
</template>

<script>
export default {
    props:['paginData'],
                // total:
                // currentPage: 
                // pageSize:
    methods:{
        async currentChange(currentPage){
            return this.$emit('changes',currentPage)
        }
    }
}
</script>

<style lang="scss" scoped>
    .BasePagination{
        margin-top: 15px;
         display: flex;
         justify-content: flex-end;
    }
</style>