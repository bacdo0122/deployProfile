import React from 'react'
import PlanItem from './PlanItem'
import './style.scss'
type Props = {
    switchs: boolean
}
const plan_list = [
    {
    image:'https://jthemes.net/themes/html/bolby/demo/images/price-1.svg',
    title:'Basic',
    content:'A Simple option but powerful to manage your business',
    support:'Email support',
    price:9,
    recommend: false
},
    {
    image:'https://jthemes.net/themes/html/bolby/demo/images/price-2.svg',
    title:'Premium',
    content:'Unlimited product including apps integrations and more features',
    support:'Mon-Fri support',
    price:49,
    recommend: true
},
    {
    image:'https://jthemes.net/themes/html/bolby/demo/images/price-3.svg',
    title:'Ultimate',
    content:'A wise option for large companies and individuals',
    support:'24/7 support',
    price:99,
    recommend: false
}
]
const Plan = (props: Props) => {
    const {switchs} = props;
  return (
    <div className='About mt-4'> <h1
    className="About_title fadeInUp_animation"
    style={switchs ? { color: "#454360" } : { color: "#fff" }}
  >
    Pricing Plans
   
  </h1>
  <div className="spacer"></div>
  <ul className="plan_list ">
    {plan_list.map((item:any,index:number)=>{
     return <PlanItem {...item} key={index}/>
    })}
  </ul>
  </div>
  )
}
export default Plan