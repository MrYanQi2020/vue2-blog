<template>
  <h1>文章</h1>
</template>

<script>
import getmsg from '@/api/blog';
export default {
  name:'Blog',
  created(){
    getmsg().then(res=>{
      console.log(res);
    })
  }
};
</script>

<style>

</style>
