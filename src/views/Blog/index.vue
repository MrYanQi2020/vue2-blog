<template>
    <h1>文章</h1>
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

<style>
</style>
