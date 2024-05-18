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
  innovationOfferings,
  HomBannerCarousel,
} from "@/constant";
import { abiBanner, homeBanner9 } from "@/public";
import "../styles/global.css";
import Image from "next/image";
import Active from "@/components/cards/active";

const Home = () => {
  return (
    <div>
      <Carousel autoplay={true} BannerCarousel={HomBannerCarousel} />
      <div style={{ background: "#545454", padding: "3.5rem 0" }}>
        <div className="wrapper">
          <h1
            style={{
              fontSize: "32px",
              color: "#fff",
              fontWeight: "600",
              margin: "1rem 0",
            }}
          >
            We Enable Enterprise Digital Transformation
          </h1>
          <div className="transformation-assurance">
            {digital.map(({ image, heading }) => (
              <div>
                <Static image={image} heading={heading} />
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              boxShadow: "0px 3px 6px #00000029",
              marginTop: "2rem",
            }}
          >
            {transformation.map(({ heading, points }) => (
              <div className="transformation-box">
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "1rem",
                  }}
                >
                  {heading}
                </h4>
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
      </div>
      <Banner
        image={abiBanner}
        heading="Technology, Media, and Telecommunication"
        description="Our comprehensive services equip TMT companies to navigate the dynamic business landscape, building their ability to adapt and overcome challenges."
        buttonText="READ MORE"
        height="420px"
      />
      <div style={{ background: "#545454", padding: "3.5rem 0" }}>
        <div className="wrapper">
          <h1
            style={{
              fontSize: "32px",
              color: "#fff",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
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
      </div>
      <div style={{ padding: "1rem 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "0.3rem",
            rowGap: "0.3rem",
          }}
          className="wrapper"
        >
          <div
            style={{
              gridRow: "1/3",
              padding: "4rem 1rem",
              background: "#545454",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "600",
                marginBottom: "2rem",
              }}
            >
              Who we are
            </h1>
            <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
              Jonaren Technology
            </h2>
            <p style={{ fontWeight: "16px", marginTop: "10px" }}>
              Digital Product Innovation and Engineering Leader helping clients
              design and build innovative products.
            </p>
          </div>
          {about.map(({ image, heading, description }) => (
            <>
              <Image src={image} style={{ height: "100%" }} />
            </>
          ))}
        </div>
      </div>
      <div
        className="child"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
      >
        {blog.map(({ category, heading, background }) => (
          <div
            style={{
              height: "348px",
              background: background,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "1rem 1.5rem",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h4 style={{ fontSize: "14px" }}>{category}</h4>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                  width: "65%",
                }}
              >
                {heading}
              </h2>
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
