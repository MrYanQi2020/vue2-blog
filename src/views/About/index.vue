<template>
    <div class="about-container">
        <h1 ref="about">关于我</h1>
        <FormProvider :form="form">
            <SchemaField :schema="schema" />
            <FormButtonGroup>
                <Submit @submit="log">提交</Submit>
                <Reset>重置</Reset>
            </FormButtonGroup>
        </FormProvider>
    </div>
</template>

<script>
import { createForm } from "@formily/core"; // 内核库 负责管理表单的状态，表单校验，联动等等。
import { createSchemaField, FormProvider } from "@formily/vue"; // UI桥接库 负责管理表单的状态，表单校验，联动等等。
import {
    FormItem,
    Input,
    Select,
    Submit,
    FormButtonGroup,
    Reset,
} from "@formily/element"; // 组件库 快速实现漂亮的表单

const fields = createSchemaField({
    components: {
        FormItem,
        Input,
        Select,
    },
});
const schema = {
    type: "object",
    properties: {
        source: {
            type: "string",
            "x-component": "Select",
            enum: [{ value: "按院系选择" }, { value: "按处选择" }],
            default:"按院系选择",
        },
        target: {
            type: "string",
            "x-component": "Select",
            "x-reactions": {
                dependencies: ["source"],
                fulfill: {
                    schema: `
                        {{
                            $deps[0] === "按处选择" 
                            ?
                                {
                                    "default":"请选择处所",
                                    "enum":[{ value: '建设处' }, { value: '文科处' }],
                                }
                            :
                                {
                                    "default":"请选择院系",
                                    "enum":[{ value: '信息工程系' }, { value: '艺术系' }],
                                }
                        }}
                    `,
                },
            },
        },
    },
};
export default {
    name: "About",
    components: { FormProvider, ...fields, Submit, Reset, FormButtonGroup },
    data() {
        return {
            form: createForm(),
            schema,
        };
    },
    methods: {
        log(value) {
            console.log(value);
        },
    },
};
</script>

<style lang="less" scoped>
.about-container {
    display: flow-root;
    width: 100%;
    height: 100%;
}
</style>
