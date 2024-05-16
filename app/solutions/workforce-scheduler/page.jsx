import Banner from "@/components/banner";
import { homeBridgeOfferings } from "@/constant";
import { digital, graphics13, qinsightBenifits1, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="Seamless Employee Roster Generation with Advanced Workforce Scheduler"
        description="Workforce Scheduling Software for Real-Time Employee Rostering"
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
            Workforce Scheduler
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
              Save valuable time by eliminating the need to spend countless
              hours crafting schedules for your team or staff. Master efficiency
              and empower your business with our revolutionary workforce
              scheduling solutions.
            </p>
            <p>
              ACL Digital’s Workforce Scheduling Software utilizes innovative
              artificial intelligence to optimize your scheduling process. Our
              Workforce Scheduler generates optimal schedules in a fraction of
              the time than it would take to do them manually. It helps
              businesses optimize staffing levels, match employee skills with
              tasks, and create schedules that meet operational needs while
              considering factors such as employee availability, labor
              regulations, and budget constraints.
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
            <Image src={graphics13} style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <div style={{paddingBlock:'3rem',color:'#fff',background:'black'}}>
        <div style={{width:'1100px',marginInline:'auto'}}>
            <h1 style={{fontSize:'32px',fontWeight:'600',marginBottom:'30px'}}>Features</h1>
            {
                [1,2,3,4,5,6,7,8,9].map(()=>(
                    <div style={{display:'flex',gap:'2rem',marginTop:'1rem'}}>
                        <div>
                            <Image src={qinsightBenifits1} />
                        </div>
                        <div style={{}}>
                            <h1 style={{fontSize:'22px',fontWeight:'600'}}>Transparency</h1>
                            <p>The workforce planning software provides detailed reports and analytics for better roster optimization, allowing for insights into resource allocation, cost-effectiveness, and overall scheduling efficiency.</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
      <div style={{ paddingBlock: "3rem", color: "#333" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
          Benefits
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            {homeBridgeOfferings.map(({ heading, content }) => (
              <div
                style={{
                  flex: "0 1 31%",
                  paddingInline: "1rem",
                  paddingBlock: "3rem",
                  background: "#f7f7f6",
                  boxShadow: "0 3px 6px #00000029",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "7px",
                  }}
                >
                  {heading}
                </h3>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
