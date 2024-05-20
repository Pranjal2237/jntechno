import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import Dynamic from "@/components/cards/dynamic";
import { blog, innovationOfferings, medicalOfferings } from "@/constant";
import { digital, graphics56, hardwareBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={hardwareBanner}
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
            Hardware Engineering
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
              Remaining at the forefront of technology requires proactive
              decision-making and adaptability to evolving market needs.
              Anticipating customer preferences is crucial for maintaining a
              competitive edge. Hardware engineering extends beyond board design
              and connectivity to include integration of modules into
              cost-effective platforms, ensuring unified interoperability of the
              entire system/product through systematic methodologies, thereby
              staying ahead in the dynamic market landscape.
            </p>
            <p>
              ACL Digital offers end-to-end hardware design and development
              services, from conceptualization to production, ensuring
              future-ready products and managing complex software/hardware/cloud
              systems. Whether you require technology resources or expertise for
              smart connected products, our services cater to your needs,
              providing comprehensive solutions for your product development
              journey.
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
            <Image src={graphics56} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      <div className="wrapper qinsight-benifits-container" style={{ paddingBlock: "4rem" }}>
        <h1>Hardware Engineering Expertise</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2rem',marginTop:'2rem'}}>
          {
            medicalOfferings.map(({heading,content,haveLogo,logo})=>(
              <>
                <Dynamic heading={heading} content={content} haveLogo={haveLogo} logo={logo} />
              </>
            ))
          }
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
