import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, consumerElecOfferings, consumerElecSegments, innovationOfferings } from "@/constant";
import { customerBanner, digital, graphics60, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={customerBanner}
        heading="Elevating lifestyles with connected consumer electronics for smarter living."
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
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h2
            style={{
              fontSize: "28px",
              color: "#333",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            Consumer Electronics
          </h2>
        </div>
      </div>
      <div style={{ marginBlock: "2rem" }}>
        <div
          style={{
            width: "1100px",
            marginInline: "auto",
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          <div style={{ flexBasis: "100%", color: "#333", fontSize: "18px" }}>
            <p>
              Amidst shifting consumer dynamics, ACL Digital responds adeptly to
              the demand for convenience and sustainability in households. With
              a keen eye on consumer-centric strategies, we seize opportunities
              in the Consumer Electronics (CE) sector. Leveraging our domain
              proficiency and cutting-edge technology like 5G connectivity,
              digital experience, and product engineering, we pioneer smart
              electronics. Our approach prioritizes innovation and optimization
              across processes, engineering, design, and development, ensuring
              client triumph in an evolving market landscape.
            </p>
            <p>
              ACL Digital empowers the creation of intelligent, connected
              consumer electronics devices by leveraging our adeptness in
              tailored connected solutions. With a rich portfolio spanning
              audio/video systems, home appliances, HVAC systems, and smart
              wearables, our services cover ideation, feasibility, product
              engineering, manufacturing, cloud integration, connected
              applications, and quality engineering. Count on us to transform
              concepts into reality, delivering exceptional products that
              resonate with today's discerning consumers.
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
            <Image src={graphics60} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      <div style={{ marginBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "0.2rem",
            }}
          >
            Segments
          </h1>
          <div className="offering-container">
            {consumerElecSegments.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "0.2rem",
            }}
          >
            Consumer Electronics Offerings
          </h1>
          <p style={{ width: "75%", marginBlock: "12px", fontSize: "16px" }}>
            Embark on a journey with ACL Digital's Consumer Electronics
            solutions, where innovation meets excellence. Explore cutting-edge
            advancements that redefine everyday experiences, transforming your
            products into intelligent companions for the modern consumer.
          </p>
          <div className="offering-container">
            {consumerElecOfferings.map(({ image, title, paragraph }) => (
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
