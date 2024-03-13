import React from "react";
import Aux from '../../../../hoc/wrap';
import classes from './Element.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCar , faXing , faFlask , faChartColumn , faCaretDown} 
from '@fortawesome/free-solid-svg-icons';



const Element=(props)=>{
    return(
        <Aux>
            <strong className={classes.Strong} >{props.MainTitle}</strong>
                 
                <p className={classes.paragraph} > 
                    <FontAwesomeIcon icon={props.Icon} /> 
                    {props.Content}
                    <FontAwesomeIcon icon={props.endIcon}/>
                </p>
                
            
        </Aux>

    )
}

export default Element;