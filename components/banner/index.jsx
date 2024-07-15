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
  height = "560px",
  justify="flex-start",
  link="#enquiry",
  width="100%"
}) => {
  return (
    <div className="banner-container">
      <div>
        <Image
          src={image}
          style={{  objectFit: "cover",height:height }}
          alt="banner image"
          width={width}
          height={height}
        />
      </div>
      <div
        style={{
          justifyContent:justify
        }}
        className="wrapper banner-content-container"
      >
        <div
          style={{
            alignItems: justify,
          }}
          className="banner-content-items-container"
        >
          <h2
            style={{
              fontWeight: "var(--fw-semi_bold)",
              letterSpacing: "0.26px",
            }}
          >
            {heading}
          </h2>
          <h3 style={{fontWeight: "500" }}>{description}</h3>
          {haveButton && (
            <button
              className="banner-button"
            >
              <Link href={link}>{buttonText}</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
