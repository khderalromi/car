import React, { useContext, useEffect, useState } from 'react';
import { ContextInfo } from "../../App";
import Cookies from 'js-cookie';
import classes from './Cart.css' ;
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import Audi from '../../assests/images/Audi.png';
import Honda from '../../assests/images/Honda.png';
import BMW from '../../assests/images/BMW.png';
import Volvo from '../../assests/images/Volovo.png';
import background from '../../assests/images/Vector3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faX,faCookie } from '@fortawesome/free-solid-svg-icons'




const   Cart=(props)=>{
    const {Info,setInfo} =useContext(ContextInfo);
    const  [showModal1,setshowModal1]=useState(true);
    const [showModal2,setshowModal2]=useState(false)

    const deleteHandler=(name)=>{
    const updateItem= Info.filter( (car)=>((car.name!=name)));
        console.log(updateItem)
        setInfo(updateItem)    
    }

    const modalClosedHandler=()=>{
        setshowModal1(false);
    }

    const saveHandler=()=>{
        Cookies.set("myCars",JSON.stringify(Info),{expires:1});
        Cookies.set("visitedBefore",true,{expires:1})
        setshowModal1(false)
    }

    const unsaveHandler=()=>{
        modalClosedHandler()
        {setshowModal2(true)}
        Cookies.set("visitedBefore",true,{expires:1})
                    
    }

    useEffect(()=>{
        const visitedBefor=Cookies.get("visitedBefore");
        if(visitedBefor){
            setshowModal1(false)
        }
    },[])

    

    return(

            <div>

                <div >
                    
                    <Modal  show={showModal1} modalClosed={modalClosedHandler}>
                        <h3 className={classes.alert}><FontAwesomeIcon className={classes.CookiesIcon} icon={faCookie} />Your Data Will Save  In Cookies?</h3>
                        <div className={classes.Buttons}>
                            <div onClick={()=>{saveHandler()}} >
                                <Button>Yes</Button>
                            </div>

                            <div onClick={()=>{ unsaveHandler();}} >
                                <Button>No</Button>
                            </div>
                        </div>

                        
                    </Modal> 

                    
                    <Modal show={showModal2} modalClosed={modalClosedHandler}>
                        <h3 className={classes.alert} ><FontAwesomeIcon className={classes.CookiesIcon} icon={faCookie} />Your Data Not Save </h3>
                        <div onClick={()=>{setshowModal2(false)}}  >
                            <Button>Yes</Button>
                        </div>

                    </Modal> 
            
                </div>


                <img src={background} className={classes.background}></img>
                <div className={classes.main}>
                    
                    <h3 className={classes.title} >my Cart</h3>
                    <table>
                        <thead>
                            <tr>
                                <th className={classes.productHead}>Product</th>
                                <th className={classes.pricetHead}>Price</th>
                                <th className={classes.colorctHead}>Color</th>
                                <th className={classes.deletetHead}>Quantities</th>
                                <th className={classes.deletetHead}>Delete</th>
                            </tr>
                        </thead>
                       
                           {Info.map((car)=>{
                            return(
                                <tr>
                                    <td className={classes.product}>
                                        <img className={classes.carImg} src={car.img}></img>
                                        <div className={classes.explain} >
                                            <h2>{car.name}</h2>
                                            <p>Code: #716537</p>
                                            <p>ngine Copacity: 6000cc</p>
                                        </div>
                                    </td>
                                    <td>
                                        <h3 className={classes.price} >{car.price}</h3>
                                    </td>
                                    <td>
                                        <h3 className={classes.color}>{car.color}</h3>
                                    </td>

                                    <td>
                                        <h3 className={classes.color}>{car.quantities}</h3>
                                    </td>

                                    <td>
                                        <FontAwesomeIcon onClick={()=>{return deleteHandler(car.name)}}
                                         className={classes.delete} icon={faX} />
                                    </td>
                                </tr>
                            )
                            
                           })}


                    </table>
                
                </div>
               
            </div>    
            
 
    )
   
   
}
export default Cart;