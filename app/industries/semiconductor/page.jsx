import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings, semiconductorOfferings } from "@/constant";
import { digital, graphics55, semiconductorBanner, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={semiconductorBanner}
        heading="Innovative Semiconductor Design Solutions for Advanced IPs and Complex SoCs."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Semiconductor
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <p>
              In today's rapidly evolving technological arena, the semiconductor
              sector stands as a cornerstone, driving innovation and fueling a
              plethora of electronic devices. Meeting the soaring demand for
              efficient, potent, and cost-effective semiconductor solutions
              poses multifaceted challenges for manufacturers. These include
              intricate VLSI design & verification requisites, compact form
              factors, rigorous quality benchmarks, shortened time-to-market
              cycles, and the imperative for robust testing and validation
              protocols. At Jonaren Technology, we engage in close collaboration with
              industry giants, spanning IDMs, silicon manufacturers, OEMs,
              foundries, EDA, and IP vendors, to craft cutting-edge chipsets
              tailored for diverse industrial applications. Our prowess in VLSI
              design and verification services ensures delivery of top-tier
              solutions that uphold the highest quality benchmarks. By
              accelerating time-to-market and navigating the dynamic
              semiconductor landscape, we empower our clients to achieve
              unparalleled success in a fiercely competitive market environment.
            </p>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics55} style={{ width: "80%" }} />
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
            Tailoring semiconductor solutions to exact client needs: VLSI
            design, ASIC verification, FPGA development, SoC design, embedded
            software, and rigorous testing, ensuring industry-specific
            requirements are met with excellence.
          </p>
          <div className="offering-container">
            {semiconductorOfferings.map(({ image, title, paragraph }) => (
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
