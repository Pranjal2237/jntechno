import Image from "next/image";
import React from "react";

const Banner = ({
  image,
  heading,
  description,
  haveButton = false,
  buttonText,
  height = "auto",
  justify="flex-start"
}) => {
  return (
    <div style={{ background: "green", position: "relative" }}>
      <div>
        <Image
          src={image}
          style={{ height: height, objectFit: "cover",width:'100%' }}
          alt="banner image"
        />
      </div>
      <div
        style={{
          color: "#fff",
          position: "absolute",
          zIndex: "10",
          inset: "0",
          maxWidth: "1100px",
          marginInline: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent:justify
        }}
      >
        <div
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: justify,
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              letterSpacing: "0.26px",
            }}
          >
            {heading}
          </h2>
          <p style={{ fontSize: "22px", fontWeight: "500" }}>{description}</p>
          {haveButton && (
            <button
              style={{
                border: "2px solid #fff",
                padding: "0.75rem 2rem",
                fontSize: "18px",
              }}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
