import ins from "./"
import {showMessage} from "@/utils"

export async function queryAlumnusList(){
    try{
        const res =  await ins.get("/yethan/AlumnusAction?setAction=queryAlumnusList");
        return res.data;
    }catch(err){
      showMessage({
        type:'error',
        message:err,
        duration:5,
      })
    }
  }
  