import axios from "axios"; //导入axios

async function getmsg(src){
    try{
      const res = await axios.get(src);
      console.log(res);
      return res.data.subjects;
    }
    catch (err) {
      console.log(err);
    }
}

export default getmsg;