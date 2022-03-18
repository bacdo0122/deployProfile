import React from "react";

type Props = {
    image:string,
    job:string,
    bg:string,
    title:string
};

const ServiecItem = (props: Props) => {
    const {image, job,bg, title} = props;
  return (
    <li className="server-item" style={{backgroundColor: `${bg}`}}>
      <img src={image} alt="" />
      <h3 className="mt-3 mb-3">{job}</h3>
      <p>
       {title}
      </p>
    </li>
  );
};
export default ServiecItem;