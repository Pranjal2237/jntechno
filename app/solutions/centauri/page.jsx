import Banner from "@/components/banner";
import { blog, homeBridgeOfferings } from "@/constant";
import {
  digital,
  homeBanner9,
  qinsightBenifits1,
  terms,
} from "@/public";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="IoT Gateway Platform for Industrial and Enterprise Applications"
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
            CENTAURI 200
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
              ACL Digital CENTAURI 200 IoT Gateway platform is exclusively
              designed to suit all the requirements of the enterprise/industrial
              IoT Gateway Solution. Gateway is developed on power-efficient,
              secure, and cost-optimized ARM® Cortex®-A7 based i.MX6UL/6ULL/6ULZ
              SoC. This facilitates a greater amount of flexibility in
              delivering various RF connectivity and peripherals to make a
              customized solution according to the end-user requirements.
            </p>
            <p>
              ACL Digital also offers a CENTAURI Software Framework for all OEMs
              to rapidly develop applications. CENTAURI Gateway platform is
              pre-integrated with well-known cloud & application platform
              providers to help OEMs with quicker application development. OEMs
              can build Zigbee gateway, Z-Wave gateway, BLE gateway, and Thread
              gateway-based solutions on the platform with any two radios
              supported at a time. CENTAURI Gateway platform is available under
              OEM offerings to reduce time to market so that you can focus more
              on creating value in end-user applications. CENTAURI 200 is AWS
              Greengrass certified and listed on the AWS device catalog.
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
            <Image src={digital} style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <div style={{ paddingBlock: "3rem", color: "#333" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
          CENTAURI 200 Offerings
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            {homeBridgeOfferings.map(({ heading, content }) => (
              <div
                style={{
                  flex: "0 1 31%",
                  paddingInline: "1rem",
                  paddingBlock: "3rem",
                  background: "#f7f7f6",
                  boxShadow: "0 3px 6px #00000029",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "7px",
                  }}
                >
                  {heading}
                </h3>
                <p>{content}</p>
              </div>
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
            {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map(() => (
              <div style={{ flex: "0 0 30%" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={qinsightBenifits1} />
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
                  Enhanced Security System
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    marginTop: "12px",
                    textAlign: "center",
                  }}
                >
                  Role-based access, password-protected downloads, and control
                  file types
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
            {[1, 2, 3, 4].map(() => (
              <div style={{ flex: "0 0 23%" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={qinsightBenifits1} />
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
                  Enhanced Security System
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    marginTop: "12px",
                    textAlign: "center",
                  }}
                >
                  Role-based access, password-protected downloads, and control
                  file types
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Banner
        image={homeBanner9}
        heading="Technology, Media, and Telecommunication"
        description="With a holistic approach, our experts help TMT companies thrive in the rapidly changing business landscape. Together, we increase adaptability and resilience across industries"
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
