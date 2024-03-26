import React,{Component} from "react";
import classes from './Home.css';
import Aux from "../../hoc/wrap";
import PictureCar from "./MainPictures/pictureCar";
import HeroHeader from "./HeroHeader/MainArticle";
import FilterSearch from "./FilterSearch/FilterSsearch";
import SecyionType from "./SecyionType/SecyionType";
import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";

const Home =(props)=>{
    return(
        
         <div className={classes.Home}>
        
                    <HeroHeader/>
                    <PictureCar/>
                    <FilterSearch/>
                    <SecyionType/>
                    <Categories/>
                    <Footer/>

    

            </div>
    )
}
        

export default Home;