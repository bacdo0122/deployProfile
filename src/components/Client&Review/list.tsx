import React from 'react'

type Props = {
    image:string
}

const List = (props: Props) => {
    const {image} = props;
  return (
    <div className='client-item'>
        <div className="inner">
            <img src={image} alt={image} />
        </div>
    </div>
  )
}

export default List