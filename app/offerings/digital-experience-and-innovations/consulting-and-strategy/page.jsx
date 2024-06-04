import Banner from "@/components/banner";
import { blog } from "@/constant";
import { consultingBanner, digital, graphics8 } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner image={consultingBanner} heading="Join the Collaborative, Connected Digital World Today." height="560px" />
        <div className="wrapper page-heading">
          <p
          >
            Consulting & Strategy
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              In today’s digital age, organizations are increasingly utilizing
              information technology for digital transformation. Navigating the
              challenges of identifying, assessing, and deploying the right
              solutions is crucial. We grasp your strategic goals and combine
              them with our deep technological expertise to implement the most
              effective solutions. Let us help you drive your business forward
              with precision and innovation, ensuring a seamless digital
              transformation.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Our strategic IT consulting team is dedicated to helping you adapt
              and automate digital experiences, SaaS platforms, product
              engineering, and IT-led transformation services. Through our
              consulting and strategy-driven approach, we partner with you to
              co-innovate and co-create solutions. Enhance resilience and forge
              stronger connections with your customers, driving your business
              forward with tailored, cutting-edge technology.
            </h5>
          </div>
          <div
          className="about-image-container"
          >
            <Image src={graphics8}  />
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
