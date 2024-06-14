import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings } from "@/constant";
import { digital, embededBanner, graphics44, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={embededBanner}
        heading="Connected Enterprises – Radically Reforming Companies and Competition"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Embedded Engineering
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              As product companies navigate technological advancements and
              economic fluctuations, streamlining process innovation becomes
              imperative. Jonaren Technology provides cutting-edge embedded software
              and systems engineering solutions to address these challenges. Our
              next-generation offerings empower businesses to minimize costs,
              size, and complexities, enabling them to adapt and thrive in
              dynamic market environments, while staying ahead of the
              competition.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Rely on Jonaren Technology for cost-effective embedded engineering
              services, covering platform development, OS/application porting,
              and wired/wireless connectivity. With expertise in firmware
              development, we collaborate with industry leaders to deliver
              advanced solutions. Our tailored end-to-end offerings across
              multiple platforms ensure swift time to market for our clients.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics44} />
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
