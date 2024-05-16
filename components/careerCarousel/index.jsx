'use client'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { careerCarousel } from "@/constant";
import Image from "next/image";
import '@/styles/global.css'

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
  

const CareerCarousel = ({autoplay=false}) => {
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
                top:'-50%'
              }}
            >
            </div>
          )
      };
  return (
    <div className="career-carousel-container">
      <Slider {...settings}>
        {careerCarousel.map(({image,caption,name,position})=>(
            <>
            <div  className="career-carousel-item">
                <div style={{flex:'0 0 20%'}}>
                    <Image src={image} />
                </div>
                <div style={{color:'#fff',fontSize:'20px',fontWeight:'600'}}>
                    <p style={{textAlign:'center',marginBottom:'1rem'}}>{caption}</p>
                    <div style={{textAlign:'right',paddingBlock:'1.5rem',borderTop:'2px solid #fff'}}>
                        <p style={{color:'var(--orange)'}}>{name}</p>
                        <p>{position}</p>
                    </div>
                </div>
            </div>
            </>
        ))}
      </Slider>
    </div>
  )
}

export default CareerCarousel
