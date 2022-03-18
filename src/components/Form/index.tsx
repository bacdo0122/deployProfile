import React from 'react'
import './style.scss'
type Props = {
    switchs:boolean
}

const Form = (props: Props) => {
    const {switchs} = props;
  return (
    <div className='About mt-4' id='Contact'> 
        <h1
        className="About_title fadeInUp_animation"
        style={switchs ? { color: "#454360" } : { color: "#fff" }}
        >
        Get In Touch
    
        </h1>
        <div className="spacer"></div>
        <div className="form">
            <div className="form-title">
                <h3 className="fadeInUp_animation">
                Let's talk about everything!
                </h3>    
                <p className="fadeInUp_animation">
                Don't like forms? Send me an <a href="#">email</a>  . 👋  
                </p>
            </div>
            <div className="form-wrapper">
                <form  className="contact-form">
                   <div className="row">
                        <div className="row-form col-6">
                            <div className="column ">
                                <input type="text" placeholder='Your Name'/>
                            </div>
                        </div>    
                        <div className="row-form col-6">
                            <div className="column ">
                                <input type="text" placeholder='Email Address'/>
                            </div>
                        </div>    
                        <div className="row-form col-12">
                            <div className="column ">
                                <input type="text" placeholder='Subject'/>
                            </div>
                        </div>    
                        <div className="row-form col-12">
                            <div className="column ">
                                <textarea  placeholder='Message' rows={5}/>
                            </div>
                        </div>
                    </div>   
                    <button type='submit' className='btn btn-default '>Send Message</button> 
                </form>
            </div>
        </div>
       
  </div>
  )
}

export default Form