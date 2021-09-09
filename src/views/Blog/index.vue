<template>
    <div class="blog-container" v-myloading="isloading">

    </div>
</template>

<script>
import getmsg from "@/api/blog.js";
import mymixins from "@/mixins/fetchData.js";

export default {
    name: "Blog",
    mixins: [mymixins],
    methods: {
        async fetchData() {
            return await getmsg();
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
