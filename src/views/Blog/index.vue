<template>
    <div class="blog-container" v-myloading="isloading">

    </div>
</template>

<script>
import * as blogApi from "@/api/blog.js";
import mymixins from "@/mixins/fetchData.js";

export default {
    name: "Blog",
    mixins: [mymixins],
    methods: {
        async fetchData() {
            return await blogApi.getBlog({page:2,limit:15});
        },
    },
    
};
</script>

<style lang="less" scoped>
    .blog-container{
         display: flow-root;
         width:100%;
         height:100%;
    }
</style>
