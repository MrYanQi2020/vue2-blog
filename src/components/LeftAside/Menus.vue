<template>
    <div class="Menus-container">
        <el-row class="tac">
            <el-col>
                <el-menu  router default-active="2" class="el-menu-vertical-demo" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item  v-for="item in items" :key="item.link" :index="item.path">
                            <Icon :type="item.icon" />
                            <span slot="title" v-text="item.title"></span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
    name: "menus",
    components: {
        Icon,
    },
    data() {
        return {
            items: [
                {
                    path:{name:"Home"},
                    title: "首页",
                    icon: "home",
                },
                {
                    path:{name:"Blog"},
                    title: "文章",
                    icon: "blog",
                },
                {
                    path:{name:"About"},
                    title: "关于我",
                    icon: "about",
                },
                {
                    path:{name:"Project"},
                    title: "项目&效果",
                    icon: "code",
                },
                {
                    path:{name:"Message"},
                    title: "留言板",
                    icon: "chat",
                },
            ],
        };
    },
    methods: {},
};
</script>
<style lang="less" scoped>
@import url("~@/style/index.less");

ul,
li {
    list-style: none;
    padding: 0;
    margin: 0;
}
a {
    color: inherit;
    text-decoration: none;
}
.Menus-container {
    width: 100%;
    height: 100%;
    .Icon-container {
        width: 25px;
        margin-right: 5px;
        font-size: 18px;
    }
    .el-menu-vertical-demo {
        background-color: @leftAside_bg;
        border: none;
    }
    .el-menu-item {
        font-size: 15px;
        padding-left: 35px !important;
        &.is-active,
        &:focus,
        &:hover {
            background-color: darken(@leftAside_bg, 8%);
        }
    }
}
</style>