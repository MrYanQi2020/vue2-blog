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
import getmsg from '@/api/index.js'


export default {
    name: "About",
    data(){
      return{
        data:[],
      }
    },
    async created() {
        this.data = await getmsg('/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0');
        this.data.img = this.data.cover;
        this.data.forEach(ele=>{
           ele.img  = ele.cover;
        })
    },
};
</script>

<style>
</style>
