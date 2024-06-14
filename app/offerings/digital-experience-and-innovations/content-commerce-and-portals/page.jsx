import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, contentOfferings, innovationOfferings } from "@/constant";
import { contentBanner, digital, graphics25, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={contentBanner}
        heading="Crafting Seamless Digital Portal and Platform Experiences"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Content, Commerce & Portals
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Digital experience platforms ensure seamless integration and
              engagement at every touchpoint. In today's digital era,
              competitive differentiation through exceptional experiences is
              essential. Modern portals have evolved into vital experience
              platforms, playing a crucial role in your overall digital strategy
              and evolution.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology excels in creating adaptive, responsive portals,
              websites, intranets, and enterprise solutions, including loyalty
              and order management systems. We specialize in developing and
              implementing comprehensive content management systems (CMS). By
              translating business requirements into innovative designs and
              technology, we've crafted business and customer-centric portals
              for over 100 clients, enhancing their digital presence and
              operational efficiency. 
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics25} />
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
            {contentOfferings.map(({ image, title, paragraph }) => (
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
