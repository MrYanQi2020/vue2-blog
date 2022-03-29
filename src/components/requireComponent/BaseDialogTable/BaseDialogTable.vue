<template>
    <section class="dialogTable-container">
        <div class="Input" :size="size" :style="InputStyle" @click.self = "dialogTableVisible = true">
            <el-tag v-for="tag in selectTags" :key="tag.value" closable :size="size" :disable-transitions="false" @close="handleClose(tag.value)" v-cloak>
                {{tag.label}}
            </el-tag>
        </div>

        <!-- dialog -->
        <el-dialog :title="title" :visible.sync="dialogTableVisible"
            custom-class = "elDialog"
            top="50px"
        >

            <el-form :inline="true" :size="size">

                <slot name = "table" :data = "gridData" :Visible="dialogTableVisible">
                    <el-table :data="gridData">
                        <el-table-column property="date" label="日期" width="150"></el-table-column>
                        <el-table-column property="name" label="姓名" width="200"></el-table-column>
                        <el-table-column property="address" label="地址"></el-table-column>
                    </el-table>
                </slot>


            </el-form>


        </el-dialog>

    </section>
</template>

<script>
const sizeObj = {
    mini: "28px",
    small: "32px",
    medium: "36px",
};

export default {
    props: {
        title:{
            type:String,
            default:"Title"
        },
        size: {
            type: String,
            default: "small",
        },
        formInline: {},
    },
    data() {
        return {
            gridData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }],

            dialogTableVisible: false,
            selectTags:[
                
            ]
       
        };
    },
    computed: {
        // 展示樣式
        InputStyle() {
            return {
                minHeight: sizeObj[this.size] ?? "40px",
            };
        },
    },
    methods: {
        // 刪除所選内容
        handleClose(val) {
            this.selectTags.splice(
                _.findIndex(this.selectTags, (o) => o.value == val),
                1
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.dialogTable-container {
    width: 100%;
    .Input {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        font-size: inherit;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;

        display: flex;
        align-content: flex-start;
        justify-content: flex-start;
        gap: 10px;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .elDialog{
    }
}

</style>