import React from "react";
import classes from './Logo.css';
import logoImg from '../../../../assests/images/Logo.png'

const Logo= (props)=>{
    return (
        <img className={classes.Logo} src={logoImg} alt="not found"></img>

    )
    
}

export default Logo;