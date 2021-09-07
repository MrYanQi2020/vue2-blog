

import axios from "axios"; //导入axios

const ins = axios.create();

ins.interceptors.response.use(res=>{
  try{
    alert('数据获取成功');
    return res.data.data;
  }catch(err){
    alert('数据获取失败');
    console.log(err.toJSON());
  }
})

export default ins;