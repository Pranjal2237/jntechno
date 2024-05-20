import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import Dynamic from "@/components/cards/dynamic";
import { blog, homeBridgeOfferings, homeOfferings, innovationOfferings } from "@/constant";
import { digital, graphics28, qeaBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={qeaBanner}
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
            Quality Engineering & Automation
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
              In today's digital era, software plays a pivotal role in business
              success, underscoring the significance of Quality Assurance (QA)
              testing services. QA testing is essential throughout the software
              development lifecycle, ensuring applications adhere to stringent
              quality, reliability, and performance benchmarks.
            </p>
            <p>
              ACL Digital adopts a comprehensive approach to quality assurance,
              integrating industry best practices with our domain expertise.
              Through our Test Automation Centre of Excellence, we provide
              tailored test automation solutions with custom-built frameworks.
              Our Quality Assurance Services aim to minimize testing expenses,
              expedite market readiness, and deliver flawless, agile software
              products for both ISVs and Enterprises, ensuring uncompromised
              quality and efficiency.
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
            <Image src={graphics28} style={{ width: "80%" }} />
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
            Our connected enterprise offerings
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
      <div className="wrapper qinsight-benifits-container" style={{ paddingBlock: "4rem" }}>
        <h1>Choose ACL Digital for superior QA testing solutions and reliability</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2rem',marginTop:'2rem'}}>
          {
            homeOfferings.map(({heading,content,haveLogo,logo})=>(
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
