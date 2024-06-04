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
        <div className="wrapper page-heading">
          <p
          >
            Retail & E-Commerce
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <p>
              In the evolving landscape where physical and digital realms merge,
              retailers must swiftly adapt, transforming operations into
              omnichannel, integrated, flexible, and agile processes. Empower
              tech-savvy shoppers with data-driven experiences for informed
              decision-making.
            </p>
            <p style={{marginTop:'10px'}}>
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
            className="about-image-container"
          >
            <Image src={graphics66} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Segments
          </h1>
          <p className="offerings-content">
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
      <div
        className="child blog-main-container"
      >
        {blog.map(({ category, heading, background }) => (
          <div
            style={{
              background: background,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="blog-item-container"
          >
            <div>
              <h4 className="blog-item-category">{category}</h4>
              <h3 className="blog-item-heading">{heading}</h3>
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
