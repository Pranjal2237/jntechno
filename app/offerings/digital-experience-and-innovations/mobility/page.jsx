import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, mobileOfferings } from "@/constant";
import {  graphics6, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="Elevating Mobility: Innovative, Secure, and Interconnected Solutions for Modern Lifestyles"
        description="Empowering Digital Growth and Evolution: Driving Innovation in the Economy"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p>
            Mobile Experience
          </p>
        </div>
        <div
          className="wrapper wrapper-block about-container"
        >
          <div className="about-content-container">
            <h5>
              Mobile apps are catalysts for digital transformation, enhancing
              both enterprise operations and consumer experiences. They boost
              employee engagement and offer customers seamless interactions. A
              compelling mobile presence is pivotal in shaping and enriching
              every step of the customer journey. Elevate your digital strategy
              with our dynamic and engaging mobile solutions.
            </h5>
            <h5>
              Harnessing expertise in iOS, Android, and Hybrid mobile
              frameworks, we blend industry-specific insights to empower
              organizations with a competitive digital advantage. Elevate your
              mobile strategy with our tailored solutions.
            </h5>
          </div>
          <div className="about-image-container">
            <Image src={graphics6}  />
          </div>
        </div>
        <div className="wrapper wrapper-block">
          <h1 className="offerings-heading">
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
            {mobileOfferings.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
        </div>
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
              <h5 style={{ fontWeight: "600" }}>READ MORE</h5>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
