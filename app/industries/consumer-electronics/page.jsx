import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, consumerElecOfferings, consumerElecSegments, innovationOfferings } from "@/constant";
import { customerBanner, digital, graphics60, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={customerBanner}
        heading="Elevating lifestyles with connected consumer electronics for smarter living."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Consumer Electronics
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Amidst shifting consumer dynamics, Jonaren Technology responds adeptly to
              the demand for convenience and sustainability in households. With
              a keen eye on consumer-centric strategies, we seize opportunities
              in the Consumer Electronics (CE) sector. Leveraging our domain
              proficiency and cutting-edge technology like 5G connectivity,
              digital experience, and product engineering, we pioneer smart
              electronics. Our approach prioritizes innovation and optimization
              across processes, engineering, design, and development, ensuring
              client triumph in an evolving market landscape.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology empowers the creation of intelligent, connected
              consumer electronics devices by leveraging our adeptness in
              tailored connected solutions. With a rich portfolio spanning
              audio/video systems, home appliances, HVAC systems, and smart
              wearables, our services cover ideation, feasibility, product
              engineering, manufacturing, cloud integration, connected
              applications, and quality engineering. Count on us to transform
              concepts into reality, delivering exceptional products that
              resonate with today's discerning consumers.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics60} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Segments
          </h1>
          <div className="offering-container">
            {consumerElecSegments.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
        </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Consumer Electronics Offerings
          </h1>
          <p className="offerings-content">
            Embark on a journey with Jonaren Technology's Consumer Electronics
            solutions, where innovation meets excellence. Explore cutting-edge
            advancements that redefine everyday experiences, transforming your
            products into intelligent companions for the modern consumer.
          </p>
          <div className="offering-container">
            {consumerElecOfferings.map(({ image, title, paragraph }) => (
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
