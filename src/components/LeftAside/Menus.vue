<template>
    <nav class="Menus-container">
        <RouterLink :to="{name:item.name}" :exact="item.exact" class="menu-item" v-for="(item,i) in items" :key="i">
            <Icon :type="item.icon" />
            <span v-text="item.title">首页</span>
        </RouterLink>
    </nav>
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
                    name: "Home",
                    title: "首页",
                    icon: "home",
                    exact:true,
                },
                {
                    name: "Blog",
                    title: "文章",
                    icon: "blog",
                    exact:false,
                },
                {
                    name: "About",
                    title: "关于我",
                    icon: "about",
                    exact:true,
                },
                {
                    name: "Project",
                    title: "项目&效果",
                    icon: "code",
                    exact:true,
                },
                {
                    name: "Message",
                    title: "留言板",
                    icon: "chat",
                    exact:true,
                },
            ],
        };
    },
    methods: {},
};
</script>
<style lang="less" scoped>
@import url("~@/style/index.less");

@menu-item-fontSize: 15px;
@Icon-container-fontSize: 18px;

.Menus-container {
    width: 100%;
    height: 100%;
    .Icon-container {
        width: 25px;
        margin-right: 5px;
        font-size: @Icon-container-fontSize;
    }

    .menu-item {
        width: 100%;
        font-size: @menu-item-fontSize;
        height: 50px;
        padding-left: 35px !important;
        transition: 0.2s;
        &:hover {
            background-color: darken(@leftAside_active_bg, 6%);
        }
        > * {
            display: inline-flex;
            height: 100%;
            align-items: center;
        }
        span {
            color: #fff;
        }
        .Icon-container {
            color: @leftAside_icon;
        }
    }
    .router-link-active,
    .router-link-exact-active {
        background-color: darken(@leftAside_active_bg, 8%);
    }
}
</style>