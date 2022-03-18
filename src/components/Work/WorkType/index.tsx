import React from 'react';

type Props = {
    title:String,
    current:String,
    setCurrent:React.Dispatch<React.SetStateAction<String>>
};

const WorkType = (props: Props) => {
    const {title,current,setCurrent} = props;
  return <li className={current === title ? "list_inline_item current": "list_inline_item" }
  onClick={()=> setCurrent(title)}
  >{title}</li>;
};
export default WorkType;