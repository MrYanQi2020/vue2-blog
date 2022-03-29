<template>
    <div class="BaseTable">
           <el-table
                :ref="refId"
                :data="data"
                style="width: 100%;"
                :max-height="MaxHeight"
                :header-cell-style="headClass"
                :border="tableBorder"
                :size="tableSize"

                :row-key="rowKey"
                @selection-change="handleSelectionChange"
                >
                    <el-table-column
                            v-if = "type"
                            :type="type"
                            fixed
                            align="center"
                            :reserve-selection ="true"
                            >
                    </el-table-column>
                 
                     <el-table-column
                            v-for="(col,i) in column" 
                            :key = "i"
                            :fixed = "col.fixed ? col.fixed : false"
                            :label="col.label"
                            :min-width="col.minWidth"
                            :align="col.align ?  col.align : 'center'"

                             
                            >
                        
                            
                        <template slot-scope="scope" >

                            <!-- 纯文本 -->
                            <span v-if="col.type == 'text'" v-text="scope.row[col.prop]"></span>

                            <!-- tag 标签 -->
                            <el-tag v-if="col.type == 'tag'" :type="col.param[scope.row[col.prop]]" >
                                {{scope.row[col.prop]}}
                            </el-tag>

                            <!-- 图标 -->
                            <div v-if="col.type == 'icon'" class="icon" >
                                <i :class="col.param.icon" :style="{color:col.param.color}"></i>
                            </div>

                            <!-- 按钮 -->
                             <el-button v-if="col.type == 'button'" size="mini" 
                                 :icon="col.param.icon"
                                 :plain = "col.param.plain"
                                 :round = "col.param.round"
                                 :circle = "col.param.circle"
                                 :type = "col.param.type"
                                 @click="handleButtonClick(col.param.click,scope)"
                                 v-cloak
                             >{{col.param.label}}</el-button>
                            
                            <slot :name="col.slot" v-if="col.slot" :scope = "scope" ></slot>
                        </template>
                      </el-table-column>

                      
                

           </el-table>

           <BasePagination v-if="pagination" :paginData = "paginData" @changes="pageinChange"  ></BasePagination>
    </div>
                   
</template>

<script>
export default {
    props:{
        // 表格属性

        // 表格数据
        data:{
            type:Array,
            require: true,
        },

        paginData:{
            type:Object,
        },

       
        // 列配置
        column:{
            type:Array,
            require: true,
        },
        // 首列类型
        type:{
            type:String,
            default:"index"
        },

        // 开启分页
        pagination:{
            type:String,
        },

        // 表格大小
        tableSize:{
            type:String,
            default: "small"
        },

        // 表格线条 
        tableBorder:{
            type:Boolean,
            default: true,
        },

        // 表格最大高度
        MaxHeight:{
            type:String,
            default: "600"
        },
        // ref
        refId:{
            type:String,
            default:"singleTable"
        },
        

        // -------------------------------------

        // 表格列属性

        
    },
    data(){
        return {
            // 多选内容
            multipleSelection:[],
        }
    },
    methods:{
        // table表头颜色
        headClass(){
            return "background:rgb(243,245,251)"
        },
        // 首列类型
        columnFirst(type){
            return type == "selection"
        },
    
        // 按钮列 - 点击
        handleButtonClick(event,scope){
            this.$emit(event,scope);
        },

        // 分页 - 点击
        pageinChange(current){
            this.$emit('pageinChange',current);
        },


        // 多选事件
        handleSelectionChange(selection){
            this.multipleSelection = selection;
            this.$emit('multipleSelectionClick',this.multipleSelection)
        },

        // row-key
        rowKey(row){
            return row.id;
        }

    

    }
}
</script>

<style lang="scss" scoped>
    .BaseTable{
        table{

        }
    }
</style>