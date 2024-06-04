import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, mediaOfferings } from "@/constant";
import { digital, graphics2, mediaBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={mediaBanner}
        heading="Enhance your brand's competitiveness with innovative streaming and content experiences for optimal engagement in today's attention economy."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Media and Entertainment
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <p>
              Digital advancements empower consumers; a streaming war ensues.
              Deliver personalized experiences to meet evolving expectations. As
              media boundaries blur, adapt to the converging landscape of
              telecom, media, and technology for sustained relevance.
            </p>
            <p style={{marginTop:'10px'}}>
              Businesses must adeptly capture real-time customer needs and
              behaviors, transforming internally with digital tools to enhance
              outreach and service. Digital Marketing enables precise
              engagement, targeting, and effective communication across
              channels, fostering brand recognition, customer interest, leads,
              accelerated sales, and enduring loyalty.
            </p>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics2} style={{ width: "80%" }} />
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
            Jonaren Technology leverages cutting-edge tech, domain expertise, design
            thinking, and analytics to offer tailored services for the
            entertainment and media sector.
          </p>
          <div className="offering-container">
            {mediaOfferings.map(({ image, title, paragraph }) => (
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
