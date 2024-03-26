import React from "react";
import classes from './MainArticle.css';
import Aux from "../../../hoc/wrap";
import ArriveSummer from "./ArriveSummer/ArriveSummer";
import MakeEveryDay from "./MakeEveryDay/MakeEveryDay";
import Description from "./Description/Description";
import Explore from "./ExploreButton/ExploreButton";



const HeroHeader =(props)=>{
    return(
        <div className={classes.HeroHeader}>
            <ArriveSummer/>
            <MakeEveryDay/>
            <Description/>
            <Explore/>
            

        </div>
    )
}

export default HeroHeader;