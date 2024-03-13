import React, { Component } from "react";
import classes from './Navbar.css';
import Aux from '../../hoc/wrap'
import Logo from './Logo/Logo'
import Header from './Header/Header'
import Cart from './Cart_Register/Cart_Register' 
import DrawerToggle from '../Navbar/SideDrawer/DrawerToggle/DrawerToggle';
import SideDrawer from "./SideDrawer/SideDrawer";


class Navbar extends Component{
    state={
        show:false,
    }

    sideDrawerClosedHandler = ()=>{
        return(
            this.setState({show:false})
    )}


    menuHandler = (prevState)=>{
        
        return(
            this.setState({show: !prevState.show})
    )}

    render(){

    

    return(
        <Aux>         
            <DrawerToggle clicked={this.menuHandler} />
            <SideDrawer
                open={this.state.show} 
                closed={this.sideDrawerClosedHandler}  />

            <div className={classes.Navbar}>   

                <Logo/>
                <Header/>
                <Cart/>        
            </div>
            
        </Aux>
    )
    }
}
export default Navbar;