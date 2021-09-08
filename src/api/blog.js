import ins from "./index.js"

 async function getmsg() {
  try{
    return await ins.get('/api/common/indexConfig.json?t=1630992533585&ctoken=WAAj7rUxmGw4uOi4IkHWhdi7');
  }catch(err){
    // console.log(err);
    if(err.toString()=='Error: Request failed with status code 500'){
      alert('网络异常');
    }
  }
}
export default getmsg;