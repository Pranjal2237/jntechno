import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, networkOfferings } from "@/constant";
import { digital, graphics23, networkBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={networkBanner}
        heading="Empowering Dependable Connectivity in Dynamic Networks."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Network Infrastructure
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <p>
              As the IT landscape evolves, network infrastructure undergoes
              significant transformation to meet shifting demands. Network
              Equipment Manufacturers (NEM) and Original Equipment Manufacturers
              (OEM) adapt their portfolios to embrace digital disruptions. Jonaren Technology's 
              infrastructure services empower NEMs and OEMs to
              transition legacy infrastructure into agile, IP-based services,
              boosting market competitiveness. Leveraging market-proven solution
              accelerators and frameworks, we expedite time-to-market and enrich
              product features swiftly, enhancing scalability, performance, and
              revenue potential. Stay ahead in the digital age with Jonaren Technology's 
              innovative solutions for network evolution.
            </p>
            <p style={{marginTop:'10px'}}>
              Harnessing industry-leading open-source tools, we adopt a
              consultative approach to craft a seamlessly integrated Network
              Infrastructure that aligns perfectly with business objectives.
              Empower your organization with technology-driven solutions.
            </p>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics23} style={{ width: "80%" }} />
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
            Jonaren Technology empowers enterprises with enterprise-grade Digital
            Experience platforms, facilitating comprehensive digital
            transformations. Our solutions deliver innovative, customized
            experiences, ensuring intuitive interactions and seamless end-to-end
            customer journeys. Explore our range of Digital Experience &
            Innovation offerings for unparalleled success.
          </p>
          <div className="offering-container">
            {networkOfferings.map(({ image, title, paragraph }) => (
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
