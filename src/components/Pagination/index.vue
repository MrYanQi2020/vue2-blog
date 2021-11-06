<template>
    <ul class="pagination-container" v-if="totalPage>1">
        <li class="pagination-start" :class="{disabled:current===1}" @click="toggleActive(1)">⋘</li>
        <li class="pagination-pro" :class="{disabled:current===1}" @click="toggleActive(current-1>=1?current-1:1)">⊰</li>
        <li class="pagination-item"  :class="{active:current===item}" v-for="item in pageArr" :key="item" @click="toggleActive(item)" v-text="item"></li>
        <li class="pagination-next " :class="{disabled:current===totalPage}" @click="toggleActive(current+1<=totalPage?current+1:totalPage)">⊱</li>
        <li class="pagination-end " :class="{disabled:current===totalPage}" @click="toggleActive(totalPage)">⋙</li>
    </ul>
</template>

<script>
export default {
    name:'Pagination',
    props: {
        current: {  // 当前页数
            type: Number,
            require: false,
            default: 1,
        },
        total: {//总数据量
            type: Number,
            require: false,
            default: 0,
        },
        limit: {//每页的容量
            type: Number,
            require: false,
            default: 10,
        },
        visibleNumber: {//可见页码数
            type: Number,
            require: false,
            default: 10,
        },
    },
    computed:{
        totalPage(){  // 总页数
            return Math.ceil(this.total / this.limit);
        },
        visibleMin(){
            const visibleMin =  Math.ceil(this.current - this.visibleNumber/2);
            if(visibleMin<1){
                return 1;
            }
            return visibleMin;
        },
        visibleMax(){
            const visibleMax = this.visibleMin+this.visibleNumber-1;
            if(visibleMax>this.totalPage){
                return this.totalPage;
            }
            return visibleMax;
        },
        pageArr(){
            const arr = [];
            for(let i = this.visibleMin;i<=this.visibleMax;i++){
                arr.push(i);
            }
            return arr;
        }
    },
    methods:{
        toggleActive(next){
            if(next === this.current){
                return;
            }
            return this.$emit('pageChange',next);
        }
    },
};
</script>

<style lang="less" scoped>
ul,
ol,
li {
    list-style: none;
}

.pagination-container{
    user-select:none; 
    display:flex;
    align-items: center;
    overflow: hidden;
    width:100%;
    .pagination-item,
    .pagination-start,
    .pagination-end,
    .pagination-pro,
    .pagination-next{
        width:28px;
        height:28px;
        padding:0 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &.disabled{
            color:#c0c4cc;
            cursor:not-allowed;
        }
        &.active{
            color:#409eff;
        }
        &:hover:not(.disabled){
            color:#409eff;
        }
    }
}
</style>

