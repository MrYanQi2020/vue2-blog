

import axios from "axios"; //导入axios
import {showMessage} from "@/utils";


const ins = axios.create();
ins.interceptors.response.use(res=>{
  try{
    if(res.data.code!==0){
      showMessage({
        type:'error',
        message:res.data.message,
        // positionDom:,
        role:'cat',
      })
      return;
    }
    return res.data.data;
  }catch(err){
    console.log(err);
  }
})

export default ins;