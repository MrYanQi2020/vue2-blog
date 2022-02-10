import About from "@/views/About";
import Blog from "@/views/Blog";
import Home from "@/views/Home";
import Message from "@/views/Message";
import Project from "@/views/Project";

export default [
    {name:'About',path:'/About',component:About,children:[
        {path:''}
    ]},
    {name:"Blog",path:"/Blog&a",component:Blog},
    {name:"categoryBlog",path:"/Blog/cate/:categoryid",component:Blog},
    {name:'Home',path:'/Blog&b',component:Home},
    {name:'Message',path:'//Blog&c',component:Message},
    {name:'Project',path:'/Project',component:Project},
]