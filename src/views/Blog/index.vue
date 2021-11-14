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
import BlogList from "./BlogList";
import RightList from "./RightList.vue";

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
    .blog-container{
         display: flow-root;
         width:100%;
         height:100%;
         .rightlist{
             width:240px;
         }
    }
</style>
