import React, { Component } from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Details from './components/Deatails/details';
import classes from './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import { createContext ,useState,useEffect} from "react";
import Cookies from 'js-cookie';


export const ContextInfo = createContext(null);

const App=(props)=> {
  const [Info,setInfo]= useState([]);
  const values={Info,setInfo}


  useEffect(()=>{
    const storedData=Cookies.get("myCars")
    if(storedData){
      setInfo(JSON.parse(storedData))
    }
  },[])
  

     return (
      
      <div className="App">
        
        <ContextInfo.Provider value={values}>
        <Router>
        
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path="/cart" element={<Cart/>} />
           
          </Routes>
          
        </Router> 
         </ContextInfo.Provider>
      </div>
    );
  
}

export default App;
