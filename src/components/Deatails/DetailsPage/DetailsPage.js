import React,{useEffect, useState} from "react";
import { useContext } from "react";
import { ContextInfo } from "../../../App";
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

    const [quantities,setquantities]=useState(1);
    const [colorCar,setColor]=useState("");
    const {Info,setInfo} =useContext(ContextInfo);

    /*******function to handle increse and decrease quantities ********/
    const increaseQuantities= ()=>{
        return (
            setquantities(quantities+1)
        )
    }


    const decreaseQuantities= ()=>{
        {quantities<=1 ?  null: setquantities(quantities-1) }  
    }
    /******* end function to handle increse and decrease quantities ********/


    
    /*******function to handle color of car********/
    const HandleColor= (color)=>{
        return (
            setColor(color)
        )
    }
    /******* end function to handle color of car ********/

    

    /*********info handler to add element to cart *****/
    const InfoHandler=()=>{
       
        const repeat= Info.find((car)=>{
            
            return(car.name ===props.name)
        })

        const repeat2 = Info.filter( (car)=>(car.name==props.name));
        if(repeat2.length>0){
            const repeatColor=repeat2.find((car)=>{
                return (car.color==colorCar)
            })
            if(repeatColor){
                return (repeatColor.quantities=repeatColor.quantities+quantities);
            }
            else{
                const myCart={
                    img:props.img,
                    price:props.price ,
                    type:props.type,
                    power:props.power,
                    name:props.name,
                    quantities:quantities,
                    color:colorCar
                    
                }
                return (setInfo([...Info,myCart]));
            }
        }

        else{
                const myCart={
                    img:props.img,
                    price:props.price ,
                    type:props.type,
                    power:props.power,
                    name:props.name,
                    quantities:quantities,
                    color:colorCar
                    
                }
            
                return (setInfo([...Info,myCart]));
        }
               
    }
    

    

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
                            <div className={classes.circle1}
                             onClick={()=>{HandleColor("White")}}>
                        </div>

                            <div className={classes.circle2}
                             onClick={()=>{HandleColor("Black")}}>    
                            </div>

                            <div className={classes.circle3}
                             onClick={()=>{HandleColor("SkyBlue")}}>
                            </div>
                        </div>
                        

                    </div>

                    <div className={classes.Price} >
                        <div className={classes.addsub}>
                            <FontAwesomeIcon className={classes.sub}
                             icon={faSubtract}
                             onClick={()=>{decreaseQuantities()}}
                             />
                            <span>{quantities}</span>
                            <FontAwesomeIcon className={classes.add}
                             icon={faAdd}
                             onClick={()=>{increaseQuantities()}}
                             />
                        </div>
                        
                        <h3><span>Price:</span>{props.price}</h3>

                    </div>
                    <div className={classes.btn}>
                        <div onClick={()=>{InfoHandler()}}>
                            <Button btnType='add'>Add To Cart</Button>
                        </div>
                        
                        <Button btnType='buy' >Buy Now</Button>
                    </div>


                </div>

            </div>
            
        </div>
        
    )
}
export default Deatils;