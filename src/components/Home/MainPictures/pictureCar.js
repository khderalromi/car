import React from "react";
import vector from '../../../assests/images/Vector.png';
import car from '../../../assests/images/car.png'
import classes from './pictureCar.css'
const pictureCar = (props)=>{
    return(
        <div className={classes.Main}>
            <img className={classes.Vector} src={vector}  alt="not found" ></img>
            <img className={classes.Car} src={car}  alt="not found" ></img>
        </div>
    )
}

export default pictureCar;