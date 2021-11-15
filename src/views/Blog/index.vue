<template>
    <div class="blog-container" >
       <Layout>
           <template #center>
            <BlogList/>
           </template>
            <template #right>
               <div class="rightlist">
                   <RightList/>
               </div>
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
         .rightlist{
             width:220px;
             .scollbar(@thumbBgc:@thumb1);
             height:100%;
         }
    }
</style>
