<template>
  <div class="Layout-container">
    <!-- 侧边栏 -->
    <div class="left" ref="left">
      <slot name="left"></slot>
    </div>
    <!-- 中间内容 -->
    <div class="center">
      <slot name="center"></slot>
    </div>
    <!-- 右侧 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style lang="less" scoped>
.Layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
    overflow: hidden;
  }
  .left{
    // 这一行不通用
    width:240px;
  }
  .center {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>