import React from 'react'
import ImageSlider from '../Home/ImageSlider'
import OrderBox from '../Home/OrderBox';
import ContentBox from '../Home/ContentBox';
import FindOrder from '../Home/FindOrder';
import '../Home/home.css';
import { sliderData } from '../Home/sliderData';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';




const Home = () => {
  
    return (
        <div>
          

      <div className="flex">
      <ImageSlider slides={sliderData}/>
  
      <OrderBox />

  
 
   

      </div>

      <div className="flex">
      <FindOrder />
      <ContentBox />
   

      </div>
    
 

 
        </div>
    )

  
}


export default Home