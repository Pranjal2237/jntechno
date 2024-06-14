import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, pssOfferings } from "@/constant";
import { digital, graphics38, pssBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={pssBanner}
        heading="Revitalize Your Product for Enhanced Customer Experience and Engagement"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Product Sustenance & Support
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Amidst evolving technologies, product companies face challenges in
              sustaining product relevance and market position. Adapting to
              changing customer needs and employing modern engineering
              techniques is vital for ensuring the continued functionality and
              performance of software products.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Product sustenance and support services are essential for
              preserving mature product lines, encompassing monitoring,
              analytics, maintenance, and updates. These efforts ensure the
              continued functionality and effectiveness of product features,
              maintaining customer satisfaction and market competitiveness.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics38} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Our connected enterprise offerings
          </h1>
          <h5 className="offerings-content">
            Jonaren Technology’s enterprise-grade Digital Experience platforms help
            enterprises achieve holistic digital transformations. The companies
            demand innovative and customized solutions with intuitive and
            meaningful digital experiences and a seamless end-to-end customer
            journey. Our range of Digital Experience & Innovation offerings 
            include:
          </h5>
          <div className="offering-container">
            {pssOfferings.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
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
