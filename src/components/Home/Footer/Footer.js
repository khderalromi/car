import React from "react";
import Logo from "../../../assests/images/Logo.png";
import classes from './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocation,faPhone,faMessage,f } from 
'@fortawesome/free-solid-svg-icons';
import {  faFacebook,faTwitter,faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
const Footer=(props)=>{
    return(
        <div className={classes.footer}>
            <footer >
                <div className={classes.element1}>
                    <img src={Logo} ></img>
                    <p>CAR COMPANY</p>
                </div>

                <div className={classes.element2}>
                    <h3>Menu</h3>
                    <a>Home</a>
                    <a>Car Catalogue</a>
                    <a>Services</a>
                </div>

                <div className={classes.element3}>
                    <h3>Further Information</h3>
                    <a>Terms & Conditions</a>
                    <a>Privicy Policy</a>
                </div>

                <div className={classes.element4}>
                    <h3>Contact us</h3>
                    <div className={classes.content}>
                       
                        <p> <FontAwesomeIcon icon={faLocation} /> 647P+4G5,Seif Al-<br></br>  Doleh, Aleppo, Syria</p>
                    </div>

                    <div className={classes.content} >
                       
                        <p> <FontAwesomeIcon icon={faPhone} /> +96323456</p>
                    </div>

                    <div className={classes.content}>
                       
                        <p>  <FontAwesomeIcon icon={faMessage} /> tagred@gmail.com</p>
                    </div>
            
                </div>

                <div className={classes.element5}>
                    <h3>Follow us</h3>
                    <div className={classes.content}>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faInstagramSquare}/>
                    </div>
                
                </div>
                
            </footer>

        </div>
        

       
    )
    

}

export default Footer;