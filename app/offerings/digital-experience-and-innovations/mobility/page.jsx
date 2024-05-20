import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, mobileOfferings } from "@/constant";
import { digital, graphics6, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="Elevating Mobility: Innovative, Secure, and Interconnected Solutions for Modern Lifestyles"
        description="Empowering Digital Growth and Evolution: Driving Innovation in the Economy"
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
              fontSize: "28px",
              color: "#333",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            Mobile Experience
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
              Mobile apps are catalysts for digital transformation, enhancing
              both enterprise operations and consumer experiences. They boost
              employee engagement and offer customers seamless interactions. A
              compelling mobile presence is pivotal in shaping and enriching
              every step of the customer journey. Elevate your digital strategy
              with our dynamic and engaging mobile solutions.
            </p>
            <p>
              Harnessing expertise in iOS, Android, and Hybrid mobile
              frameworks, we blend industry-specific insights to empower
              organizations with a competitive digital advantage. Elevate your
              mobile strategy with our tailored solutions.
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
            <Image src={graphics6} style={{ width: "80%" }} />
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
            {mobileOfferings.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
        </div>
      </div>
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
