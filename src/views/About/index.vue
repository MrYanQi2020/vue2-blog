<template>
    <div class="about-container" v-myloading="isloading">
        <h1>关于我</h1>
    </div>
</template>

<script>
import getmsg from "@/api/about.js";
import mymixins from "@/mixins/fetchData.js";

export default {
    name: "About",
    mixins: [mymixins],
    methods: {
        async fetchData() {
            return await getmsg();
        },
    },
};
</script>

<style lang="less" scoped>
.about-container {
    display: flow-root;
    width: 100%;
    height: 100%;
}
</style>
