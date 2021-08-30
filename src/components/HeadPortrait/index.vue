<template>
  <div class="HeadPortrait-container">
      <img :src="src" :alt="alt" :style="{width:size+'px',height:size+'px'}">
  </div>
</template>

<script>
export default {
    name:"HeadPortrait",
    props:{
        src:{
            type:String,
            require:false,
            default:"https://img04.sogoucdn.com/app/a/100520093/8379901cc65ba509-45c21ceb904429fc-3d76954af80d02665d56409b836b4f63.jpg",
        },
        alt:{
            type:String,
            require:false,
            default:"这是一张占位头像"
        },
        size:{
            type:String,
            require:false,
            default:100
        }
    }
}
</script>

<style lang="less" scoped>
    .HeadPortrait-container{
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-content: center;
        img{
            display:inline-block;
            border-radius:50%;
            cursor: pointer;
        }
    }

</style>