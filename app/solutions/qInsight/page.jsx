import Banner from "@/components/banner";
import {
  homeBanner9,
  qinsightBenifits1,
  qinsightBenifits2,
  qinsightBenifits3,
  qinsightBenifits4,
  terms,
} from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="QInsight"
        description="A secure, comprehensive, clinical trial data visualization solution with an interactive dashboard coupled with built-in analytics"
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
            QInsight
          </h2>
        </div>
      </div>
      <div>
        <div
          style={{
            width: "1100px",
            marginInline: "auto",
            display: "flex",
            gap: "1.5rem",
            marginBlock: "3rem",
            color: "#333",
          }}
        >
          <div style={{ flexBasis: "100%" }}>
            <p>
              QInsight is the perfect data visualization solution that provides
              real-time insights, immersive visualizations, and interactive
              analytics. It includes built-in analytics that generates stunning
              dashboards and reports effortlessly, allowing you to track and
              analyze your data without hassle. Our solution lets you better
              understand your clinical trial data and make informed decisions
              quickly and confidently.
            </p>
            <h1
              style={{
                fontSize: "32px",
                color: "#000000",
                fontWeight: "600",
                marginTop: "30px",
              }}
            >
              Why QInsight?
            </h1>
            <p>
              If you are searching for a cost-effective and user-friendly data
              visualization solution, QInsight is the right choice. While other
              solutions are very expensive and mostly used by large enterprises,
              QInsight is made to fit all budgets. It opens the door to
              smaller/mid-sized companies as well.
            </p>
            <ul>
              <li>
                Enables study reporting visualization that substantially reduces
                reporting, resources, and processes burden
              </li>
              <li>Negates data silos and improves understanding of data</li>
              <li>
                Reduces the burden on Biometrics resources for non-submission
                reports
              </li>
              <li>
                Reduces turn-around time: instant reporting with plug-n-play
              </li>
              <li>
                Useful for patient profiles, narratives, safety signal
                reporting, data cleaning, time-to-event reporting, adhocs, and
                more
              </li>
              <li>
                Built for Clinical Research functions – Biometrics, ClinOps,
                Data Management, Medical Monitors, Safety Reporting, and Medical
                Writing
              </li>
              <li>
                Built-in library includes frequently used graphs - pivot tables,
                patient profile graphs, KM curves, Waterfall, Labs spaghetti,
                change from baseline, and AE graphs among others
              </li>
              <li>Secure, browser-based access</li>
              <li>
                Does not involve software licensing or high upfront or setup
                costs
              </li>
            </ul>
          </div>
          <div style={{ flexBasis: "100%" }}>
            <video width="100%" height="240" controls>
              <source
                src="https://www.youtube.com/watch?v=MgcVQPcf5II&t=5456s"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#004275", paddingBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto", color: "#fff" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
            QInsight Features
          </h1>
          <div style={{ display: "flex", gap: "2.5rem" }}>
            <div style={{ flexBasis: "100%" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                Multiple Plugin Input Data Streams
              </h2>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Compatible with CDISC, SDTM, and ADaM datasets. Can support ADS,
                data in excel, .csv, and .dat formats
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                Data Friendly Platform
              </h2>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Web-based display with features like the ability to filter for
                subgroups and getting more information about a data point by
                hovering the cursor over it
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                Multi-Panel Display
              </h2>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Menu-based GUI with the ability to support multiple panels on
                one screen
              </p>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Fully customizable: Use built-in data widgets or drag and drop
                new widgets as needed
              </p>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Each widget can be configured independently, including having
                its own filters
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                Custom Widgets
              </h2>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Users, through the Admin portal, can add a new TLF (custom
                widget) and can save the widget privately or publish it to the
                entire organization.
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                Compliance and Audit Transparency
              </h2>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Provides documentation logs for data consistency and
                traceability
              </p>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                Useful Visualizations
              </h2>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Get instant access to a library of commonly used graphs in
                clinical trial reporting without any pre-programming
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                In-built Advanced Analytics
              </h2>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Powerful and actionable insights with interactive dashboards
                encompassing commonly used graphs in clinical trials space
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                Continuous Improvement
              </h2>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Pan-platform feature enhancement based on client / user inputs,
                upgrades are rolled out on a quarterly basis
              </p>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Next update will include reading data in SEND format, data
                connectors for NIH, and clinitrials.gov data
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                Negate Data Silos
              </h2>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Get "team access" to the study data without burdening Biometrics
                / Data Science resourcesces
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "30px",
                }}
              >
                Access Powerful Technologies
              </h2>
              <p style={{ marginBottom: "12px", fontSize: "18px" }}>
                Built on modern technologies and enhanced through Machine
                Learning and Artificial Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="qinsight-benifits-container">
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontWeight: "700", fontSize: "32px" }}>
            QInsight Benefits 
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
                  Enhanced Security System
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Role-based access, password-protected downloads, and control
                file types
              </p>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Regulatory audit specific user access creation
              </p>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Ability to restrict access to a type of output per user role
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
                Cost Savings
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                No additional software licensing cost, no large upfront cost,
                and no setup cost
              </p>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                SMEs/Admins are not needed to get the system up and running
              </p>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Regulatory audit specific user access creation and ability to
                restrict access to a type of output based on the user role
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
                Fast User Adoption
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Shorter implementation time with a plug-n-play approach, users
                are productive in no time with quick and easy on-boarding
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
                Quick Deployment
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Quick and hassle-free deployment
              </p>
            </div>
          </div>
        </div>
      </div>
      <Banner
        image={homeBanner9}
        heading="SCE (Statistical Computing Environment) for Clinical Trials"
        description="A secure, GXP and 21 CFR part 11 compliant environment to host all your IT Infrastructure needs for Clinical Trials"
        haveButton={true}
        buttonText="LEARN MORE"
        height="420px"
      />
    </div>
  );
};

export default page;
