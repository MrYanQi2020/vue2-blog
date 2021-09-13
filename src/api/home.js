import ins from "./index";

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

export default getmsg;