import ins from "./"
import {showMessage} from "@/utils"

async function getmsg(){
    try{
        return await ins.get("/api/home.json");
    }catch(err){
        showMessage({
            type:'error',
            message:err,
            duration:5,
        })
    }
}

export async function getBlogDetails(id){
    try{
      return await ins.get(`/api/blog/${id}`);
    }catch(err){
      showMessage({
        type:'error',
        message:err,
        duration:5,
      })
    }
  }
  