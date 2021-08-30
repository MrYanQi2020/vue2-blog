<template>
   <div class="container">
       <Menu/>
   </div>
</template>

<script>
import Menu from './Menu'


export default {
    components:{
        Menu
    }
}
</script>

<style scoped>
    .container{
        width:300px;
        height:400px;
        border:1px solid pink;
    }
</style>