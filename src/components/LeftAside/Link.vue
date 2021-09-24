<template>
    <div class="Link-container">
        <ul default-active="2" text-color="#fff">
            <li v-for="item in items" :key="item.title">
                <a :href="item.src" target="_blank">
                    <Icon :type="item.icon" />
                    <span v-text="item.title"></span>
                </a>
                <div class="code" v-if="item.code" :style="{backgroundImage:`url(${item.code})`}"></div>
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
import code from "@/assets/wechat.png";

export default {
    name: "Link",
    components: {
        Icon,
    },
    data() {
        return {
            items: [
                {
                    icon: "github",
                    title: "mryanqi2020",
                    src: "https://github.com/MrYanQi2020",
                },
                {
                    icon: "mail",
                    title: "mryanqi2020@163.com",
                    src: "mailto:mryanqi2020@163.com",
                },
                {
                    icon: "qq",
                    title: "363203978",
                    src: "tencent://message/?Menu=yes&uin=363203978&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
                    code,
                },
                {
                    icon: "weixin",
                    title: "_520521yyx",
                    code,
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
.Link-container {
    width: 100%;
    height: 100%;
    li {
        padding-left: 10px;
        height: 56px;
        line-height: 56px;
        position: relative;
        i {
            color: @leftAside_icon;
            margin-right: 5px;
            width: 25px;
            font-size: 16px;
        }
        span {
            color: #fff;
            font-size: 13px;
        }
        &:hover .code {
            transform: scaleY(1);
        }
        .code {
            position: absolute;
            top: -130px;
            left: 41px;
            width: 100px;
            height: 100px;
            border: 15px solid transparent;
            border-radius: 4px;
            background-color: #fff;
            background-size: contain;
            background-repeat: no-repeat;
            transition: 0.3s;
            transform-origin:50% 110%;
            transform: scaleY(0);
        }
        .code::after {
            content: "";
            display: block;
            position: absolute;
            bottom: -23px;
            left: 50%;
            background-color: #fff;
            width: 15px;
            height: 15px;
            transform: translateX(-50%) rotateZ(45deg);
        }
    }
}
</style>