import ins from "./index.js"
 async function getmsg() {
  try{
    return await ins.get('/api/pubinfo.json');
  }catch(err){
    if(err.toString()=='Error: Request failed with status code 500'){
      console.log('网络异常')
    }
  }
}
export default getmsg;