import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSwatchbook , faDharmachakra , faClock }from '@fortawesome/free-solid-svg-icons';
import Button from '../../UI/Button/Button';
import classes from './ElementCategories.css';
import Audi from '../../../assests/images/Audi.png';
import Bmw from '../../../assests/images/BMW.png';
import Honda from '../../../assests/images/Honda.png';
import Volvo from '../../../assests/images/Volovo.png';


const cars=[
                {img:Audi ,name:'Audi'},
                {img:Bmw ,name:"BMW"},
                {img:Honda ,name:"Honda"},
                {img:Volvo ,name:"Volvo"}
            ];
const car=['Audi','Bmw','Honda','Volvo']
const ElementCategories=(props)=>{

    return(
        <div className={classes.GridCard}>
            {cars.map((car)=>{
                return(
                    <div className={classes.Card}>
                        <img src={car.img}></img>
                        <div className={classes.Explain}>
                            <strong>{car.name}</strong>
                            <div className={classes.properties}>
                                <span>
                                    <FontAwesomeIcon icon={faSwatchbook} />
                                    4 Seator
                                </span>

                                <span>
                                    <FontAwesomeIcon icon={faDharmachakra} />
                                     Manual
                                </span>

                                <span>
                                    <FontAwesomeIcon icon={faClock} />
                                     5KM/1-lt
                                </span>
                            </div>
                            
                            <div className={classes.StartingAt}>
                                <p>Starting at $500/Day</p>
                            </div>

                            <div className={classes.button}>
                                <Button routeName="details" btnType="Details">Deatails</Button>
                                <Button >Buy Now</Button>
                            </div>
                        </div>

                        
                    </div>
                )
               
            })}


        </div>
    )
}

export default ElementCategories;