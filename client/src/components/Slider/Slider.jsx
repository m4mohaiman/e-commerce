import React from 'react';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import "./Slider.scss"
import { useState } from 'react';


const Slider = () => {

  const [currentSlide , setCurrentSlide] = useState(0);



  const data = [
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3271065/pexels-photo-3271065.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2890999/pexels-photo-2890999.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    console.log('click')
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }

  return (
    <div className='slider'>
      <div className="container" style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <ArrowCircleLeftOutlinedIcon onClick={prevSlide}/>
        </div>
        <div className="icon">
          <ArrowCircleRightOutlinedIcon onClick={nextSlide}/>
        </div>
      </div>
    </div>
  )
}

export default Slider;