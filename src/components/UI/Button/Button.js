import React  from "react";
import classes from './Button.css';
import { useNavigate } from "react-router-dom";

const button=(props) => {
    const navigate =useNavigate();
    return (
        
        <button
        className={[classes.Button , classes[props.btnType]].join(' ')}
        onClick={()=>{return (navigate(props.routeName))}}
        
                    >{props.children}</button>
    )};

export default button;