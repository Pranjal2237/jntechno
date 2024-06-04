import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, fiveGOfferings, innovationOfferings } from "@/constant";
import { FivegBanner, digital, graphics47, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={FivegBanner}
        heading="Secure 5G Transition"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            5G Networks
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              5G's ultra-low latency and high data rates usher in a wave of
              innovative solutions. This open-development, interoperable
              infrastructure enables the creation of highly tailored
              applications, offering exceptional user experiences and paving the
              way for cutting-edge advancements in mobile networking.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology leverages open development methodologies and
              programming tools to provide comprehensive 5G solutions, including
              mobile core network re-architecture, end-to-end orchestration,
              edge cloud deployment, and more. Our profound domain expertise and
              keen insights into 5G technology trends enable us to deliver
              distinguished offerings tailored to the networks of the future. 
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics47} />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            offerings
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
            {fiveGOfferings.map(({ image, title, paragraph }) => (
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
