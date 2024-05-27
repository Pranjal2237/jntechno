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
        <div className="wrapper page-heading">
          <p
          >
            Customer Experience
          </p >
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
        className="about-container"
        >
          <div className="about-content-container">
            <h5>
              The signature of the customer experience (CX) bridges your brand
              with immersive experiences. We craft unique journeys, engaging
              deeply with your brand to understand the entire customer path from
              awareness to advocacy. To gain a competitive edge in the digital
              era, brands must view their business through the perspectives of
              customers and employees, leveraging emerging digital technologies
              to enhance and manage these experiences effectively.
            </h5>
            <h5>
              Jonaren Technology transforms and digitizes end-to-end business processes
              to elevate customer journeys. We craft solutions that create
              meaningful, lasting impressions by evaluating every customer
              interaction and multi-experience touchpoint. By integrating
              creative, content, commerce, and digital technology, we ensure a
              seamless and consistent total experience. Let us help you unlock
              the full potential of your business with innovative and effective
              digital solutions.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics11} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Offerings
          </h1>
          <h4 className="offerings-content">
            Jonaren Technology’s enterprise-grade Digital Experience platforms
            help enterprises achieve holistic digital transformations. The
            companies demand innovative and customized solutions with intuitive
            and meaningful digital experiences and a seamless end-to-end
            customer journey. Our range of Digital Experience & Innovation
            offerings include:
          </h4>
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
      <Banner
        image={workplaceBanner}
        heading="Ready for Digital Transformation?"
        description="For a strategic digital transformation roadmap, choose Jonaren Technology. We offer top-level assessments to gauge your organization’s digital maturity and guide your transformation journey."
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
              background: background,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="blog-item-container"
          >
            <div>
              <h4 className="blog-item-category">{category}</h4>
              <h3
              className="blog-item-heading"
              >
                {heading}
              </h3>
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
