<template>
    
    <div>
      <h1>关于me</h1>
      <ul>
        <!-- <li v-for="item in data" :key="item.title">
            <h5 v-text="item.title"></h5>
            <img :src="item.img">
        </li> -->
      </ul>
    </div>
</template>

<script>
import getmsg from '@/api/about.js';
import mymixins from '@/mixins/fetchData.js';

export default {
    name: "About",
    mixins:[mymixins],
    methods:{
      async fetchData(){
        return await getmsg();
      }
    },
    
};
</script>

<style>
</style>
