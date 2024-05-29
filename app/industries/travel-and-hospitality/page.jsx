import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog,trevelOfferings } from "@/constant";
import { graphics5,trevelBanner } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={trevelBanner}
        heading="Elevate and Customize Customer Interaction"
        description="Craft unforgettable encounters through our array of digital, design, and tech services. Elevate experiences with us!"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Travel and Hospitality
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              In the travel and hospitality sector, digital evolution is
              paramount. From reservations to tracking, Jonaren Technology elevates
              travel ease and streamlines operations for partners like Airlines,
              Hotels, and OTAs. Harnessing cutting-edge design and digital tech,
              we redefine travel experiences.
            </h5>
            <h5>
              From airlines to logistics, Jonaren Technology pioneers innovation in
              diverse sectors. Our solutions span product innovation, digital
              experiences, consulting, marketing, and IT services. Empowering
              global Travel & Hospitality leaders, we redefine industry
              standards.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics5} />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Offerings
          </h1>
          <p className="offerings-content">
            Harnessing Internet, Mobility, Cloud, and Analytics, Jonaren Technology
            crafts tailored solutions. We streamline travel enterprise
            operations and elevate customer experiences seamlessly. Join us in
            redefining hassle-free travel!
          </p>
          <div className="offering-container">
            {trevelOfferings.map(({ image, title, paragraph,haveLink,link='/' }) => (
              <div>
                <Active image={image} title={title} haveLink={haveLink} link={link} paragraph={paragraph} />
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
