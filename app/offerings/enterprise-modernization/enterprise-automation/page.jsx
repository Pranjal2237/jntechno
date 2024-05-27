import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, enterpriseAutOfferings, innovationOfferings } from "@/constant";
import {
  digital,
  enterpriseAutomationBanner,
  graphics18,
  terms,
} from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={enterpriseAutomationBanner}
        heading="Empowering Enterprise Evolution: Automation at the Forefront of Digital Transformation"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Enterprise Automation
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              As your business expands, so does the workload. Automating
              repetitive tasks boosts productivity, efficiency, accuracy, and
              accountability, while reducing approval cycle times. Let us
              streamline your operations, allowing you to focus on what truly 
              matters for your business's success.
            </h5>
            <h5>
              Automated technology solutions have revolutionized industries and
              everyday routines. At Jonaren Technology, we integrate artificial
              intelligence (AI) and machine learning (ML) into business
              operations for decision-making, workflow optimization, and
              analysis. From streamlining workforce operations to redefining
              business models, intelligent enterprise automation powered by AI
              and ML is essential for success, offering efficiency and agility
              without compromising on reliability.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics18} />
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
            {enterpriseAutOfferings.map(({ image, title, paragraph }) => (
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
              <p style={{ fontWeight: "600", fontSize: "16px" }}>READ MORE</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
