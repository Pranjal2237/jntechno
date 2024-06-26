import Banner from "@/components/banner";
import Dynamic from "@/components/cards/dynamic";
import { homeBridgeOfferings, homeOfferings, workforceBenifits, workforceFeatures } from "@/constant";
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
        <div className="wrapper">
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
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="wrapper"
        >
          <div style={{ flexBasis: "100%", color: "#333", fontSize: "16px" }}>
            <p>
              Save valuable time by eliminating the need to spend countless
              hours crafting schedules for your team or staff. Master efficiency
              and empower your business with our revolutionary workforce
              scheduling solutions.
            </p>
            <p>
              Jonaren Technology’s Workforce Scheduling Software utilizes innovative
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
        <div className="wrapper">
            <h1 style={{fontSize:'32px',fontWeight:'600',marginBottom:'30px'}}>Features</h1>
            {
                workforceFeatures.map(({image,heading,content})=>(
                    <div style={{display:'flex',gap:'2rem',marginTop:'1rem'}}>
                        <div>
                            <Image src={image} />
                        </div>
                        <div style={{}}>
                            <h1 style={{fontSize:'22px',fontWeight:'600'}}>{heading}</h1>
                            <p>{content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
      <div style={{ paddingBlock: "3rem", color: "#333" }}>
        <div className="wrapper">
          <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
          Benefits
          </h1>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2rem',marginTop:'2rem'}}>
          {
            workforceBenifits.map(({heading,content,haveLogo,logo})=>(
              <>
                <Dynamic heading={heading} content={content} haveLogo={haveLogo} logo={logo} />
              </>
            ))
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;
