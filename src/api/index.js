

import axios from "axios"; //导入axios

const ins = axios.create();
ins.interceptors.response.use(res=>{
  try{
    return res.data.data;
  }catch(err){
    console.log(err.toJSON());
  }
})

export default ins;