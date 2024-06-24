import Banner from "@/components/banner";
import { aboutDescriptionArr, aboutValuesArr } from "@/constant";
import { aboutBanner, digital, graphics35, qinsightBenifits1, terms } from "@/public";
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
        <div className="wrapper page-heading">
          <p
          >
            Jonaren Technology Pvt Ltd.
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Save valuable time by eliminating the need to spend countless
              hours crafting schedules for your team or staff. Master efficiency
              and empower your business with our revolutionary workforce
              scheduling solutions.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology’s Workforce Scheduling Software utilizes innovative
              artificial intelligence to optimize your scheduling process. Our
              Workforce Scheduler generates optimal schedules in a fraction of
              the time than it would take to do them manually. It helps
              businesses optimize staffing levels, match employee skills with
              tasks, and create schedules that meet operational needs while
              considering factors such as employee availability, labor
              regulations, and budget constraints.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics35} />
          </div>
        </div>
      </div>
        <div className="wrapper about-skills-container">
          <div
            className="about-skills-content-container"
          >
            {aboutDescriptionArr.map(({image,heading,description}) => (
              <div className="offerings_static-card">
                <div className="offerings_static-card-image">
                  <Image src={image} />
                </div>
                <h5
                  className="offerings_static-card-heading"
                >
                  {heading}
                </h5>
                <h5
                  className="offerings_static-card-content"
                >
                  {description}
                </h5>
              </div>
            ))}
          </div>
        </div>
        <div className="wrapper padding-block">
          <h1 style={{ fontWeight: "600" }}>Vision</h1>
          <p>
          Being the top choice for creative solutions in Product Innovation and Digital Transformation.
          </p>
          <h1
            style={{fontWeight: "600", marginBlock: "30px" }}
          >
            Values
          </h1>
          <div className="about-values-container">
            {aboutValuesArr.map(({image,heading,description}) => (
              <div className="about-values-item">
                <div style={{ flexBasis: "60%" }}>
                  <Image src={image} />
                </div>
                <div>
                  <h5
                    style={{
                      fontWeight: "600",
                      marginBottom: "1rem",
                    }}
                  >
                    {heading}
                  </h5>
                  <h5 style={{ color: "#333" }}>
                    {description}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default page;
