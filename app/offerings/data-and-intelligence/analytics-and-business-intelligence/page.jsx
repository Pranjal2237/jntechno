import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings } from "@/constant";
import { abiBanner, digital, graphics42, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={abiBanner}
        heading="Connected Enterprises – Radically Reforming Companies and Competition"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Analytics & Business Intelligence
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Business intelligence empowers companies to track trends, adapt to
              market shifts, and enhance decision-making across all
              organizational levels. Analytics delves into data to unveil
              insights for agile responses to market dynamics. Yet, translating
              data into actionable insights demands expertise. Our data experts
              deliver visually appealing presentations and in-depth analyses to
              uncover business strengths and weaknesses, driving informed
              strategies for success.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              With over two decades of expertise in Analytics and BI, Jpnaren Technology 
              offers tailored data intelligence solutions across
              industries. Our team ensures real-time insights and precise
              reporting, empowering informed strategic decisions on diverse
              platforms.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics42} />
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
            {innovationOfferings.map(({ image, title, paragraph }) => (
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
