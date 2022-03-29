<template>
  <div>
    <Basetable 
      type="selection" 
      :data="data" 
      :column = "column"
      pagination = "pageinChange" 
      @pageinChange = "pageinChange"
      :paginData = "paginData"
      @handleDeteleClick = "handleDeteleClick" 
      @multipleSelectionClick = "multipleSelectionClick"
      MaxHeight = "400"
    >

      <template  #slot1="scoped">
          <span @click="handleDivClick(scoped.scope.row)">{{scoped.scope.row.id}}</span>
           <div class="checkSort">
            <div ><i class="el-icon-arrow-up "></i></div>
            <div ><i class="el-icon-arrow-down "></i></div>
           </div>
      </template>
       <template #slot2="scoped">
            <el-image
            style="width: 150px; height: 100px"
            :src="'..'+scoped.scope.row.id"
            fit="cover"></el-image>
      </template>

    </Basetable>
        <Basetable 
      type="index" 
      :data="data" 
      :column = "column"
      pagination = "pageinChange" 
      @pageinChange = "pageinChange"
      :paginData = "paginData"
      @handleDeteleClick = "handleDeteleClick" 
      @multipleSelectionClick = "multipleSelectionClick"
      MaxHeight = "200"
    >

      <template  #slot1="scoped">
          <span @click="handleDivClick(scoped.scope.row)">{{scoped.scope.row.id}}</span>
           <div class="checkSort">
            <div ><i class="el-icon-arrow-up "></i></div>
            <div ><i class="el-icon-arrow-down "></i></div>
           </div>
      </template>
       <template #slot2="scoped">
            <el-image
            style="width: 150px; height: 100px"
            :src="'..'+scoped.scope.row.id"
            fit="cover"></el-image>
      </template>

    </Basetable>
  </div>
</template>

<script>
import * as blog from "@/api/blog.js";

export default {
  data(){
    return{
      data:[],
      paginData:{
              total: 1000,
              currentPage: 2,
              pageSize: 20,
      },
      column:[
          // 纯文本
          {type:"text",label:"标题",prop:"title",minWidth:"100px",},
           {type:"text",label:"描述",prop:"description",minWidth:"240px",},

          // 自定义列2
          {slot:"slot2",label:'自定义2',minWidth:"100px"},

          // tag 标签
          {type:"tag",param:{
            "男":"primary",
            "女":"success"
          },label:"性别",prop:"sex",minWidth:"100px",},
          // 图标
          {type:"icon",param:{
            icon:"el-icon-refresh",
            color:"#ff0000"
          },label:"删除",minWidth:"50px",},

          // 自定义列1
          {slot:'slot1',label:'自定义1',minWidth:"100px"},

          // 按钮
           {type:"button",param:{
             click:"handleDeteleClick",
             label:"删除",
             type:"danger",
             icon:"el-icon-refresh",
          },label:"删除",minWidth:"50px",},


      ],
    }
  },
  methods:{
      // 按钮列 - 点击
      handleDeteleClick(row){
          this.data.splice(row.$index,1);
      }, 
      // 分页 - 点击
      pageinChange(current){
          console.log('分页被点击了',current)
      },
      // 多选 - 点击
      multipleSelectionClick(selection){
          console.log('选中了',selection)
      },
      // 自定义列 事件
      handleDivClick(row){
          console.log(' 自定义列 事件',row)
      },

      // 获取页面数据
      async fetchData(){
        return await blog.getBlog();
      },
      
      

  },
  async created(){
      const res = await this.fetchData();
      this.data = res.rows;
  }
};
</script>

<style></style>
