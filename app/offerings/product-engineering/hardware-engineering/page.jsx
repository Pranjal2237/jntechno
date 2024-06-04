import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import Dynamic from "@/components/cards/dynamic";
import { blog, innovationOfferings, medicalOfferings } from "@/constant";
import { digital, graphics56, hardwareBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={hardwareBanner}
        heading="Connected Enterprises – Radically Reforming Companies and Competition"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Hardware Engineering
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Remaining at the forefront of technology requires proactive
              decision-making and adaptability to evolving market needs.
              Anticipating customer preferences is crucial for maintaining a
              competitive edge. Hardware engineering extends beyond board design
              and connectivity to include integration of modules into
              cost-effective platforms, ensuring unified interoperability of the
              entire system/product through systematic methodologies, thereby
              staying ahead in the dynamic market landscape.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology offers end-to-end hardware design and development
              services, from conceptualization to production, ensuring
              future-ready products and managing complex software/hardware/cloud
              systems. Whether you require technology resources or expertise for
              smart connected products, our services cater to your needs,
              providing comprehensive solutions for your product development 
              journey.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics56} />
          </div>
        </div>
      </div>
      <div className="wrapper qinsight-benifits-container" style={{ paddingBlock: "4rem" }}>
        <h1>Hardware Engineering Expertise</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2rem',marginTop:'2rem'}}>
          {
            medicalOfferings.map(({heading,content,haveLogo,logo})=>(
              <>
                <Dynamic heading={heading} content={content} haveLogo={haveLogo} logo={logo} />
              </>
            ))
          }
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
