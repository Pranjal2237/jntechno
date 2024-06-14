import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, userOfferings } from "@/constant";
import {
  abiBanner,
  careerBanner4,
  digital,
  graphics22,
  homeBanner9,
  userDesignBanner,
} from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={userDesignBanner}
        heading="Bring Ideas to Life with Premier Human-Centric Designs."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            User Experience & Design
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Jonaren Technology partners with industries, from start-ups to Fortune
              500s, to prioritize customer experience and accelerate
              organizational transformation.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              User Experience Design is pivotal for superior Customer and
              Employee Experience (CX & EX), capturing key aspects of brand
              usability, desirability, and functionality. At Jonaren Technology, our
              design process integrates these elements, focusing on overall
              product usability. We place the user persona—both business and
              consumer—at the core, ensuring functionality and an exceptional
              interactive experience. Let us help you create compelling and
              user-centric digital solutions.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics22} />
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
            {userOfferings.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
      </div>
      <Banner
        image={careerBanner4}
        heading="Experience 360"
        description="Jonaren Technology’s Total Experience Strategy and innovative process deliver a comprehensive 360° experience, enhancing customer, user, employee, and multi-experience interactions. Let us help you bring every aspect of your experience strategy to the forefront."
        haveButton={true}
        buttonText="TALK TO OUR CONSULTANT"
        height="420px"
      />
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
