import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import PictureCar from './components/MainPictures/pictureCar';
import Home from './components/Home/Home';
import SecyionType from './components/SecyionType/SecyionType';
import Categories from './components/Categories/Categories';
import MainPage from './components/Pages/MainPage';
import Details from './components/Deatails/details';
import classes from './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path="/cart" element={<Cart/>} />
           
          </Routes>
        
        </Router>  
      </div>
    );
  }
}

export default App;
