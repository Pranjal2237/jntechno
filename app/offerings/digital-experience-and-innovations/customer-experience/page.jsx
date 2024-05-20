import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, customerOfferings, innovationOfferings } from "@/constant";
import {
  customerBanner,
  digital,
  graphics11,
  homeBanner9,
  workplaceBanner,
} from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={customerBanner}
        heading="Transform Your Business with a Customer Experience Focus."
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
        <div className="wrapper">
          <h2
            style={{
              fontSize: "28px",
              color: "#333",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            Customer Experience
          </h2>
        </div>
      </div>
      <div style={{ marginBlock: "2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="wrapper"
        >
          <div style={{ flexBasis: "100%", color: "#333", fontSize: "18px" }}>
            <p>
              The signature of the customer experience (CX) bridges your brand
              with immersive experiences. We craft unique journeys, engaging
              deeply with your brand to understand the entire customer path from
              awareness to advocacy. To gain a competitive edge in the digital
              era, brands must view their business through the perspectives of
              customers and employees, leveraging emerging digital technologies
              to enhance and manage these experiences effectively.
            </p>
            <p>
              ACL Digital transforms and digitizes end-to-end business processes
              to elevate customer journeys. We craft solutions that create
              meaningful, lasting impressions by evaluating every customer
              interaction and multi-experience touchpoint. By integrating
              creative, content, commerce, and digital technology, we ensure a
              seamless and consistent total experience. Let us help you unlock
              the full potential of your business with innovative and effective
              digital solutions.
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
            <Image src={graphics11} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      <div style={{ marginBlock: "3rem" }}>
        <div className="wrapper">
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
            Jonaren Technology’s enterprise-grade Digital Experience platforms
            help enterprises achieve holistic digital transformations. The
            companies demand innovative and customized solutions with intuitive
            and meaningful digital experiences and a seamless end-to-end
            customer journey. Our range of Digital Experience & Innovation
            offerings include:
          </p>
          <div className="offering-container">
            {customerOfferings.map(
              ({ image, title, paragraph, haveLink = false, link = "/" }) => (
                <div>
                  <Active
                    image={image}
                    title={title}
                    paragraph={paragraph}
                    haveLink={haveLink}
                    link={link}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Banner
        image={workplaceBanner}
        heading="Ready for Digital Transformation?"
        description="For a strategic digital transformation roadmap, choose ACL Digital. We offer top-level assessments to gauge your organization’s digital maturity and guide your transformation journey."
        haveButton={true}
        buttonText="LEARN MORE"
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
