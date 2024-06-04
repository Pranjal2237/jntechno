import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings } from "@/constant";
import { digital, graphics38, securityBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={securityBanner}
        heading="Connected Enterprises – Radically Reforming Companies and Competition"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Security
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              The landscape of network security services has undergone a
              profound transformation due to digital innovation, cloud adoption,
              and the widespread shift to remote work. Dynamic changes in
              network configurations and the rapid expansion of attack surfaces
              pose significant challenges. Traditional security solutions often
              fall short in providing adequate security and access control. To
              meet the demands of digital innovation, enterprises increasingly
              require Secure Access Service Edge (SASE) offerings for
              low-latency access to end users, devices, and cloud-hosted
              services anywhere.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology offers a comprehensive SASE framework featuring
              cloud-native security functions including secure SD-WAN, Secure
              Web Gateways, Cloud Access Security Brokerage, Identity and Access
              Management, WAF, Cloud-delivered FwaaS, and zero-trust network
              access. This enables telecommunication service providers and
              enterprises to expedite product development, market delivery, and
              adapt swiftly to evolving business conditions and security 
              challenges.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics38} />
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
