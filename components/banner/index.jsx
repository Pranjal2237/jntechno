import Image from "next/image";
import React from "react";
import styles from './styles.module.css'
import Link from "next/link";

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
    <div style={{position: "relative" }}>
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
          display: "flex",
          alignItems: "center",
          justifyContent:justify
        }}
        className="wrapper"
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
              fontWeight: "var(--fw-semi_bold)",
              letterSpacing: "0.26px",
            }}
          >
            {heading}
          </h2>
          <p style={{ fontSize: "20px", fontWeight: "500" }}>{description}</p>
          {haveButton && (
            <button
              style={{
                border: "2px solid #fff",
                padding: "0.75rem 2rem",
                fontSize: "18px",
              }}
            >
              <Link href='#enquiry'>{buttonText}</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
