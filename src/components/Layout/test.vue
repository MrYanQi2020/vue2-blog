<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="leftAside">
          左侧
          </div>
      </template>
      <template #center>
        <div class="main">
          内容
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  components: {
    Layout,
  },
}
</script>
<style lang="less" scoped>

#app {
  width: 100vw;
  height: 100vh;
  .leftAside {
    width: 300px;
    height: 100%;
  }
  .main {
    height: 100%;
  }
}
</style>