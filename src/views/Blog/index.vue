<template>
    <div class="blog-container" >
       <Layout>
           <template #center>
            <BlogList/>
           </template>
            <template #right>
            <RightList/>
           </template>
       </Layout>
    </div>
</template>

<script>

import Layout from "@/components/Layout";   // 布局组件
import BlogList from "./components/BlogList";
import RightList from "./components/RightList";


export default {
    name: "Blog",
    data(){
        return{

        }
    },
    components:{
        Layout,
        BlogList,
        RightList,
    },
   
};

</script>

<style lang="less" scoped>
@import url("~@/style/index");

    .blog-container{
         display: flow-root;
         width:100%;
         height:100%;
         .BlogList-container{
             .scollbar(@thumbBgc:@thumb1);
         }
         .RightList-container{
             .scollbar(@thumbBgc:@thumb1);
             width:240px;
         }
         
    }
</style>
