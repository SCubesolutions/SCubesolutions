import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ImageSlider from "./components/Products/ImageSlider";
import { SliderData } from "./components/Products/SliderData";
import Contact from "./components/Contact/Contact";


import './App.css';


function App() {
  return (
    <>
    
      <Navbar />,
      <Home />,    
      <ImageSlider slides={SliderData} />,
      <Contact />, 
      <Footer />,

      
      </>
      )
  }

export default App;
