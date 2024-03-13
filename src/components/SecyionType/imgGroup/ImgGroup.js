import React from "react";
import classes from './ImgGroup.css'
import img1 from '../../../assests/images/Rectangle1.png';
import img2 from '../../../assests/images/Rectangle2.png';
import img3 from '../../../assests/images/Rectangle3..png';
import img4 from '../../../assests/images/Rectangle4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretRight,faCaretLeft } from 
'@fortawesome/free-solid-svg-icons';



const images=[  {img:img1},
                {img:img2, name:"BMW"},
                {img:img3,name:"Bugotti" },
                {img:img4}
            ];

const ImgGroup= (props)=>{
    return(
        <div className={classes.ImgGroup}>
            <FontAwesomeIcon className={classes.icon} icon={faCaretLeft}/>

            <div className={classes.images}>
            {images.map((image)=>{
                return(
                    <div>
                        <img src={image.img} ></img>
                    </div>
                    
                )
            })}  
            </div>
            
            <FontAwesomeIcon className={classes.icon} icon={faCaretRight}/>
        </div>
        
        
    )

}

export default ImgGroup;