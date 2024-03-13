import React , {Component} from "react";
import classes from './ImgGroup.css'
import img1 from '../../../assests/images/Rectangle1.png';
import img2 from '../../../assests/images/Rectangle2.png';
import img3 from '../../../assests/images/Rectangle3..png';
import img4 from '../../../assests/images/Rectangle4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretRight,faCaretLeft } from 
'@fortawesome/free-solid-svg-icons';




class ImgGroup extends Component{
    state={
        index:3,
        images:[  
                {img:img1},
                {img:img2, name:"BMW"},
                {img:img3,name:"Bugotti" },
                {img:img4}
                ]
    }

      
    previous=()=>{
        {if(this.state.index >0 && this.state.index <=3){
            const updateIndex= this.state.index-1;
            return (this.setState({index: updateIndex}))
           }
        }   
     }

     next=()=>{
       if(this.state.index < 3){
        const updateIndex= this.state.index+1;
        return (this.setState({index: updateIndex}))
       }
        
        
 }
     HandleImageClick=(myindex)=>{
            this.setState({index:myindex})
        }

    render(){
        return(
            <div className={classes.ImgGroup}>
            <FontAwesomeIcon
             className={classes.icon} 
             icon={faCaretLeft}
             onClick={()=>{this.previous()}}
             />

            <div className={classes.images}>
            {[0,1,2,3].map((index)=>{
                return(
                    <div>
                        <img src={this.state.images[index].img }
                        className={this.state.index===index ? classes.selected_slide : classes.slide}
                        onClick={()=>{return (this.HandleImageClick(index))}} ></img>
                    </div>
                    
                )
            })}  
            </div>
            
            <FontAwesomeIcon 
                className={classes.icon} 
                icon={faCaretRight}
                onClick={()=>{this.next()}}/>
        </div>
        
        )
    }
}


export default ImgGroup;