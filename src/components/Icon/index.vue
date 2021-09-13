<template>
    <i class="Icon-container iconfont" :class="iconType"></i>
</template>

<script>
import classMap from "./iconType.js";

export default {
    name: "Icon",
    props: {
        type: {
            type: String,
            require: true,
            default: "home",
        },
    },
    computed: {
        iconType() {
            return classMap[this.type];
        },
    },
};
</script>

<style lang="less" scoped>
i {
    display: inline-block;
    text-align: center;
    font-size: inherit;
}
</style>