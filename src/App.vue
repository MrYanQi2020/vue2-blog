<template>
  <div id="app">
     <div class="left">
      <RouterLink to="/view1">vue1</RouterLink>

       <RouterLink to="/view2">vue2</RouterLink>
     </div>

      <div class="reds">
        <RouterView/>
      </div>
      <RouterView/>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: 'App',
  components: {
    Icon,
  }
}
</script>
<style lang="less" scoped>
.left{
  float:left;
}
  .reds{
    float:right;
    width:500px;
    height:500px;
    border:1px solid;
  }
</style>