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
      <div
        style={{
          padding: "1rem 0",
          boxShadow: "0px 3px 6px #00000029",
          background: "#fff",
          position: "sticky",
          top: "0px",
        }}
      >
        <div className="wrapper">
          <h2
            style={{
              fontSize: "23px",
              color: "#333",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            User Experience & Design
          </h2>
        </div>
      </div>
      <div style={{ marginBlock: "2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="wrapper"
        >
          <div style={{ flexBasis: "100%", color: "#333", fontSize: "18px" }}>
            <p>
              ACL Digital partners with industries, from start-ups to Fortune
              500s, to prioritize customer experience and accelerate
              organizational transformation.
            </p>
            <p>
              User Experience Design is pivotal for superior Customer and
              Employee Experience (CX & EX), capturing key aspects of brand
              usability, desirability, and functionality. At ACL Digital, our
              design process integrates these elements, focusing on overall
              product usability. We place the user persona—both business and
              consumer—at the core, ensuring functionality and an exceptional
              interactive experience. Let us help you create compelling and
              user-centric digital solutions.
            </p>
          </div>
          <div
            style={{
              flexBasis: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={graphics22} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      <div style={{ marginBlock: "3rem" }}>
        <div className="wrapper">
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "0.2rem",
            }}
          >
            Offerings
          </h1>
          <p style={{ width: "75%", marginBlock: "12px", fontSize: "16px" }}>
            Jonaren Technology’s enterprise-grade Digital Experience platforms
            help enterprises achieve holistic digital transformations. The
            companies demand innovative and customized solutions with intuitive
            and meaningful digital experiences and a seamless end-to-end
            customer journey. Our range of Digital Experience & Innovation
            offerings include:
          </p>
          <div className="offering-container">
            {userOfferings.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Banner
        image={careerBanner4}
        heading="Experience 360"
        description="ACL Digital’s Total Experience Strategy and innovative process deliver a comprehensive 360° experience, enhancing customer, user, employee, and multi-experience interactions. Let us help you bring every aspect of your experience strategy to the forefront."
        haveButton={true}
        buttonText="TALK TO OUR CONSULTANT"
        height="420px"
      />
      <div
        className="child"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
      >
        {blog.map(({ category, heading, background }) => (
          <div
            style={{
              height: "348px",
              background: background,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "1rem 1.5rem",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h4 style={{ fontSize: "14px" }}>{category}</h4>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                  width: "65%",
                }}
              >
                {heading}
              </h2>
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
