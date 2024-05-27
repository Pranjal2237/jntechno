import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import Dynamic from "@/components/cards/dynamic";
import { blog, homeBridgeOfferings, homeOfferings, innovationOfferings } from "@/constant";
import { digital, graphics28, qeaBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={qeaBanner}
        heading="Connected Enterprises – Radically Reforming Companies and Competition"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Quality Engineering & Automation
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              In today's digital era, software plays a pivotal role in business
              success, underscoring the significance of Quality Assurance (QA)
              testing services. QA testing is essential throughout the software
              development lifecycle, ensuring applications adhere to stringent
              quality, reliability, and performance benchmarks.
            </h5>
            <h5>
              Jonaren Technology adopts a comprehensive approach to quality assurance,
              integrating industry best practices with our domain expertise.
              Through our Test Automation Centre of Excellence, we provide
              tailored test automation solutions with custom-built frameworks.
              Our Quality Assurance Services aim to minimize testing expenses,
              expedite market readiness, and deliver flawless, agile software
              products for both ISVs and Enterprises, ensuring uncompromised
              quality and efficiency.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics28} />
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
            Jonaren Technology’s enterprise-grade Digital Experience platforms help
            enterprises achieve holistic digital transformations. The companies
            demand innovative and customized solutions with intuitive and
            meaningful digital experiences and a seamless end-to-end customer
            journey. Our range of Digital Experience & Innovation offerings
            include:
          </p>
          <div className="offering-container">
            {innovationOfferings.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
        </div>
      <div className="wrapper qinsight-benifits-container" style={{ paddingBlock: "4rem" }}>
        <h1>Choose Jonaren Technology for superior QA testing solutions and reliability</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2rem',marginTop:'2rem'}}>
          {
            homeOfferings.map(({heading,content,haveLogo,logo})=>(
              <>
                <Dynamic heading={heading} content={content} haveLogo={haveLogo} logo={logo} />
              </>
            ))
          }
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
