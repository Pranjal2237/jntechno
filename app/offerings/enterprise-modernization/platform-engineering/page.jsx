import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, platformOfferings } from "@/constant";
import { digital, graphics34, platformBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={platformBanner}
        heading="Driving Superior Digital Transformation: Platform Engineering Excellence"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Platform Engineering
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              In today's dynamic market, businesses must invest in
              cloud-enabled, cutting-edge technology platforms to enhance
              engagement with stakeholders. As the platform industry reshapes
              other sectors, modernization and innovative engineering are
              imperative. Premium digital platforms leverage analytics, data
              science, and cloud technology, adhering to rigorous security
              standards. They facilitate accelerated time to market and
              future-proofing, ensuring adaptability to evolving company needs.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology provides comprehensive platform engineering services
              throughout your organization's transformation journey. From
              planning and development to migration, deployment, and ongoing
              support, we ensure high-performance, scalable, and secure
              platforms. Leveraging AI and ML, we harness data to drive
              substantial growth for your business enterprise. Trust us to
              manage and maintain your platform effectively.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics34} />
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
            {platformOfferings.map(({ image, title, paragraph }) => (
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
