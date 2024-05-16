import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, semiconductorOfferings } from "@/constant";
import { digital, graphics55, semiconductorBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={semiconductorBanner}
        heading="Innovative Semiconductor Design Solutions for Advanced IPs and Complex SoCs."
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
            Semiconductor
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
              In today's rapidly evolving technological arena, the semiconductor
              sector stands as a cornerstone, driving innovation and fueling a
              plethora of electronic devices. Meeting the soaring demand for
              efficient, potent, and cost-effective semiconductor solutions
              poses multifaceted challenges for manufacturers. These include
              intricate VLSI design & verification requisites, compact form
              factors, rigorous quality benchmarks, shortened time-to-market
              cycles, and the imperative for robust testing and validation
              protocols. At ACL Digital, we engage in close collaboration with
              industry giants, spanning IDMs, silicon manufacturers, OEMs,
              foundries, EDA, and IP vendors, to craft cutting-edge chipsets
              tailored for diverse industrial applications. Our prowess in VLSI
              design and verification services ensures delivery of top-tier
              solutions that uphold the highest quality benchmarks. By
              accelerating time-to-market and navigating the dynamic
              semiconductor landscape, we empower our clients to achieve
              unparalleled success in a fiercely competitive market environment.
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
            <Image src={graphics55} style={{ width: "80%" }} />
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
            Tailoring semiconductor solutions to exact client needs: VLSI
            design, ASIC verification, FPGA development, SoC design, embedded
            software, and rigorous testing, ensuring industry-specific
            requirements are met with excellence.
          </p>
          <div className="offering-container">
            {semiconductorOfferings.map(({ image, title, paragraph }) => (
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
