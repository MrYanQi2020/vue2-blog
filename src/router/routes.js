import About from "@/views/About";
import Blog from "@/views/Blog";
import Home from "@/views/Home";
import Message from "@/views/Message";
import Project from "@/views/Project";

export default [
    {name:'About',path:'/About',component:About,children:[
        {path:''}
    ]},
    {name:"Blog",path:"/Blog",component:Blog},
    {name:"categoryBlog",path:"/Blog/:category",component:Blog},
    {name:'Home',path:'/',component:Home},
    {name:'Message',path:'/Message',component:Message},
    {name:'Project',path:'/Project',component:Project},
]