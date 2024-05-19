import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, trevelOfferings } from "@/constant";
import { digital, graphics5, terms, trevelBanner } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={trevelBanner}
        heading="Elevate and Customize Customer Interaction"
        description="Craft unforgettable encounters through our array of digital, design, and tech services. Elevate experiences with us!"
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
              fontSize:'23px',
              color: "#333",
              fontWeight: "var(--fw-bold)",
            }}
          >
            Travel and Hospitality
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
          <div style={{ flexBasis: "100%", color: "#333", fontSize: "18px" }}>
            <p>
              In the travel and hospitality sector, digital evolution is
              paramount. From reservations to tracking, Jonaren Technology elevates
              travel ease and streamlines operations for partners like Airlines,
              Hotels, and OTAs. Harnessing cutting-edge design and digital tech,
              we redefine travel experiences.
            </p>
            <p>
              From airlines to logistics, Jonaren Technology pioneers innovation in
              diverse sectors. Our solutions span product innovation, digital
              experiences, consulting, marketing, and IT services. Empowering
              global Travel & Hospitality leaders, we redefine industry
              standards.
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
            <Image src={graphics5} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      <div style={{ marginBlock: "3rem" }}>
        <div className="wrapper">
          <h1
            style={{
              color:'#333333',
              fontWeight: "var(--fw-bold)",
              marginBottom: "0.2rem",
            }}
          >
            Offerings
          </h1>
          <p style={{ width: "75%", marginBlock: "12px", fontSize: "16px" }}>
            Harnessing Internet, Mobility, Cloud, and Analytics, Jonaren Technology
            crafts tailored solutions. We streamline travel enterprise
            operations and elevate customer experiences seamlessly. Join us in
            redefining hassle-free travel!
          </p>
          <div className="offering-container">
            {trevelOfferings.map(({ image, title, paragraph,haveLink,link='/' }) => (
              <div>
                <Active image={image} title={title} haveLink={haveLink} link={link} paragraph={paragraph} />
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
