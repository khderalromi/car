import React from "react";
import classes from './Links.css'

const MainPages=["Home" , "Catalogue" , "Contact Us" , "Help"]
const Header=(props)=>{
    return (
        <div className={classes.pages} > 
            {MainPages.map((page)=>{
                
                return <li><a href="..">{page}</a></li>
                
            })}
        </div>    
    )

}

export default Header