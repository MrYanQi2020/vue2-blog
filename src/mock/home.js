
import Mock from 'mockjs';

Mock.mock('/api/home.json', {
    code: 0,
    msg: "",
    data: [
        {
            id: "2",
            midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
            bigImg: "https://pic2.zhimg.com/v2-7927a1611f107d9ce0ac3f58854fef6c_r.jpg?source=1940ef5c",
            title: "血火同源",
            description: "如果我回头，一切都完了",
        },
        {
            id: "1",
            midImg: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
            bigImg: "https://pic1.zhimg.com/v2-46079e15101420c72bfa0fae9e45b01c_r.jpg?source=1940ef5c",
            title: "凛冬将至",
            description: "人唯有恐惧的时候方能勇敢",
        },
        {
            id: "3",
            midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
            bigImg: "https://pic3.zhimg.com/v2-226fec2bd69fb437d96db20aedc14963_r.jpg?source=1940ef5c",
            title: "听我怒吼",
            description: "兰尼斯特有债必偿",
        },
    ],
})