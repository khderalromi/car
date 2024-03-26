import React, { Component ,createContext} from "react";
import data from '../../data.json';
import Deatils from "./DetailsPage/DetailsPage";
import Cart from "../Cart/Cart";

import Audi from '../../assests/images/one.png';
import Honda from '../../assests/images/tow.png';
import BMW from '../../assests/images/three.png';
import Volvo from '../../assests/images/four.png';
import Background from '../../assests/images/Vectorr2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight,faArrowLeft } from 
'@fortawesome/free-solid-svg-icons';
import classes from './details.css';



export const Info= createContext()
class Details extends Component{
    state={
        index:3,
        cart:[],
        images:[
            {img:Audi,name:'Audi'},
            {img:Honda,name:'Honda'},
            {img:BMW,name:'BMW'},
            {img:Volvo,name:'Volvo'},],
        info:[]    
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
        
            <div className={classes.DeatailsBage}>
       
                <Deatils className={classes.Deatils} 
                        price={data.cars.find((car)=>{
                        return (car.Name===this.state.images[this.state.index].name)}).Price}
                        type={data.cars.find((car)=>{
                            return (car.Name===this.state.images[this.state.index].name)}).Type}
                        power={data.cars.find((car)=>{
                            return (car.Name===this.state.images[this.state.index].name)}).Power}
                        img={this.state.images[this.state.index].img} 
                        name={this.state.images[this.state.index].name} /*you can export this name from data.json too*/
                         
                            
                />
                
                
                <div className={classes.slider}>
                    <FontAwesomeIcon onClick={()=>{this.previous()}}
                     className={classes.icon} 
                     icon={faArrowLeft} />


                    {[0,1,2,3].map((index)=>{
                        return(
                            <img src={this.state.images[index].img}
                            className= {this.state.index===index ? classes.selected_slide : classes.slide} 
                            onClick={()=>{return (this.HandleImageClick(index))}}
                            ></img>
                        )
                    })}
                    <FontAwesomeIcon 
                    onClick={()=>{this.next()}} className={classes.icon} 
                    icon={faArrowRight} />
                </div>
                <img src={Background} className={classes.background}></img>
           
                
                

            </div>
          
        )
    }
}


export default Details;