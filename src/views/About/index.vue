<template>
    
    <div>
      <h1>关于me</h1>
      <ul>
        <li v-for="item in data" :key="item.title">
            <h5 v-text="item.title"></h5>
            <img :src="item.img">
        </li>
      </ul>
    </div>
</template>

<script>
import getmsg from '@/api/about.js'


export default {
    name: "About",
    data(){
      return{
        data:[]
      }
    },
    async created() {
        this.data = await getmsg();
    },
};
</script>

<style>
</style>
