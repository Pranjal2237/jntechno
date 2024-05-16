import Banner from "@/components/banner";
import { aboutDescriptionArr, aboutValuesArr } from "@/constant";
import { aboutBanner, digital, qinsightBenifits1, terms } from "@/public";
import Image from "next/image";
import React from "react";
qinsightBenifits1;

const page = () => {
  return (
    <div>
      <Banner
        image={aboutBanner}
        heading="Building the Future, Together: Digital Engineering & Transformation Expertise."
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
            Workforce Scheduler
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
              Save valuable time by eliminating the need to spend countless
              hours crafting schedules for your team or staff. Master efficiency
              and empower your business with our revolutionary workforce
              scheduling solutions.
            </p>
            <p>
              ACL Digital’s Workforce Scheduling Software utilizes innovative
              artificial intelligence to optimize your scheduling process. Our
              Workforce Scheduler generates optimal schedules in a fraction of
              the time than it would take to do them manually. It helps
              businesses optimize staffing levels, match employee skills with
              tasks, and create schedules that meet operational needs while
              considering factors such as employee availability, labor
              regulations, and budget constraints.
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
      <div
        style={{ paddingBlock: "3rem", background: "#202834", color: "#fff" }}
      >
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2.5rem",
              marginTop: "30px",
            }}
          >
            {aboutDescriptionArr.map(({image,heading,description}) => (
              <div style={{ flex: "0 0 30%" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={image} />
                </div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginTop: "20px",
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
      <div style={{ paddingBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "600" }}>Vision</h1>
          <p>
          Being the top choice for creative solutions in Product Innovation and Digital Transformation.
          </p>
          <h1
            style={{ fontSize: "32px", fontWeight: "600", marginBlock: "30px" }}
          >
            Values
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
            {aboutValuesArr.map(({image,heading,description}) => (
              <div style={{ flex: "0 0 30%", display: "flex", gap: "1rem" }}>
                <div style={{ flexBasis: "60%" }}>
                  <Image src={image} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      marginBottom: "1rem",
                    }}
                  >
                    {heading}
                  </h3>
                  <p style={{ fontSize: "17px", color: "#333" }}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
