<template>
    <ul class="test-container">
        <li v-for="(item,i) in treedata" :key="i" >
                <span @click="showAdvice(item)">
                {{item.name}}

                </span>
                <Tree :treedata="item.children" @theSelect="showAdvice" />
        </li>
    </ul>

</template>

<script>
export default {
    name: "Tree",
    props: {
        treedata: {
            type: Array,
            require: true,
        },
    },
    methods: {
        showAdvice(item) {
            this.$emit("theSelect", item);
        },
    },
};
</script>

<style lang="less" scoped>

</style>

