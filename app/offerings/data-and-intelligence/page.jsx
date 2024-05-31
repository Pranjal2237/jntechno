import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, dataOfferings, innovationOfferings } from "@/constant";
import { diBanner, digital, graphics43, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={diBanner}
        heading="Empowering Organizations with Intelligent Solutions for Future Preparedness."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Data & Intelligence
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Establishing an Intelligent Enterprise is essential for fostering
              product innovation, enhancing personalized customer experiences,
              optimizing operational efficiency, and attaining various business
              objectives.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Data, analytics, and AI are pivotal in constructing an Intelligent
              Enterprise. However, challenges arise in managing data,
              integrating data sources, and selecting appropriate analytics or
              AI techniques to ensure precise outcomes. Overcoming these hurdles
              is essential for unleashing the full potential of an Intelligent
              Enterprise and driving sustainable business growth.
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
            Our connected enterprise offerings
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
            {dataOfferings.map(
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
