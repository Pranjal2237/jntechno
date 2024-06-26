import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings } from "@/constant";
import { digital, ecBanner, graphics49, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={ecBanner}
        heading="Connected Enterprises – Radically Reforming Companies and Competition"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Edge Cloud
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container" >
            <h5>
              Amidst the buzz surrounding edge cloud, a notable trend emerges to
              complement traditional cloud infrastructure for emerging workloads
              and applications. Edge clouds, comprising small data centers
              nearer to users, minimize latency by shortening the distance
              between processing and consumption points. This enables premium
              cloud services tailored to specific customers at competitive 
              rates.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology's edge cloud services empower telecom service
              providers to establish edge computing infrastructure within the
              access network, proximate to end-users and connected devices. Our
              open architecture framework facilitates comprehensive edge cloud
              infrastructure development, while our edge cloud orchestrator
              automates workload, application, and service provisioning across
              private/public cloud and data center environments.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics49} />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "0.2rem",
            }}
          >
            Offerings
          </h1>
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
