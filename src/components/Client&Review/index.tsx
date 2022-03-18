import './style.scss'
import Slider from 'react-slick'
import ReviewItem from './reviewItem'
import List from './list'
type Props = {
    switchs:boolean
}
const review_list = [
  {
    image:"https://jthemes.net/themes/html/bolby/demo/images/avatar-3.svg",
    name: "John Doe",
    job: "Product designer at Dribbble",
    title: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    image:"https://jthemes.net/themes/html/bolby/demo/images/avatar-1.svg",
    name: "John Doe",
    job: "Product designer at Dribbble",
    title: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 🔥",
  },

    
]
const list_client = [
  "https://jthemes.net/themes/html/bolby/demo/images/client-1-light.svg",
  "https://jthemes.net/themes/html/bolby/demo/images/client-2-light.svg",
  "https://jthemes.net/themes/html/bolby/demo/images/client-3-light.svg",
  "https://jthemes.net/themes/html/bolby/demo/images/client-4-light.svg",
  "https://jthemes.net/themes/html/bolby/demo/images/client-5-light.svg",
  "https://jthemes.net/themes/html/bolby/demo/images/client-6-light.svg",
  "https://jthemes.net/themes/html/bolby/demo/images/client-7-light.svg",
  "https://jthemes.net/themes/html/bolby/demo/images/client-8-light.svg",

]
const Review = (props: Props) => {
    const {switchs} = props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplay:true,
      autoplaySpeed: 3000,
    };
    return (
      <div className='About mt-4'> <h1
      className="About_title fadeInUp_animation"
      style={switchs ? { color: "#454360" } : { color: "#fff" }}
    >
      Clients & Reviews
     
    </h1>
    <div className="spacer"></div>
       
          <Slider {...settings}>
            {review_list.map((item:any,index:number)=>{
              return <ReviewItem {...item} key={index}/>
            })}
          </Slider>
          <div className="row">
            {list_client.map((item:any, index:number)=>{
              return <List image = {item}  key={index}/>
            })}  
          </div>
    </div>
    )
}
export default Review;