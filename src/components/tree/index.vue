<template>
    <ul class="test-container">
        <li v-for="(item,i) in treedata" :key="i"  @click="showAdvice(item)"  :class="item.isSelect?'active':''">
                <span >
                    {{item.name}}
                </span>
                <span v-if="item.aside">{{item.aside}}</span>
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
            if(item.isSelect) return;
            this.$emit("theSelect", item);
        },
    },
};
</script>

<style lang="less" scoped>
@import url('~@/style/index');

    .test-container{
        width:100%;
        height:100%;
    }

.test-container {
  list-style: none;
  padding: 0;
  .test-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    &.active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>

