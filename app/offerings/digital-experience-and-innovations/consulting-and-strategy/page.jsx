import Banner from "@/components/banner";
import { blog } from "@/constant";
import { consultingBanner, digital, graphics8 } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner image={consultingBanner} heading="Join the Collaborative, Connected Digital World Today." height="560px" />
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
            Consulting & Strategy
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
              In today’s digital age, organizations are increasingly utilizing
              information technology for digital transformation. Navigating the
              challenges of identifying, assessing, and deploying the right
              solutions is crucial. We grasp your strategic goals and combine
              them with our deep technological expertise to implement the most
              effective solutions. Let us help you drive your business forward
              with precision and innovation, ensuring a seamless digital
              transformation.
            </p>
            <p>
              Our strategic IT consulting team is dedicated to helping you adapt
              and automate digital experiences, SaaS platforms, product
              engineering, and IT-led transformation services. Through our
              consulting and strategy-driven approach, we partner with you to
              co-innovate and co-create solutions. Enhance resilience and forge
              stronger connections with your customers, driving your business
              forward with tailored, cutting-edge technology.
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
            <Image src={graphics8} style={{ width: "80%" }} />
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
