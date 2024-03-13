import React from "react";
import Card from './ElementCategories/ElementCategories';
import classes from './Categories.css';


const Categories=(props)=>{
    return(
        <div className={classes.Categories}>
            <p className={classes.title}>Top Categories</p>
            <Card className={classes.Card} />
        </div>
    )
}

export default Categories;