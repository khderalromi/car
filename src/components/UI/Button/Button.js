import React  from "react";
import classes from './Button.css';
import { useNavigate } from "react-router-dom";

const button=(props) => {
    const navigate =useNavigate();
    return (
        
        <button
        className={[classes.Button , classes[props.btnType]].join(' ')}
                onClick={()=>{return(
                    <div>
                    {(navigate(props.routeName))}
                    </div>
                
                )
                }}>
        {props.children}</button>
    )};

export default button;