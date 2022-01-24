import React from 'react'
import './style.scss'
interface Props {
  switchs:boolean,
  setSwitchs: React.Dispatch<React.SetStateAction<boolean>>
}

export const SwitchColor = (props: Props) => {
  const {switchs,setSwitchs} = props;
    return (
     <label className="switch" >
            <input type="checkbox"  onChange={()=> setSwitchs(!switchs)}/>
            <span className="slider round"></span>
      </label>
    )
}
