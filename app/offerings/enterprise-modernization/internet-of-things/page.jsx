import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, iotOfferings } from "@/constant";
import { digital, graphics26, iotBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={iotBanner}
        heading="Transform Your Business: Future-Proof IoT Solutions for Success."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            IoT Solution Engineering Services
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              The Internet of Things (IoT) harnesses cost-effective sensors to
              streamline data tracking and transmission, reducing manual efforts
              and enabling swift decision-making. This technology revolutionizes
              internet connectivity, analytics, and data processing for physical
              objects, promising significant efficiencies across enterprise
              operations.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Businesses across sectors embrace IoT solutions to seize lucrative
              opportunities and sustain competitiveness. Jonaren Technology's IoT
              development services ensure seamless integrations between cloud
              platforms, sensors, gateways, and chip-to-cloud security, enabling
              end-to-end connectivity. Whether it's cloud or mobile app
              development, or integrating AI-driven intelligence, we cater to
              diverse industries, transforming IoT concepts into reality for
              enhanced operational efficiency and innovation. 
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics26}  />
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
            {iotOfferings.map(({ image, title, paragraph }) => (
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
