<template>
    <div class="home-container">
        <!-- 轮播 -->
        <ul class="carousel">
            <li class="carousel-item" :style="{}"></li>
            <li class="carousel-item" :style="{}"></li>
            <li class="carousel-item" :style="{}"></li>
        </ul>
        <!-- 上下箭头 -->
        <div class="arrow">
            <Icon class="arrow-up" type="arrowUp" />
            <Icon class="arrow-down" type="arrowDown" />
        </div>
        <!-- 指示器 -->
        <ul class="indicator">
            <li class="indicator-item active"></li>
            <li class="indicator-item"></li>
            <li class="indicator-item"></li>
        </ul>
    </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
    name: "Home",
    components: {
        Bg,
        Icon,
    },
    data(){
      return{
        
      }
    }
};
</script>

<style lang="less" scoped>
ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}
@ececec: #ececec;
.home-container {
    width: 100%;
    height: 100%;
    position: relative;
    // 上下箭头
    .arrow {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 20px 0;
        font-size: 50px;
        color: @ececec;
        .arrow-up {
            animation: arrowUP 1s infinite alternate;
            cursor: pointer;
        }
        .arrow-down {
            animation: arrowDown 1s infinite alternate;
            cursor: pointer;
        }
        @keyframes arrowUP {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(20px);
            }
        }
        @keyframes arrowDown {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(-20px);
            }
        }
    }
    // 轮播
    .carousel {
        width: 100%;
        height: 100%;
        .carousel-item {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .carousel-item:nth-of-type(1) {
            background-color: rgb(146, 178, 204);
        }
        .carousel-item:nth-of-type(2) {
            background-color: rgb(185, 146, 204);
        }
        .carousel-item:nth-of-type(3) {
            background-color: rgb(158, 204, 146);
        }
    }
    // 指示器
    .indicator {
        position: absolute;
        top: 50%;
        right: 2%;
        transform: translateY(-50%);
        .indicator-item{
          width:.4em;
          height:2.5em;
          background:fadeout(@ececec,50%);
          border-radius:2.5px;
          margin:15px 0;
          cursor: pointer;
          transition: .1s;
          &.active{
            background:@ececec;
          }
          &:hover{
            background:@ececec;
          }
        }
    }
}
</style>
