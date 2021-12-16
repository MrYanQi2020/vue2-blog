<template>
    <div class="home-container"  v-myloading="isloading">
        <!-- 轮播 -->
        <ul class="carousel" :style="{transform:`translateY(${carouselTanslateY})`} ">
            <li class="carousel-item" v-for="(item) in data" :key="item.id" :style="{backgroundImage:`url(${item.bigImg})`}" @wheel="carouselWheel(data.length,$event)">
                <h6  ref = "carouselTitle" class="carousel-title" v-text="item.title"></h6>
                <span ref = "carouselText"  class="carousel-text" v-text="item.description"></span>
            </li>
        </ul>
        <!-- 上下箭头 -->
        <div class="arrow">
            <div v-if="index>0" class="arrow-up" @click="handleClickUp">
                <Icon type="arrowUp" />
            </div>
            <div v-if="index<data.length-1" class="arrow-down" @click="handleClickDown">
                <Icon class="arrow-down" type="arrowDown" />
            </div>
        </div>
        <!-- 指示器 -->
        <ul class="indicator">
            <li class="indicator-item" :class="{active:i==index}" v-for="(item,i) in data" :key="item.id" @click="handleClickIdt(i)"></li>
        </ul>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
import getmsg from "@/api/home.js";
import fetchData from "@/mixins/fetchData";


export default {
    name: "Home",
    mixins: [fetchData],
    components: {
        Icon,
    },
    data() {
        return {
            index: 0,
            textWidth:0,
            titleWidth:0,
        };
    },
    methods: {
        async fetchData() {
            return await getmsg();
        },
        // 上箭头翻页
        handleClickUp() {
            this.index--;
        },
        // 下箭头翻页
        handleClickDown() {
            this.index++;
        },
        // 指示器翻页
        handleClickIdt(i) {
            this.index = i;
        },
        // 滚轮翻页
        carouselWheel(i, e) {
            if (e.deltaY > 0 && this.index < i - 1) {
                // 向下翻页
                this.index++;
            } else if (e.deltaY < 0 && this.index > 0) {
                // 向上翻页
                this.index--;
            }
        },
    },
    computed: {
        carouselTanslateY() {
            return -this.index * 100 + "vh";
        },
    },
};
</script>

<style lang="less" scoped>
ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
}
@ececec: #ececec;
.home-container {
    width: 100%;
    height: 100%;
    position: relative;
    // 上下箭头
    .arrow {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 20px 0;
        font-size: 50px;
        color: @ececec;
        .arrow-up {
            animation: arrowUP 1s infinite alternate;
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        .arrow-down {
            animation: arrowDown 1s infinite alternate;
            cursor: pointer;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
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
        position: relative;
        transition: 0.4s ease-in-out;
        .carousel-item {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-left: 25px;
            line-height: 2em;
            color: #fff;
            text-shadow: 1px 1px 0 rgba(20, 20, 20, 0.705);
            white-space: nowrap;
            .carousel-title {
                font-size: 1.2em;
                overflow: hidden;
            }
            .carousel-text {
                font-size: 1em;
                font-family: "楷体";
                overflow: hidden;
            }
        }
    }
    // 指示器
    .indicator {
        position: absolute;
        top: 50%;
        right: 2%;
        transform: translateY(-50%);
        .indicator-item {
            width: 0.4em;
            height: 2.5em;
            background: fadeout(@ececec, 50%);
            border-radius: 2.5px;
            margin: 15px 0;
            cursor: pointer;
            transition: 0.1s;
            &.active {
                background: @ececec;
            }
            &:hover {
                background: @ececec;
            }
        }
    }
}
</style>
