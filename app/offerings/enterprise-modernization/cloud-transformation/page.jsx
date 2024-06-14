import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, cloudOfferings, innovationOfferings } from "@/constant";
import { cloudTransformationBanner, digital, graphics46 } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={cloudTransformationBanner}
        heading="Elevate Your Business: Harness Cloud Transformation Solutions for Success"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p>
            Cloud Transformation
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Cloud is pivotal in driving today's digital transformation,
              offering flexibility, scalability, security, performance, and
              reliability. Embracing cloud empowers enterprises to manage the
              increasing demands of devices, data, and applications. A bold
              shift in mindset towards discovering value fuels a successful
              cloud transformation journey, unlocking opportunities, reducing
              operational costs, fostering innovation, and overcoming legacy
              obstacles for sustained growth and competitiveness.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              At Jonaren Technology, we recognize the transformative power of the cloud
              in reshaping business operations and accelerating innovation.
              Leveraging the cloud enables holistic organizational reinvention
              through technology modernization, creation of new revenue streams,
              development of cloud-based applications, expedited product
              releases, and enhanced cloud capabilities. 
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics46}  />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Offerings
          </h1>
          <h5 className="offerings-content">
            Jonaren Technology’s enterprise-grade Digital Experience platforms
            help enterprises achieve holistic digital transformations. The
            companies demand innovative and customized solutions with intuitive
            and meaningful digital experiences and a seamless end-to-end
            customer journey. Our range of Digital Experience & Innovation
            offerings include:
          </h5>
          <div className="offering-container">
            {cloudOfferings.map(({ image, title, paragraph }) => (
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
