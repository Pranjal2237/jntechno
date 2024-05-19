import Banner from "@/components/banner";
import Dynamic from "@/components/cards/dynamic";
import {
  blog,
  homeBridgeOfferings,
  homebridgeApplications,
  homebridgeFeatures,
} from "@/constant";
import {
  digital,
  graphics16,
  homeBanner9,
  qinsightBenifits1,
  qinsightBenifits2,
  qinsightBenifits3,
  qinsightBenifits4,
  terms,
} from "@/public";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="Smart Home IoT Gateway Solution."
        height="560px"
      />
      <div
        style={{
          padding: "1rem 0",
          boxShadow: "0px 3px 6px #00000029",
          background: "#fff",
          position: "sticky",
          top: "0px",
        }}
      >
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h2
            style={{
              fontSize: "28px",
              color: "#333",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            HomeBridge
          </h2>
        </div>
      </div>
      <div style={{ marginBlock: "2rem" }}>
        <div
          style={{
            width: "1100px",
            marginInline: "auto",
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          <div style={{ flexBasis: "100%", color: "#333", fontSize: "16px" }}>
            <p>
              HomeBridge® is a smart home automation IoT gateway solution
              designed for OEMs, providing a cost-effective and secure way to
              connect IoT devices to leading cloud platforms using SDK-based
              connectivity. Capable of managing over 40 smart edge devices,
              HomeBridge® offers standard features for industry applications.
              Available as a white-label solution, it allows OEMs and IoT device
              manufacturers to customize it to their market needs. With Jonaren
              Technology's IoT gateway, manufacturers can leverage a
              ready-to-production platform, benefiting from OEM customization,
              faster time to market, and reduced ownership costs, thus
              streamlining the creation of IoT solutions.
            </p>
          </div>
          <div
            style={{
              flexBasis: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={graphics16} style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <div style={{ paddingBlock: "3rem", color: "#333" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
            HomeBridge Offerings
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            {homeBridgeOfferings.map(({ heading, content }) => (
              <Dynamic heading={heading} content={content} />
            ))}
          </div>
        </div>
      </div>
      <div className="qinsight-benifits-container">
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontWeight: "700", fontSize: "32px" }}>Key Features</h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2.5rem",
              marginTop: "30px",
            }}
          >
            {homebridgeFeatures.map(({ image, heading, description }) => (
              <div style={{ flex: "0 0 30%" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={image} />
                </div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginTop: "20px",
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  {heading}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    marginTop: "12px",
                    textAlign: "center",
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="qinsight-benifits-container"
        style={{ marginTop: "30px" }}
      >
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1
            style={{ fontWeight: "700", fontSize: "32px", textAlign: "center" }}
          >
            Industry Applications
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            {homebridgeApplications.map(({ image, heading, description }) => (
              <div style={{ flex: "0 0 23%" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={image} />
                </div>
                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "20px",
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  {heading}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    marginTop: "12px",
                    textAlign: "center",
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Banner
        image={homeBanner9}
        heading="Specification Overview"
        description="Discover HomeBridge, an affordable gateway platform for OEMs, featuring customizable options for diverse industry applications. Explore the demo for a comprehensive look at its features."
        haveButton={true}
        buttonText="READ MORE"
        height="420px"
      />
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

export default page;
