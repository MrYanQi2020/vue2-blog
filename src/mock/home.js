
import Mock from 'mockjs';

Mock.mock('/api/home.json',{
    code:0,
    msg:"数据异常",
    data:[
        {
            name:'yanqi'
        }
    ]
})