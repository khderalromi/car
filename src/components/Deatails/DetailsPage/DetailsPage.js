import React from "react";
import Audi from '../../../assests/images/one.png';
import Honda from '../../../assests/images/tow.png';
import BMW from '../../../assests/images/three.png';
import Volvo from '../../../assests/images/four.png';
import Button from "../../UI/Button/Button";
import classes from './DetailsPage.css'
import {  faStar,faStarHalf,faAdd,faSubtract } from 
'@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Deatils=(props)=>{

    return (
        <div className={classes.Main}>
            <div className={classes.left}>
                <h2>{props.type}</h2>
                <p>{props.power}</p>
                <img src={props.img}></img>
                

            </div>


            <div className={classes.right}>
                <h3>Details</h3>
                <div className={classes.explain}>
                    <p className={classes.rating}>Rating And Review</p>
                    <div className={classes.star}>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalf}/>

                    </div>
                    <div className={classes.Description}>
                        <h3>Description</h3>
                        <p>The culmimination of comfort,luxury,and powerrul living is embodied
                            <br></br>in the First-Ever BMWX7 -the biggest BMW ever<br></br> built.
                        </p>
                    </div>

                    <div className={classes.color}>
                        <h3>Colors</h3>
                        <div className={classes.circle}>
                            <div className={classes.circle1}></div>
                            <div className={classes.circle2}></div>
                            <div className={classes.circle3}></div>
                        </div>
                        

                    </div>

                    <div className={classes.Price} >
                        <div className={classes.addsub}>
                            <FontAwesomeIcon className={classes.sub} icon={faSubtract}/>
                            <span>1</span>
                            <FontAwesomeIcon className={classes.add} icon={faAdd}/>
                        </div>
                        
                        <h3><span>Price:</span>{props.price}</h3>

                    </div>
                    <div className={classes.btn}>
                        <Button btnType='add'>Add To Cart</Button>
                        <Button btnType='buy' >Buy Now</Button>
                    </div>


                </div>

            </div>
            
        </div>
        
    )
}
export default Deatils;