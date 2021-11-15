<template>
    <div id="app">
        <Layout>
            <template #left>
                <LeftAside />
            </template>
            <template #center>
                <RouterView ref='main' />
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "@/components/Layout";
import LeftAside from "@/components/LeftAside";

export default {
    name: "App",
    components: {
        Layout,
        LeftAside,
    },
};
</script>
<style lang="less" scoped>
@import url("~@/style/index");

#app {
    height: 100vh;
    .LeftAside-container {
        width: 270px;
        .scollbar(@thumbBgc:@thumb1);
    }
}
</style>