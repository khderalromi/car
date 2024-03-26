import React from "react";
import ImgGroup from "./imgGroup/ImgGroup";
import classes from './SecyionType.css';

const SecyionType = (props)=>{
    return(
        <div className={classes.SecyionType}>
            <p>Find by Car Type</p>
            <ImgGroup className={classes.Img}/>
            
        </div>
    )
}

export default SecyionType;