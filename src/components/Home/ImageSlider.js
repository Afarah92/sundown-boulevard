import React, {useState} from 'react'
import '../Home/imageSlider.css';
import { sliderData } from '../Home/sliderData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft}  from 'react-icons/fa';



const ImageSlider = ({slides}) => {
    const [current,setCurrent]= useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide =  () => {
        setCurrent(current ===  0 ? length -1 : current -1)
    }



    if(!Array.isArray(slides) ||slides.length <= 0) {
        return null;
    }
    
    return (
        <div className="slider">
            <section className="sliders">
     <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
     <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>


            {sliderData.map((slide, index)=>{


                return(
  <div className={index === current ?  'slide active':'slide' } key={index}>
      {index === current && (              <img src={slide.images} alt="food" className="image"/>
)}


                    </div>
                )

            })}
            </section>
            
        </div>
    )
}

export default ImageSlider