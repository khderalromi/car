import React, { useContext } from 'react';
import classes from './Cart.css' 
import Audi from '../../assests/images/Audi.png';
import Honda from '../../assests/images/Honda.png';
import BMW from '../../assests/images/BMW.png';
import Volvo from '../../assests/images/Volovo.png';
import background from '../../assests/images/Vector3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faX } from '@fortawesome/free-solid-svg-icons';




const car = [
                {img:Audi ,name:'Audi' , price:'5000$',color:'Black',delete:faX },
                {img: Honda ,name:'Honda' , price:'5000$' ,color:'Black',delete:faX},
                {img: BMW ,name: 'BMW', price:'5000$',color:'Black',delete:faX},
                {img:Volvo ,name: 'Volvo', price:'5000$',color:'Black',delete:faX}
            ]

const   Cart=(props)=>{
 
    return(
            <div>
                <img src={background} className={classes.background}></img>
                <div className={classes.main}>
                    
                    <h3 className={classes.title} >my Cart</h3>
                    <table>
                        <thead>
                            <tr>
                                <th className={classes.productHead}>Product</th>
                                <th className={classes.pricetHead}>Price</th>
                                <th className={classes.colorctHead}>Color</th>
                                <th className={classes.deletetHead}>Delete</th>
                            </tr>
                        </thead>
                        {car.map((car)=>{
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
                                        <FontAwesomeIcon className={classes.delete} icon={car.delete} />
                                    </td>
                                </tr>
                            )
                        }
                        )}

                    </table>
                
                </div>
            </div>    
            )
    
}
export default Cart;