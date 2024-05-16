import Banner from "@/components/banner";
import { blog } from "@/constant";
import { digital, terms,qinsightBenifits1,qinsightBenifits2,qinsightBenifits3,qinsightBenifits4 } from "@/public";
import Image from "next/image";


const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="Elevate Patient Experience with Healthcare IoT and Automation"
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
              Digital transformation is the key to success in the modern
              healthcare industry. Remote health monitoring and connected
              medical devices have enhanced medical treatment efficiency,
              precision, and consistency. Managing appointments, getting
              healthcare notifications, and interacting with chatbots, the
              healthcare sector is on the verge of being ‘smarter’ than ever.
              Like other sectors, healthcare is entering the world of Artificial
              Intelligence (AI) and chatbots, IoT, and advanced cloud-based
              offerings. IoT solutions in healthcare are advantageous for
              doctors, patients, and healthcare facilities, as they can have
              real-time and remote access to a patient’s vital analysis and
              data. Moreover, drug delivery systems are inching toward inhalers,
              auto-injectors, IoT-enabled pumps, and insideables for diagnostic
              and body function monitoring.
            </p>
            <p>
              ACL Digital is a preferred healthcare solution partner for leading
              healthcare system providers and medical device manufacturers. Our
              highly qualified and experienced engineers have the necessary
              experience in providing Smart healthcare solutions and
              medical-grade HIPAA/FDA compliant solutions, including robotic
              surgical equipment, medical diagnostic devices, drug delivery
              systems, digital health systems, DNA analysis devices using
              advanced and sophisticated technologies.
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
            <Image src={digital} style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#004275", paddingBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto", color: "#fff" }}>
            <h1 style={{ fontSize: "32px", fontWeight: "600" }}>Industry Requirements</h1>
            <div style={{ display: "flex", gap: "2.5rem" }}>
                <div style={{ flexBasis: "100%" }}>
                    <div>
                        <h2 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}>Remote Medical Assistance</h2>
                        <p style={{ marginBottom: "12px", fontSize: "18px" }}>Development of IoT solutions in healthcare to effortlessly monitor the data history and patient health by any remote devices including iOS or Android devices</p>
                    </div>
                    <div>
                        <h2 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}>Patient Vital Analysis</h2>
                        <p style={{ marginBottom: "12px", fontSize: "18px" }}>Utilize Data Engineering on patient vitals and implement modern and innovative technologies on the cloud such as AI and ML to distinguish and recommend proactive health measures to each patient</p>
                    </div>
                </div>
                <div style={{ flexBasis: "100%" }}>
                    <div>
                        <h2 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}>IoT Adoption</h2>
                        <p style={{ marginBottom: "12px", fontSize: "18px" }}>Transforming legacy health parameter monitoring devices into connected devices for better and superior diagnosis</p>
                    </div>
                    <div>
                        <h2 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}>Medical Regulation Compliance</h2>
                        <p style={{ marginBottom: "12px", fontSize: "18px" }}>Delivering FDA and HIPAA healthcare guidelines and standards to make the solution compliant and reduce any unwanted risks</p>
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
                One-stop Service Provider
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
              ACL Digital excels at all stages of medical-grade device development, application development, testing, large-scale manufacturing, and cloud integration
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
                Regulatory Experience
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
              Pre-compliance design and testing (HIPAA, FDA, IEC 62304, GDPR, ISO 14971, HITRUST NIST, HITRUST CSF, FHIR, EU-U.S. & Swiss-U.S. Privacy Shield, and IEC)
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
                Proven Domain Expertise
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
              Deep knowledge and proven expertise in transforming legacy devices such as radiology apparatus, monitoring/diagnostic, respiratory, and endoscopy to smart ones
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
              A solid partnership with hardware and pre-complaint medical standard cloud platform providers to facilitate faster time to market
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
