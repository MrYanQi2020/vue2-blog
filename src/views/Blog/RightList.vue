<template>
  <div class="RightList-container">
    <Tree :treedata="list" @theSelect="handleSelect" />
  </div>
</template>

<script>
import Tree from "@/components/tree";
import mixFet from "@/mixins/fetchData";
import * as blogApi from "@/api/blog.js";

export default {
  mixins: [mixFet],
  components: {
    Tree,
  },
   computed: {
    // 通过路由拿到的计算属性
    routeProps() {
      const categoryid = +this.$route.params.categoryid || -1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryid,
        limit,
      };
    },
    list() {
      const allarticleCount = this.data.reduce((a, b) => a + b.articleCount, 0);
      const res = [
        { name: "全部", id: -1, articleCount: allarticleCount },
        ...this.data,
      ];
      return res.map((ele) => {
        return {
          ...ele,
          isSelect: ele.id === this.routeProps.categoryid,
          aside:`${ele.articleCount}篇`
        };
      });
    },
  },

  methods: {
    async fetchData() {
      return await blogApi.getBlogType();
    },
    handleSelect({ id } = {}) {
       // 分类点击事件改变路由
        const params = {
            categoryid: id,
        };
        const query = {
            page:1,
            limit: this.routeProps.limit,
        };
        if (id !== -1) {
            this.$router.push({
                name: "categoryBlog",
                params, 
                query,
            });
        } else {
            this.$router.push({
            name: "Blog",
            params, 
            query,
            });
        }
    },
  },
 
};
</script>

<style lang="less" scoped>

.RightList-container {
    width:100%;
    height:100%;
}
</style>