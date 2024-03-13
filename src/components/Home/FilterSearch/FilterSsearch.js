import React from "react";
import classes from './FilterSearch.css';
import Aux from '../../../hoc/wrap';
import Element from './Element/Element'
import Button from '../../UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCar , faXing  , faFlask , faChartColumn , faCaretDown } 
from '@fortawesome/free-solid-svg-icons';

/*
const MainTitle =['Name' , 'Price' ,' Engine Capacity' , 'Brand']
const Icon =['faCar' , 'faCaretDown' , 'faFlask' , 'faChartColumn' , 'faXing' ]
const onteContent = ['choose Name' ,'choose Price' ,'choose Capacity' ,'choose Brand']
*/
const element= [{
        MainTitle: 'Name',
        Icon: faCar,
        Content:'choose Name',
        endIcon: faCaretDown
    },
    {
        MainTitle: 'Price',
        Icon: faFlask,
        Content:'choose Price',
        endIcon: faCaretDown
    },
    {
        MainTitle: 'Engine Capacity',
        Icon: faChartColumn,
        Content:'choose Capacity',
        endIcon: faCaretDown

    },
    {
        MainTitle: 'Brand',
        Icon: faChartColumn,
        Content: 'choose Brand',
        endIcon: faCaretDown
    }];

const FilterSearch = (props)=>{
    return (
        <div className={classes.FilterSearch} >

            <div className={classes.allElement}>
                {element.map((element)=>{
                    return(
                        <div>
                            <Element 
                                MainTitle={element.MainTitle} 
                                Icon={element.Icon} 
                                Content={element.Content}
                                endIcon={element.endIcon}
                            />
                        </div>
                        
                    )
                })}
            </div>

            <div className={classes.Search}><Button>Search</Button></div>
        </div>
    )
}
export default FilterSearch;
/*
<Aux>
            {element.map((element)=>{
            return(
                <Aux>
                    <Element 
                    className={classes.Element}
                    MainTitle={element.MainTitle} 
                    Icon={element.Icon} 
                    Content={element.Content}
                    endIcon={element.endIcon}
                    />
                    <Button>Search</Button>
                </Aux>
                
            )
        })
    }
        </Aux>
       
        
    )*/ 