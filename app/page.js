import Banner from "@/components/banner";
import React from "react";
import Carousel from "@/components/carousel";
import Static from "@/components/cards/static";
import {
  digital,
  innovation,
  transformation,
  about,
  blog,
  HomBannerCarousel,
} from "@/constant";
import { abiBanner } from "@/public";
import "../styles/global.css";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Carousel autoplay={true} BannerCarousel={HomBannerCarousel} />
      <div className="wrapper padding-block" style={{ background: "#545454" }}>
        <h1 className="home_transformation-heading">
          We Enable Enterprise Digital Transformation
        </h1>
        <div className="transformation-assurance">
          {digital.map(({ image, heading }) => (
            <div>
              <Static image={image} heading={heading} />
            </div>
          ))}
        </div>
        <div className="home_tranformation-solution-box">
          {transformation.map(({ heading, points }) => (
            <div className="transformation-box">
              <h5
                className="home_tranformation-solution-box-heading"
              >
                {heading}
              </h5>
              <div className="transformation-content">
                {points.map((point) => (
                  <>
                    <p style={{ fontSize: "13px" }}>{point}</p>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Banner
        image={abiBanner}
        heading="Technology, Media, and Telecommunication"
        description="Our comprehensive services equip TMT companies to navigate the dynamic business landscape, building their ability to adapt and overcome challenges."
        buttonText="READ MORE"
        haveButton={true}
        height="420px"
        link="/industries/tmt"
      />
        <div className="wrapper padding-block" style={{background:"#545454"}}>
          <h1
            className="home_transformation-heading"
          >
            Innovation Frameworks
          </h1>
          <div className="innovation-box">
            {innovation.map(({ image, heading, description }) => (
              <div>
                <Static
                  image={image}
                  heading={heading}
                  description={description}
                  width="60px"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="wrapper jonaren_analysis-box wrapper-block"
        >
          <div
          >
            <h1
              style={{
                fontWeight: "600",
                marginBottom: "2rem",
              }}
            >
              Who we are
            </h1>
            <h3 style={{fontWeight: "600" }}>
              Jonaren Technology
            </h3>
            <h5 style={{ marginTop: "10px" }}>
              Digital Product Innovation and Engineering Leader helping clients
              design and build innovative products.
            </h5>
          </div>
          {about.map(({ image, heading, description }) => (
            <>
              <Image src={image} style={{ height: "100%" }} />
            </>
          ))}
        </div>
      <div
        className="child blog-main-container"
      >
        {blog.map(({ category, heading, background }) => (
          <div
            style={{
              background: background,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="blog-item-container"
          >
            <div>
              <h4 className="blog-item-category">{category}</h4>
              <h3
                className="blog-item-heading"
              >
                {heading}
              </h3>
            </div>
            <button style={{ width: "max-content" }}>
              <p style={{ fontWeight: "600", fontSize: "16px" }}>READ MORE</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
