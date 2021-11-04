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
            'total|2000-3000': 0,  // 总数
            [`row|${limit||5}`]: [     // 当前页列表数据 取决limit
                {
                    id:"@guid",
                    title: "@ctitle(1,50)",
                    description: "@cparagraph(1, 10)",
                    category: {  // 所属分类
                        'id|1-10': '0',
                        name: "分类@id"
                    },
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