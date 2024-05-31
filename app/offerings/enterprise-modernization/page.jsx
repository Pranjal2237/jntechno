import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, enterpriseModOfferings, innovationOfferings } from "@/constant";
import {
  digital,
  enterpriseModernizationBanner,
  graphics23,
  graphics27,
} from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={enterpriseModernizationBanner}
        heading="Driving Enterprise Evolution: Modernize for Success"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Enterprise Modernization 
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Enterprise modernization is imperative for businesses to integrate
              new digital technologies and stay competitive in today's
              ever-evolving landscape. Prioritizing digital transformation
              ensures adaptability and scalability, yet technical limitations
              and infrastructure constraints can hinder progress. A
              forward-thinking, value-adding plan is essential for a seamless
              transition. Let us guide your enterprise through this journey,
              overcoming obstacles and unlocking new opportunities for growth
              and innovation.
            </h5>
            <h5 style={{marginTop:'10px'}}
            >
              Rely on Jonaren Technology's enterprise modernization experts for
              comprehensive expertise in cloud transformation, connected
              enterprise solutions, platform engineering, agility, automation,
              and beyond. Elevate your business with our tailored approach.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics23} />
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
            Jonaren Technology’s enterprise-grade Digital Experience platforms help
            enterprises achieve holistic digital transformations. The companies
            demand innovative and customized solutions with intuitive and
            meaningful digital experiences and a seamless end-to-end customer
            journey. Our range of Digital Experience & Innovation offerings
            include:
          </p>
          <div className="offering-container">
            {enterpriseModOfferings.map(
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
