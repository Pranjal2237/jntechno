import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, networkOfferings } from "@/constant";
import { digital, graphics23, networkBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={networkBanner}
        heading="Empowering Dependable Connectivity in Dynamic Networks."
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
            Network Infrastructure
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
              As the IT landscape evolves, network infrastructure undergoes
              significant transformation to meet shifting demands. Network
              Equipment Manufacturers (NEM) and Original Equipment Manufacturers
              (OEM) adapt their portfolios to embrace digital disruptions. ACL
              Digital's infrastructure services empower NEMs and OEMs to
              transition legacy infrastructure into agile, IP-based services,
              boosting market competitiveness. Leveraging market-proven solution
              accelerators and frameworks, we expedite time-to-market and enrich
              product features swiftly, enhancing scalability, performance, and
              revenue potential. Stay ahead in the digital age with ACL
              Digital's innovative solutions for network evolution.
            </p>
            <p>
              Harnessing industry-leading open-source tools, we adopt a
              consultative approach to craft a seamlessly integrated Network
              Infrastructure that aligns perfectly with business objectives.
              Empower your organization with technology-driven solutions.
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
            <Image src={graphics23} style={{ width: "80%" }} />
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
            ACL Digital empowers enterprises with enterprise-grade Digital
            Experience platforms, facilitating comprehensive digital
            transformations. Our solutions deliver innovative, customized
            experiences, ensuring intuitive interactions and seamless end-to-end
            customer journeys. Explore our range of Digital Experience &
            Innovation offerings for unparalleled success.
          </p>
          <div className="offering-container">
            {networkOfferings.map(({ image, title, paragraph }) => (
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
