<template>
    <div class="LeftAside-container">
        <div class="HeadPortait">
            <HeadPortrait />
            <h1>颜七的小窝</h1>
        </div>
        <div class="Menu">
            <Menu />
        </div>
        <div class="Link">
            <Link />
        </div>
    </div>
</template>

<script>
import Menu from "./Menu";
import Link from "./Link";
import HeadPortrait from "@/components/HeadPortrait";

export default {
    name: "LeftAside",
    components: {
        Menu,
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
        background-color:@leftAside_bg;
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
    }
</style>