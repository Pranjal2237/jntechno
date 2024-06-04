import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings } from "@/constant";
import { digital, dpeBanner, graphics41, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={dpeBanner}
        heading="Connected Enterprises – Radically Reforming Companies and Competition"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Data Platform Engineering
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Every enterprise aspires for exponential growth and innovation.
              Achieving this involves democratizing data, empowering exploration
              for solutions and product development, and fostering trust through
              robust Data Governance. By prioritizing these goals, businesses
              can navigate complexities and seize new opportunities in the
              data-driven landscape.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology's data modernization platform facilitates end-to-end
              data management, encompassing acquisition, storage, preparation,
              delivery, and governance, alongside robust security measures for
              users and applications. Whether your data requirements are small
              or large-scale, batch or stream processing, operational or
              exploratory analytics, our comprehensive suite of services covers
              everything from data quality to security. With leading data
              products available across cloud, edge, or on-premises
              environments, our experienced data evangelists tailor solutions to
              address all your data challenges.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics41} />
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
