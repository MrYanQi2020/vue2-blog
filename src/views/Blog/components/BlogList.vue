<template>
  <div class="BlogList-container" ref="BlogList" v-myloading="isloading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <a href="">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <a href="/article/cate/8" class="">{{ item.category.name }}</a>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pagination
      :current="routeProps.page"
      :limit="routeProps.limit"
      :total="data.total"
      :visibleNumber="10"
      @pageChange="handelChange"
    />
  </div>
</template>

<script>
import mymixins from "@/mixins/fetchData"; // 获取数据方法
import * as blogApi from "@/api/blog.js";
import Pagination from "@/components/Pagination";
import { formatDate } from "@/utils";

export default {
  name: "BlogList",
  mixins: [mymixins],
  components: {
    Pagination,
  },
  computed: {
    routeProps() {
      const categoryid = +this.$route.params.categoryid || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryid,
        page,
        limit,
      };
    },
  },
  watch:{
       async $route(newValue,old){
              const {page,limit} = newValue.query;
              const {categoryid} = newValue.params;
              this.isloading = true;
              this.$refs.BlogList.scrollTop=0;
              this.data = await this.getData({page,limit,categoryid});
              this.isloading = false;
      }
  },
  methods: {
    formatDate,
    async fetchData() {
      return await blogApi.getBlog({
        categoryid: this.routeProps.categoryid,
        page: this.routeProps.page,
        limit: this.routeProps.limit,
      });
    },
    async getData(res) {
      const { categoryid, page, limit } = res;
      return await blogApi.getBlog({
        categoryid,
        page,
        limit,
      });
    },
    async handelChange(page) {
      // 分页组件点击事件改变路由
      const params = {
        categoryid: this.routeProps.categoryid,
      };
      const query = {
        page,
        limit: this.routeProps.limit,
      };
      if (this.routeProps.categoryid !== -1) {
        this.$router.push({
          name: "categoryBlog",
          params,
          query,
        });
      } else {
        this.$router.push({
          name: "Blog",
          query,
        });
      }

    },
  },
};
</script>

<style lang="less" scoped>

@import url("~@/style/index");



.BlogList-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .pagination-container{
    justify-content: flex-end;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>