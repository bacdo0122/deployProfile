import React from 'react'
import PostItem from './postItem'
import  './style.scss'
type Props = {
    switchs:boolean
}
const list_post = [
    {
        image:"https://jthemes.net/themes/html/bolby/demo/images/blog/1.svg",
        type:"Reviews",
        title:"5 Best App Development Tool for Your Project",
        time: "09 February, 2020",
        author: "Bac"
    },
    {
        image:"https://jthemes.net/themes/html/bolby/demo/images/blog/2.svg",
        type:"Tutorial",
        title:"Common Misconceptions About Payment",
        time: "07 February, 2020",
        author: "Bac"
    },
    {
        image:"https://jthemes.net/themes/html/bolby/demo/images/blog/3.svg",
        type:"Business",
        title:"3 Things To Know About Startup Business",
        time: "06 February, 2020",
        author: "Bac"
    },
]
const Post = (props: Props) => {
    const {switchs} = props;
  return (
    <div className='About mt-4' id='Blog'> 
        <h1
        className="About_title fadeInUp_animation"
        style={switchs ? { color: "#454360" } : { color: "#fff" }}
        >
        Clients & Reviews
    
        </h1>
        <div className="spacer"></div>
        
        <div className="post-wrapper list-servers">
            {list_post.map((item:any,index:number)=>{
                return <PostItem {...item} key={index}/>
            })}
        </div>    
  </div>
  )
}

export default Post