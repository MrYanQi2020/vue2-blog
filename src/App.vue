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
@sideWidth: 240px;

#app {
    height: 100vh;
    .LeftAside-container {
        width: calc(@sideWidth);
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */
        overflow-x: hidden;
        overflow-y: auto;
        overflow-y: auto;
        &::-webkit-scrollbar {
            // display: none; /* Chrome Safari Edge */
        }
        /* 设置滚动条的样式 */
        &:hover::-webkit-scrollbar {
            width: 0.4em;
        }
        /* 滚动槽 */
        &:hover::-webkit-scrollbar-track {
            box-shadow: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
        }
        /* 滚动条滑块 */
        &:hover::-webkit-scrollbar-thumb {
            border-radius: 10px;
            height: 2.5em;
            background: rgba(236, 236, 236, 0.3);
            border-radius: 2.5px;
            margin: 15px 0;
            cursor: pointer;
            transition: 0.1s;
        }
        // 页面失去焦点时滚动滑块的样式
        // &::-webkit-scrollbar-thumb:window-inactive {
        //     background: rgba(255, 0, 0, 0.4);
        // }
    }
}
</style>