import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, telecomOfferings } from "@/constant";
import { digital, graphics9, telecomBanner } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={telecomBanner}
        heading="Elevate with Uninterrupted Connection and Boundless Bandwidth."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Telecom Service
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <p>
              Jonaren Technology pioneers cutting-edge product and solution
              engineering, empowering telecom operators to deliver digital
              services beyond mere connectivity. Our innovations enhance
              performance and revenue for Telcos and equipment makers, elevating
              market impact. Join us in shaping the future of telecom with
              transformative solutions!
            </p>
            <p style={{marginTop:'10px'}}>
              Leveraging our proven framework and innovative tools, Jonaren Technology
              aids telecom operators and equipment manufacturers in swiftly
              transitioning to next-gen networks. From 5G to AI, our expertise
              in Edge Computing, IoT, and more drives efficiency, reducing
              time-to-market and costs. Join us in shaping the future of telecom
              with agile solutions! 
            </p>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics9} style={{ width: "80%" }} />
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
            Jonaren Technology's tailored engineering services boost market impact by
            enhancing telecom performance, managing traffic, and maximizing
            revenue potential amid rising device connectivity. Join us in
            optimizing telecom solutions!
          </p>
          <div className="offering-container">
            {telecomOfferings.map(({ image, title, paragraph,haveLink=false,link='' }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} haveLink={haveLink} link={link} />
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
