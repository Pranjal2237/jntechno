import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings } from "@/constant";
import { cyberBanner, digital, graphics39, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={cyberBanner}
        heading="Connected Enterprises – Radically Reforming Companies and Competition"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Cybersecurity Assurance
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              With the threat landscape expanding rapidly due to cloud and IoT
              advancements, information security is critical to prevent
              financial and reputational harm. Jonaren Technology provides cutting-edge
              cybersecurity assurance and testing solutions, prioritizing data
              confidentiality, integrity, and availability. Our comprehensive
              pen testing approach covers security testing, threat modeling, and
              remediation support, bolstering attack surface efficiency and
              guiding clients through the vulnerability management lifecycle.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology assists customers in proactively identifying
              vulnerabilities, implementing robust security measures, and
              establishing secure cloud labs for information systems. Our
              cybersecurity experts provide detailed audit reports, empowering
              you to share and ensure solution safety. Partner with Jonaren Technology
              to strengthen your defenses and stay ahead of cyber threats.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics39} />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Our connected enterprise offerings
          </h1>
          <p className="offerings-content">
            Jonaren Technology’s enterprise-grade Digital Experience platforms help
            enterprises achieve holistic digital transformations. The companies
            demand innovative and customized solutions with intuitive and
            meaningful digital experiences and a seamless end-to-end customer
            journey. Our range of Digital Experience & Innovation offerings 
            include:
          </p>
          <div className="offering-container">
            {innovationOfferings.map(({ image, title, paragraph }) => (
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
