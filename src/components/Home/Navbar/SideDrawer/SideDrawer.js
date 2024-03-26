import React from "react";
import classes from './SideDrawer.css';
import Aux from '../../../../hoc/wrap'
import Logo from "../Logo/Logo";
import Links from "../Links/Links";
import Cart from "../Cart_Register/Cart_Register";
import Backdrop from "../../../UI/Backdrop/Backdrop";

const  sideDrawer=(props)=>{
    let attachedClasses = [classes.SideDrawer , classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer , classes.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                
                <nav>
                    <Links/>
                    <Cart/>
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;