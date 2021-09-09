import ins from "./"
import {showMessage} from "@/utils"

 async function getmsg() {
  try{
    return await ins.get('/api/pubinfo.json');
  }catch(err){
    showMessage({
      type:'error',
      message:err,
      duration:5,
    })
  }
}
export default getmsg;