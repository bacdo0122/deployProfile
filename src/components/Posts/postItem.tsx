import React from 'react'
 
type Props = {
    image:string,
    type:string,
    title:string,
    time:string,
    author: string,
}

const postItem = (props: Props) => {
    const {image,type,title,time,author} = props;
  return (
    <div className='server-item post-item'>
            <div className="post-item-wrapper">
                <div className="post-bg">
                    <img src={image} alt={image} />
                </div>
                <div className="post-info">
                        <h4>
                            <a href="#">{title}</a>
                        </h4>
                        <ul className="list-post-inline mt-1">
                            <li className="list-post-inline-item">{time}</li>
                            <li className="list-post-inline-item">{author}</li>
                        </ul>
                </div>

            </div>
            <div className="post-title">
                <span>{type}</span>
            </div>
    </div>
  )
}

export default postItem