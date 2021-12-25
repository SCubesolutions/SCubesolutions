import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import ImageSlider from "./components/Products/ImageSlider"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar";
import {SliderData} from "./components/Products/SliderData";


ReactDOM.render(
    <BrowserRouter>
       <Navbar/>
       <Routes>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Contact" component={Contact}/>
              <Route exact path="/Products" component={ImageSlider}/>
      </Routes>
      <Footer />
      <Home />
            <ImageSlider slides={SliderData} />
      <Contact />
    </BrowserRouter>,
    
    document.getElementById('root')
);