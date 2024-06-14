import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, pddOfferings } from "@/constant";
import { digital, graphics17, pddBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={pddBanner}
        heading="Creating User-Centric Products to Meet End User Needs"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Product Design & Development
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Crafting products that meet diverse customer demands involves
              navigating challenges like evolving needs, technological shifts,
              regulations, and budget constraints. The product interface is
              crucial for user interaction, and at our core, we prioritize
              excellence. With meticulous attention to detail, we deliver
              products that offer a rich and exceptional user experience,
              setting new standards in usability and satisfaction.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology supports end-to-end product development to enhance
              your business agility. Overcome the complex development
              challenges, and build state-of-the-art web products and platforms
              that secure improved operational efficiency and intuitive digital
              experiences.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics17} />
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
            {pddOfferings.map(({ image, title, paragraph }) => (
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
