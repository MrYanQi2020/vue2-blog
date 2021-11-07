<template>
    <div class="blog-container" >
       <Layout>
           <template #center>
            <BlogList/>
           </template>
            <template #right>
               
           </template>
       </Layout>
    </div>
</template>

<script>

import Layout from "@/components/Layout";   // 布局组件
import BlogList from "./BlogList";

export default {
    name: "Blog",
    data(){
        return{

        }
    },
    components:{
        Layout,
        BlogList,
    },
   
};

</script>

<style lang="less" scoped>
    .blog-container{
         display: flow-root;
         width:100%;
         height:100%;
    }
</style>
