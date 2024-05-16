"use client";

import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import Carousel from "@/components/carousel";
import { blog, digitalBannerCarousel, innovationOfferings } from "@/constant";
import { digital, homeBanner9, innovationBanner2 } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Carousel autoplay={true} BannerCarousel={digitalBannerCarousel} />
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
            Digital Experience & Innovations
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
          <div style={{ flexBasis: "100%", color: "#333", fontSize: "18px" }}>
            <p>
              Today, digital experiences shape how customers interact with
              organizations' offerings in both B2B and B2C sectors. Customers,
              central to these experiences, influence decisions through personas
              and journeys. Thus, organizations must prioritize beyond product
              creation, emphasizing seamless experiences across channels to
              drive engagement, adoption, and business success.
            </p>
            <p>
              To excel, businesses must grasp customer needs, adapting swiftly
              to offer top-notch experiences across all interactions.
              Internally, digital tools aid in customer outreach and service.
              Digital Marketing amplifies reach, tailoring messages for targeted
              audience segments, nurturing brand recognition, customer interest,
              leads, and loyalty.
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
            <Image src={digital} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      <div style={{ marginBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "0.2rem",
            }}
          >
            Offerings
          </h1>
          <p style={{ width: "75%", marginBlock: "12px", fontSize: "16px" }}>
            ACL Digital's robust Digital Experience platforms empower
            enterprises in comprehensive digital transformations. Firms seek
            tailored solutions that deliver intuitive, impactful digital
            experiences and streamline customer journeys seamlessly. Our suite
            of Digital Experience & Innovation services encompasses:
          </p>
          <div className="offering-container">
            {innovationOfferings.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Banner
        image={innovationBanner2}
        heading="Experience 360"
        description="Experience a seamless blend of customer, user, and employee interactions with ACL Digital's Total Experience Strategy. Our innovative approach and deliverables ensure a comprehensive 360° experience for your organization's success."
        haveButton={true}
        buttonText="TALK TO OUR CONSULTANT"
        height="420px"
      />
      <div style={{ background: "#f8f8f8", padding: "2rem 0 4rem 0" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "2rem",
            }}
          >
            Design-led Digital Experience Transformation
          </h1>
          <div style={{ display: "flex", gap: "2.5rem", color: "#333" }}>
            <p style={{ flexBasis: "100%" }}>
              ACL Digital collaborates with organizations to orchestrate
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
              ACL Digital offers comprehensive digital expertise across various capabilities.
              </p>
              <ul style={{ marginTop: "10px" }}>
                <li>
                Digital, Business, Customer, and Product Strategy Expertise Combined.
                </li>
                <li>
                Crafting Digital Interactives: UX Design, Mobile Apps, Portals, Chatbots, and More, Seamlessly Engineered for Impact.
                </li>
                <li>
                End-to-End Digital Marketing and CX Consulting with Seamless Platform Implementation for Your Success.
                </li>
                <li>
                Complete Managed Services for Your Digital Experience Ecosystem.
                </li>
              </ul>
            </div>
          </div>
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

export default page;
