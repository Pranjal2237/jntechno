
import Image from "next/image";
import React from "react";

const Static = ({ image, heading, description,direction="column",width='40px' }) => {
  return (
    <div
      style={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: direction,
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgba(0, 0, 0, .125)",
        cursor: "pointer",
        height:'100%'
      }}
    >
      <div style={{width:width}}>
        <Image src={image} alt="image" style={{width:'100%'}} />
      </div>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontSize: "17px", fontWeight: "600", margin: "5px 0px" }}>
          {heading}
        </h3>
        <p style={{ fontSize: "16px" }}>{description}</p>
      </div>
    </div>
  );
};

export default Static;
