import Mock from 'mockjs';
import qs from 'querystring'


// 获取所有博客分类

Mock.mock('/api/blogType',{
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
            total: 786,  // 总数
            ['row'|limit||5]: [     // 当前页列表数据 取决limit
                {
                    'id|+1':1,
                    title: "@title",
                    description: "@text",
                    category: {  // 所属分类
                        id: '@id',
                        name: "@name"
                    },
                    scanNumber: 10,
                    commentNumber: 30,
                    thumb: "缩略图地址",
                    createDate: 1604976798936
                }
            ]
        }
    })
})