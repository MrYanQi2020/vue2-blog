import ins from "./"
import {showMessage} from "@/utils"

async function getmsg() {
  try {

    return await ins.get('/api/common/indexConfig.json?t=1630992533585&ctoken=WAAj7rUxmGw4uOi4IkHWhdi7');
  } catch (err) {
    showMessage({
      type:'error',
      message:err,
      duration:5,
    })
  }
}
export default getmsg;