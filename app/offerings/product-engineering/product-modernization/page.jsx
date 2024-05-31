import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, productModOfferings } from "@/constant";
import {
  digital,
  graphics13,
  productModernizationBanner,
  terms,
} from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={productModernizationBanner}
        heading="Harness Product Modernization for Success in Rapidly Evolving Environments."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Product Modernization
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Amidst rapid technological evolution, businesses grapple with the
              need for agility to meet customer demands and drive revenue growth
              amidst shifting trends. It's imperative for organizations to
              reassess strategies, modernize legacy approaches, and enhance
              product innovation. This ensures optimized operational costs,
              reduced build time, and heightened app performance, empowering
              enterprises to thrive in a dynamic market landscape.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology is dedicated to accelerating businesses' modernization
              journeys and achieving successful digital transformations. Through
              a customer-centric innovation approach and cutting-edge
              technologies, we provide the scalability, agility, and efficiency
              essential for tomorrow's enterprises to thrive in a dynamic market 
              environment.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics13} />
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
            {productModOfferings.map(({ image, title, paragraph }) => (
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
