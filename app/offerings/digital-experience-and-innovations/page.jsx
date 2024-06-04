"use client";

import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import Carousel from "@/components/carousel";
import { blog, digitalBannerCarousel, innovationOfferings } from "@/constant";
import { digital, graphics10, homeBanner9, innovationBanner2 } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Carousel autoplay={true} BannerCarousel={digitalBannerCarousel} />
      <div className="wrapper page-heading">
        <h2
          style={{
            fontSize: "23px",
            color: "#333",
            fontWeight: "var(--fw-bold)",
          }}
        >
          Digital Experience & Innovations
        </h2>
      </div>
      <div className="wrapper about-container wrapper-block">
        <div className="about-container">
          <div className="about-content-container">
            <h5>
              Today, digital experiences shape how customers interact with
              organizations' offerings in both B2B and B2C sectors. Customers,
              central to these experiences, influence decisions through personas
              and journeys. Thus, organizations must prioritize beyond product
              creation, emphasizing seamless experiences across channels to
              drive engagement, adoption, and business success.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              To excel, businesses must grasp customer needs, adapting swiftly
              to offer top-notch experiences across all interactions.
              Internally, digital tools aid in customer outreach and service.
              Digital Marketing amplifies reach, tailoring messages for targeted
              audience segments, nurturing brand recognition, customer interest,
              leads, and loyalty.
            </h5>
          </div>
          <div className="about-image-container">
            <Image src={graphics10} />
          </div>
        </div>
      </div>
      <div className="wrapper wrapper-block">
        <h1 className="offerings-heading">Offerings</h1>
        <h4 className="offerings-content">
          Jonaren Technology's robust Digital Experience platforms empower
          enterprises in comprehensive digital transformations. Firms seek
          tailored solutions that deliver intuitive, impactful digital
          experiences and streamline customer journeys seamlessly. Our suite of
          Digital Experience & Innovation services encompasses:
        </h4>
        <div className="offering-container">
          {innovationOfferings.map(
            ({ image, title, paragraph, haveLink, link }) => (
              <div>
                <Active
                  image={image}
                  title={title}
                  haveLink={haveLink}
                  link={link}
                  paragraph={paragraph}
                />
              </div>
            )
          )}
        </div>
      </div>
      <Banner
        image={innovationBanner2}
        heading="Experience 360"
        description="Experience a seamless blend of customer, user, and employee interactions with Jonaren Technology's Total Experience Strategy. Our innovative approach and deliverables ensure a comprehensive 360° experience for your organization's success."
        haveButton={true}
        buttonText="TALK TO OUR CONSULTANT"
        height="420px"
      />
      <div style={{ background: "#f8f8f8", padding: "2rem 0 4rem 0" }}>
        <div className="wrapper">
          <h1
            style={{
              fontWeight: "600",
              marginBottom: "2rem",
            }}
          >
            Design-led Digital Experience Transformation
          </h1>
          <div style={{ display: "flex", gap: "2.5rem", color: "#333" }}>
            <p style={{ flexBasis: "100%" }}>
              Jonaren Technology collaborates with organizations to orchestrate
              complete digital transformations across their ecosystems. Through
              DEXTRA (Design-led Digital Experience Transformation), we
              prioritize customer journeys and design, facilitating
              transformation for enterprises of all sizes. Our approach allows
              customization of digital interfaces and products to align with
              business goals, empowering organizations to evolve at their own
              pace and achieve their objectives effectively.
            </p>
            <div style={{ flexBasis: "100%" }}>
              <p>
                Jonaren Technology offers comprehensive digital expertise across
                various capabilities.
              </p>
              <ul style={{ marginTop: "10px" }}>
                <li>
                  Digital, Business, Customer, and Product Strategy Expertise
                  Combined.
                </li>
                <li>
                  Crafting Digital Interactives: UX Design, Mobile Apps,
                  Portals, Chatbots, and More, Seamlessly Engineered for Impact.
                </li>
                <li>
                  End-to-End Digital Marketing and CX Consulting with Seamless
                  Platform Implementation for Your Success.
                </li>
                <li>
                  Complete Managed Services for Your Digital Experience
                  Ecosystem.
                </li>
              </ul>
            </div>
          </div>
        </div>
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
              <h3 className="blog-item-heading">{heading}</h3>
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
