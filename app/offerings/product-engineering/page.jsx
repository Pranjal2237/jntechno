import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, productOfferings } from "@/constant";
import { digital, graphics51, productEngineeringBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={productEngineeringBanner}
        heading="From Concept to Launch: Co-Creating Products, Accelerating Growth"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Product Engineering
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              In today's dynamic and competitive landscape, speed is critical.
              Customer expectations are continually evolving, necessitating
              organizations to challenge norms and lead in innovation,
              digitization, and transformation to stay ahead.
            </h5>
            <h5>
              At Jonaren Technology, our partnership principles focus on Innovation,
              Digitization, and Transformation. Through collaborative efforts,
              we assist clients in staying ahead by utilizing cutting-edge
              technologies and methodologies. Together, we navigate the evolving
              landscape, ensuring sustained success and a competitive edge. Join
              us as we pave the way for innovation and transformation in the
              digital realm.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics51} />
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
            {productOfferings.map(
              ({ image, title, paragraph, haveLink, link }) => (
                <div>
                  <Active
                    image={image}
                    title={title}
                    paragraph={paragraph}
                    haveLink={haveLink}
                    link={link}
                  />
                </div>
              )
            )}
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
