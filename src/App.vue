<template>
    <div id="app">
        <Layout>
            <template #left>
                <div class="left-side">
                    <LeftAside/>
                </div>
            </template>
            <template #center>
                <RouterView/>
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
#app {
    height: 100vh;
    .LeftAside-container {
        width: 220px;
    }
}
</style>