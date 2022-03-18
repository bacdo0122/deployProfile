import React from 'react'

type Props = {
  image:string,
  title:string,
  content:string,
  support:string,
  price:number,
  recommend:boolean
}

const PlanItem = (props: Props) => {
  const {image, title, content, support, price, recommend} = props;
  return (
    <li  className={recommend ? `plan_item plan_item_recommend`: "plan_item"}>
      <div className={recommend ? `plan_item_wrapper plan_item_wrapper_recommend`: "plan_item_wrapper"}>
        <div className="plan_item_container">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{content}</p>
          <p>{support}</p>
          <h3>
            <em>$</em>
            {price}
            <span>Month</span>
          </h3>
          <button className="btn btn-default mt-4 mb-4">Get Started</button>
        </div>
        {recommend && <div className="plan_item_icon">Recommended</div>}
      </div>
      
    </li>
  )
}
export default PlanItem;