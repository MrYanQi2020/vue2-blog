import Mock from 'mockjs';


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
Mock.mock(/\/api\/blog(\??\page=?\d*&?(limit=)?\d*)?/,{
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