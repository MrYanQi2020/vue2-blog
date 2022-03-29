import Mock from 'mockjs';
import qs from 'querystring'


// 获取所有博客分类

Mock.mock('/api/blogtype',{
    code:0,
    msg:"数据异常",
    'data|10-20':[
        {
            'id|+1':1,
            name: "分类@id",
            'articleCount|0-300': 0, // 该分类下文章的数量
            'order|+1': 1
        }
    ]
})
// 分页获取博客数据
Mock.mock(/^\/api\/blog(\?.+)?$/,'get',function(option){
    const {limit} = qs.parse(option.url);
    return Mock.mock({
        code:0,
        msg:"数据异常",
        'data|10-20':{
            total: 1000,  // 总数
            [`rows|${limit||5}`]: [     // 当前页列表数据 取决limit
                {
                    id:"@guid",
                    title: "@ctitle(1,50)",
                    description: "@cparagraph(1, 10)",
                    category: {  // 所属分类
                        'id|1-10': '0',
                        name: "分类@id"
                    },
                    'sex|1':['男','女'],
                    'scanNumber|0-3000': 0,
                    'commentNumber|0-300': 0,
                    'thumb|1': [
                        Mock.Random.image("300x250", "#000", "#fff", "Random Image"),
                        null,
                      ],
                    createDate: `@date('T')`,
                }  
            ]
        }
    })
})

// 获取博客详情
// Mock.mock(/^\/api\/blog(\?.+)?$/,'get', {
//     code: 0,
//     msg: "msg",
//     data: { 
//         id: "@guid",
//         title: "@ctitle",
//         category: {
//             id: 1,
//             name:"分类3"
//         },
//         scanNumber: 0, #浏览次数
//         commentNumber: 0, #评论数
//         description: "博客描述，显示到列表页",
//         createDate: 1604976798936, #时间戳，创建日期
//         toc:  [ # 博客章节目录
//         { name: "章节1", anchor: "title-1" },
//         {
//             name: "章节2",
//             anchor: "title-2",
//             children: [
//             { name: "章节2-1", anchor: "title-2-1" },
//             { name: "章节2-2", anchor: "title-2-2" },
//             ],
//         },
//         {
//             name: "章节3",
//             anchor: "title-3",
//         },
//         ],
//         htmlContent: "....", #博客的html内容
//         thumb: "缩略图地址"
//     }
// )