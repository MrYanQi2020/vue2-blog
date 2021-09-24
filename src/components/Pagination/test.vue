<template>
    <div class="main">
        <Pagination :total="100" @pageChange="handelChange" :current="current" :visibleNumber="6"/>
    </div>
</template>

<script>
import Pagination from "./index.vue";

export default {
    data(){
        return{
            current:8
        }
    },
    components: {
        Pagination,
    },
    methods:{
        handelChange(next){
            this.current = next;
        }
    }
};
</script>

<style lang="less" scoped>
    *{
        margin:0;
        padding:0;
    }
</style>