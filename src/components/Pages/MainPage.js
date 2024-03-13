import React from "react";
import Home from "../Home/Home";
import PictureCar from "../MainPictures/pictureCar";
import SecyionType from "../SecyionType/SecyionType";
import Categories from "../Categories/Categories";
import Aux from "../../hoc/wrap";

const MainPage=(props)=>{
    return(
        <Aux>
            <Home/>
            <PictureCar/>
            <SecyionType/>
            <Categories/>
        </Aux>
        

    )

}

export default MainPage;