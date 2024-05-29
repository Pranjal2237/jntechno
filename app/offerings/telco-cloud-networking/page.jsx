import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import {
  blog,
  dataOfferings,
  innovationOfferings,
  telcoOfferings,
} from "@/constant";
import { diBanner, digital, graphics43, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={diBanner}
        heading="Harness Unyielding Infrastructure for Swift Innovation and Enhanced Flexibility."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Telco, Cloud & Networking
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              In today's fast-paced market, Telco, Cloud & Networking businesses
              face the constant challenge of innovation amid budget and resource
              constraints. Staying ahead of the curve requires adept adaptation
              and agile strategies.
            </h5>
            <h5>
              Cloud computing serves as a sturdy base for digital
              transformation, but its effectiveness relies on pivotal choices
              concerning technology, vendors, and integration. Jonaren Technology
              specializes in Telco, Cloud & Networking, tackling these
              challenges head-on. Leveraging insights into your legacy
              infrastructure and digital aspirations, we craft tailored
              solutions that fuel your innovation and propel growth.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics43} />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Offerings
          </h1>
          <p className="offerings-content">
            Jonaren Technology’s enterprise-grade Digital Experience platforms
            help enterprises achieve holistic digital transformations. The
            companies demand innovative and customized solutions with intuitive
            and meaningful digital experiences and a seamless end-to-end
            customer journey. Our range of Digital Experience & Innovation
            offerings include: 
          </p>
          <div className="offering-container">
            {telcoOfferings.map(
              ({ image, title, paragraph, haveLink, link }) => (
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
              <h2
                className="blog-item-heading"
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
