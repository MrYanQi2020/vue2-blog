import ins from "./"
import {showMessage} from "@/utils"

// 分页获取博客数据
export async function getBlog(page=1,limit=10,categoryid=-1) {
  try {

    return await ins.get('/api/blog',{
      params:{
        page,
        limit,
        categoryid,
      }
    });

  } catch (err) {
    showMessage({
      type:'error',
      message:err,
      duration:5,
    })
  }
}
// 获取所有博客分类
export async function getBlogType(){
    try{
      return await ins.get('/api/blogtype');
    }catch(err){
      showMessage({
        type:'error',
        message:err,
        duration:5,
      })
    }
}
