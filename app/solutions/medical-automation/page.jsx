import Banner from "@/components/banner";
import { blog } from "@/constant";
import {
  digital,
  terms,
  qinsightBenifits1,
  qinsightBenifits2,
  qinsightBenifits3,
  qinsightBenifits4,
  graphics18,
} from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="Enhance Patient Care through Healthcare IoT and Automation."
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
            Medical/Healthcare Automation
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
          <div style={{ flexBasis: "100%", color: "#333", fontSize: "16px" }}>
            <p>
              The digital revolution is vital in modern healthcare. Remote
              monitoring and connected devices enhance treatment efficiency and
              consistency. With AI, chatbots, IoT, and cloud solutions,
              healthcare becomes smarter. IoT benefits doctors, patients, and
              facilities with real-time data access. Drug delivery evolves with
              inhalers, auto-injectors, IoT pumps, and insideables for
              monitoring.
            </p>
            <p>
              ACL Digital stands as the top choice healthcare solution partner
              for prominent healthcare system providers and medical device
              manufacturers. Our seasoned engineers possess the expertise to
              deliver intelligent healthcare solutions and FDA-compliant
              products. From robotic surgical tools to diagnostic devices and
              drug delivery systems, we specialize in crafting cutting-edge
              solutions. Our offerings extend to digital health systems and DNA
              analysis devices, leveraging advanced technologies for precision
              and efficiency. Trust ACL Digital for innovative, sophisticated,
              and compliant healthcare solutions tailored to meet the evolving
              needs of the industry.
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
            <Image src={graphics18} style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#004275", paddingBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto", color: "#fff" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
            Industry Demands
          </h1>
          <div style={{ display: "flex", gap: "2.5rem" }}>
            <div style={{ flexBasis: "100%" }}>
              <div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginTop: "30px",
                  }}
                >
                  Virtual Health Support
                </h2>
                <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                  Development of IoT solutions in healthcare to effortlessly
                  monitor the data history and patient health by any remote
                  devices including iOS or Android devices
                </p>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginTop: "30px",
                  }}
                >
                  Vital Health Insights
                </h2>
                <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                  Leverage data engineering on patient vitals and use
                  cutting-edge cloud technologies like AI and ML to identify and
                  suggest proactive health measures for each patient.
                </p>
              </div>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginTop: "30px",
                  }}
                >
                  IoT Integration
                </h2>
                <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                  make it plagarism free in 2 words and it should be cachy and
                  attractive and use easy words and sound professional
                </p>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginTop: "30px",
                  }}
                >
                  Healthcare Standards Adherence
                </h2>
                <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                  Implementing FDA and HIPAA guidelines to ensure compliance and
                  minimize risks, delivering a secure and reliable healthcare
                  solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="qinsight-benifits-container">
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontWeight: "700", fontSize: "32px" }}>
            Why Choose ACL Digital?
          </h1>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "2rem",
              color: "#333",
            }}
          >
            <div style={{ flexBasis: "100%" }}>
              <div>
                <Image src={qinsightBenifits1} />
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                  color: "#000000",
                }}
              >
                Comprehensive Service Provider
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                ACL Digital excels in all facets of medical-grade device
                development, app creation, testing, large-scale production, and
                cloud integration, ensuring excellence throughout.
              </p>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <div>
                <Image src={qinsightBenifits2} />
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                  color: "#000000",
                }}
              >
                Compliance Mastery
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Thorough pre-compliance design and testing cover HIPAA, FDA,
                GDPR, ISO standards, HITRUST, FHIR, and privacy regulations,
                ensuring robust solutions.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "2rem",
              color: "#333",
            }}
          >
            <div style={{ flexBasis: "100%" }}>
              <div>
                <Image src={qinsightBenifits3} />
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                  color: "#000000",
                }}
              >
                Established Industry Proficiency
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Extensive experience and expertise in upgrading older devices
                like radiology, monitoring, respiratory, and endoscopy equipment
                into intelligent, modern systems.
              </p>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <div>
                <Image src={qinsightBenifits4} />
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                  color: "#000000",
                }}
              >
                Collaboration
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Established collaboration with hardware and pre-compliant
                medical cloud platform providers to expedite time-to-market,
                ensuring swift product launches.
              </p>
            </div>
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
