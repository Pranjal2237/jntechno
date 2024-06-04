import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, healthOfferings, healthSegments, innovationOfferings } from "@/constant";
import {
  abiBanner,
  careerBanner3,
  digital,
  graphics21,
  healthcareBanner,
  terms,
} from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={healthcareBanner}
        heading="Revitalize patient outcomes through innovative, harmonized experiences, fostering transformative advancements in healthcare."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Healthcare
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <p>
              Jonaren Technology, a renowned innovator in digital technology, strives
              to unify healthcare experiences. Leveraging innovation, product
              engineering, and a strategic Total Experience (TX) approach, we
              empower stakeholders to simplify and transform healthcare
              delivery.
            </p>
            <p style={{marginTop:'10px'}}>
              We specialize in harnessing cutting-edge technologies to craft
              tailored solutions, offer expert consultation, and drive ongoing
              healthcare enhancements. Our focus on innovation ensures we remain
              agile, adept, and ahead of industry trends, delivering
              transformative impact at every step.
            </p>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics21} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Segments
          </h1>
          <p className="offerings-content">
            Jonaren Technology harnesses extensive industry expertise gained from
            partnerships with top healthcare entities in Provider, Payer, and
            Medical Device sectors. Our skilled engineers employ cutting-edge
            tech to empower clients in achieving impactful, business-aligned
            solutions for sustainable success.
          </p>
          <div className="offering-container">
            {healthSegments.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
        </div>
      <Banner
        image={careerBanner3}
        heading="Embrace Uncertainty, Cultivate Possibility."
        description="Ensure regulatory compliance and interoperability with federal incentive programs, HIPAA, and custom reporting solutions for seamless operations."
        buttonText="TALK TO US"
        height="420px"
      />
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Offerings
          </h1>
          <p className="offerings-content">
            Jonaren Technology pioneers secure, compliant, and interoperable healthcare
            and medical device engineering solutions through design-led
            engineering services. Our expertise fuels digital innovation,
            business transformation, and industry convergence.
          </p>
          <div className="offering-container">
            {healthOfferings.map(({ image, title, paragraph }) => (
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
