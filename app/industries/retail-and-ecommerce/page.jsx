import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, retailSegments } from "@/constant";
import { digital, graphics66, retailBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={retailBanner}
        heading="Drive Worldwide Expansion"
        description="Fusing human-centered experiences with intelligent digital technologies to redefine innovation and enhance user engagement."
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
            Retail & E-Commerce
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
              In the evolving landscape where physical and digital realms merge,
              retailers must swiftly adapt, transforming operations into
              omnichannel, integrated, flexible, and agile processes. Empower
              tech-savvy shoppers with data-driven experiences for informed
              decision-making.
            </p>
            <p>
              In today's retail landscape, social tools, smart mobile apps with
              AR & VR, shoppable ads, and digital signage & sensor technology
              are revolutionizing the shopping experience. Customers now
              discover, evaluate, purchase, receive, and return goods
              differently, initiating the journey at one touchpoint and
              completing it at another. Retailers must prioritize rich,
              personalized digital experiences across all channels, bridging the
              offline and online realms seamlessly.
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
            <Image src={graphics66} style={{ width: "80%" }} />
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
            Segments
          </h1>
          <p style={{ width: "75%", marginBlock: "12px", fontSize: "16px" }}>
            Unleash your omnichannel potential with us, enabling Omni-channel
            Retailing and delivering seamless, personalized experiences across
            diverse channels for distributors and customers. Harness the power
            of connectivity to elevate your retailing game.
          </p>
          <div className="offering-container">
            {retailSegments.map(({ image, title, paragraph }) => (
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
