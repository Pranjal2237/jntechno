import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings } from "@/constant";
import { digital, enterpriseAgilityBanner, graphics32, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={enterpriseAgilityBanner}
        heading="Empower Enterprise Agility: DevOps, SAFe, Automation Frameworks & Services for Security."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Enterprise Agility
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Enterprises in various industries are witnessing rapid shifts in
              business requirements. The CIO & IT function plays a pivotal role
              in spearheading digital strategies to enhance agility and
              efficiency in delivering services to both business units and end
              customers. Digital transformation entails leveraging innovative
              technology and adopting DevOps and Agile processes to achieve
              business goals with speed and quality. DevOps facilitates
              accelerated software delivery and smooth cross-stage transitions
              throughout the development life cycle by bringing together
              stakeholders from business, development, and operations teams.
            </h5>
            <h5>
              Jonaren Technology's DevOps solution establishes a seamless DevOps
              toolchain for comprehensive application release, ensuring
              dependable releases and expedited time to market. This efficiency
              in the deployment process empowers businesses to innovate and
              maintain a competitive edge amidst evolving technological
              landscapes.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics32}  />
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
