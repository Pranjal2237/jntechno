import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, telecomOfferings } from "@/constant";
import { digital, graphics9, telecomBanner } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={telecomBanner}
        heading="Elevate with Uninterrupted Connection and Boundless Bandwidth."
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
            Telecom Service
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
              ACL Digital pioneers cutting-edge product and solution
              engineering, empowering telecom operators to deliver digital
              services beyond mere connectivity. Our innovations enhance
              performance and revenue for Telcos and equipment makers, elevating
              market impact. Join us in shaping the future of telecom with
              transformative solutions!
            </p>
            <p>
              Leveraging our proven framework and innovative tools, ACL Digital
              aids telecom operators and equipment manufacturers in swiftly
              transitioning to next-gen networks. From 5G to AI, our expertise
              in Edge Computing, IoT, and more drives efficiency, reducing
              time-to-market and costs. Join us in shaping the future of telecom
              with agile solutions!
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
            <Image src={graphics9} style={{ width: "80%" }} />
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
            Offerings
          </h1>
          <p style={{ width: "75%", marginBlock: "12px", fontSize: "16px" }}>
            ACL Digital's tailored engineering services boost market impact by
            enhancing telecom performance, managing traffic, and maximizing
            revenue potential amid rising device connectivity. Join us in
            optimizing telecom solutions!
          </p>
          <div className="offering-container">
            {telecomOfferings.map(({ image, title, paragraph }) => (
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
