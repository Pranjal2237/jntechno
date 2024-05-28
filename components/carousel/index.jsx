'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner from '../banner';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",position:'absolute',right:'2%' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",position:'absolute',left:'2%' }}
        onClick={onClick}
      />
    );
  }
  

const Carousel = ({autoplay=false,BannerCarousel}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoplay,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
          customPaging: i => (
            <div
              style={{
                width: "25px",
                color: "blue",
                height:'7px',
                background:'#fff',
                borderRadius:'10px',
                position:'absolute',
                top:'-200%'
              }}
            >
            </div>
          )
      };
  return (
    <div >
      <Slider {...settings}>
        {BannerCarousel?.map(({image,heading,description,link,haveButton=false,buttonText=""})=>{
            return(
            <>
            <Banner image={image} heading={heading} link={link} height='560px' description={description} haveButton={haveButton} buttonText={buttonText} />
            </>
            )
        })}
      </Slider>
    </div>
  )
}

export default Carousel
