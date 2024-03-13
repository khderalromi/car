import React from "react";
import classes from './Home.css';
import Aux from "../../hoc/wrap";
import HeroHeader from "./HeroHeader/HeroHeader";
import ArriveSummer from "./HeroHeader/ArriveSummer/ArriveSummer";
import MakeEveryDay from "./HeroHeader/MakeEveryDay/MakeEveryDay";
import Description from "./HeroHeader/Description/Description";
import Explore from "./HeroHeader/ExploreButton/ExploreButton";
import FilterSearch from "./FilterSearch/FilterSsearch";



const Home =(props)=>{
    return(
        <div className={classes.Home}>
            <HeroHeader/>
            <FilterSearch/>

        </div>
    )
}

export default Home;