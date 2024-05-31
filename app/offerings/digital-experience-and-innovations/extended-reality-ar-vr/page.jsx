import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { arOfferings, blog, innovationOfferings } from "@/constant";
import { digital, graphics40, vrBanner } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={vrBanner}
        heading="Crafting Future-Focused, Meaningful Experiences"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Extended Reality (AR/VR)
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              In an era defined by smart devices and immersive technologies,
              organizations of all sizes require a robust strategy to leverage
              these advancements for creative and business growth. VR training
              enhances employee skills, fosters product design innovation, and
              facilitates remote collaboration. Extended Reality (AR, VR, MR)
              overlays digital elements onto physical surroundings, unlocking
              new possibilities for data visualization and interaction. Embrace
              immersive technologies to bridge gaps and unlock fresh
              opportunities in your organization's journey.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Exploring the potential of AR, VR, and MR for your enterprise?
              Look no further than Jonaren Technology. Count on us for extended reality
              solutions that drive meaningful experiences, foster human
              interaction, and innovate real-time problem-solving. From
              education to healthcare, immersive technologies are widely adopted
              across various industries. Let us guide you in harnessing the
              power of these technologies to elevate your business to new
              heights of innovation and engagement.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics40}  />
          </div>
        </div>
      </div>
      <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Offerings
          </h1>
          <p className="offerings-content">
            Jonaren Technology’s enterprise-grade Digital Experience platforms
            help enterprises achieve holistic digital transformations. The
            companies demand innovative and customized solutions with intuitive
            and meaningful digital experiences and a seamless end-to-end
            customer journey. Our range of Digital Experience & Innovation
            offerings include: 
          </p>
          <div className="offering-container">
            {arOfferings.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
      </div>
      <div
        className="child"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
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
              <h3
                className="blog-item-heading"
              >
                {heading}
              </h3>
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
