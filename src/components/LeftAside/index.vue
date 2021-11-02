<template>
    <div class="LeftAside-container">
        <div class="HeadPortait">
            <HeadPortrait />
            <h1>颜七的小窝</h1>
        </div>
        <div class="Menu">
            <Menus />
        </div>
        <div class="Link">
            <Link />
        </div>
    </div>
</template>

<script>
import Menus from "./Menus";
import Link from "./Link";
import HeadPortrait from "@/components/HeadPortrait";

export default {
    name: "LeftAside",
    components: {
        Menus,
        Link,
        HeadPortrait,
    },
};
</script>


<style lang="less" scoped>
@import url("~@/style/index");

    .LeftAside-container{
        width:100%;
        height:100%;
        overflow: hidden;
        background-color:@leftAside_active_bg;
        .HeadPortait{
            padding:20px 0;
             h1{
                font-size:18px;
                color:#fff;
                text-align: center;
                margin-bottom:0;
            }
        }
        .Link{
            padding:40px 0;
        }
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */
        overflow-x: hidden;
        overflow-y: auto;
        overflow-y: auto;
        &::-webkit-scrollbar {
            // display: none; /* Chrome Safari Edge */
        }
        /* 设置滚动条的样式 */
        &::-webkit-scrollbar {
            width: 0.4em;
        }
        /* 滚动槽 */
        &::-webkit-scrollbar-track {
            box-shadow: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
        }
        /* 滚动条滑块 */
        &::-webkit-scrollbar-thumb {
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
</style>