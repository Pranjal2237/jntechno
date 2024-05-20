import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings } from "@/constant";
import { digital, graphics38, securityBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={securityBanner}
        heading="Connected Enterprises – Radically Reforming Companies and Competition"
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
            Security
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
              The landscape of network security services has undergone a
              profound transformation due to digital innovation, cloud adoption,
              and the widespread shift to remote work. Dynamic changes in
              network configurations and the rapid expansion of attack surfaces
              pose significant challenges. Traditional security solutions often
              fall short in providing adequate security and access control. To
              meet the demands of digital innovation, enterprises increasingly
              require Secure Access Service Edge (SASE) offerings for
              low-latency access to end users, devices, and cloud-hosted
              services anywhere.
            </p>
            <p>
              ACL Digital offers a comprehensive SASE framework featuring
              cloud-native security functions including secure SD-WAN, Secure
              Web Gateways, Cloud Access Security Brokerage, Identity and Access
              Management, WAF, Cloud-delivered FwaaS, and zero-trust network
              access. This enables telecommunication service providers and
              enterprises to expedite product development, market delivery, and
              adapt swiftly to evolving business conditions and security
              challenges.
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
            <Image src={graphics38} style={{ width: "80%" }} />
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
            ACL Digital’s enterprise-grade Digital Experience platforms help
            enterprises achieve holistic digital transformations. The companies
            demand innovative and customized solutions with intuitive and
            meaningful digital experiences and a seamless end-to-end customer
            journey. Our range of Digital Experience & Innovation offerings
            include:
          </p>
          <div className="offering-container">
            {innovationOfferings.map(({ image, title, paragraph }) => (
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
