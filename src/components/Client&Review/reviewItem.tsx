import React from 'react'

type Props = {
    image:string,
    name:string,
    job:string,
    title:string,

}

const ReviewItem = (props: Props) => {
    const {image,name,job,title} = props;
  return (
    <div className='review-item'>
        <div className="thumb">
            <img src={image} alt={name} />
        </div>
        <h4>{name}</h4>
        <span>{job}</span>
        <div className="bg_dark">
        <p>{title}</p>    
        </div>
    </div>
  )
}
export default ReviewItem;