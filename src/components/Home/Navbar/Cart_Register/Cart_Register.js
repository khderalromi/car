import React from "react";
import classes from './Cart_Register.css'
import Aux from '../../../../hoc/wrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";



const Cart= (props)=>{
    const navigate= useNavigate()
    return (
        <Aux>
            <div className={classes.Cart_Register} >
                <FontAwesomeIcon  
                    className={classes.icon}
                    icon={faCartShopping}
                    onClick={()=> navigate("cart")} 
                    />
                 <a href="..">Register</a>
            </div>    
        </Aux>
    )    
    
}


export default Cart;