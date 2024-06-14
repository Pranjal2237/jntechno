import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { blog, innovationOfferings } from "@/constant";
import { aimlBanner, digital, graphics5, terms } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={aimlBanner}
        heading="Connected Enterprises – Radically Reforming Companies and Competition"
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Artificial Intelligence & Machine Learning
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              In every domain, AI drives unprecedented growth. Now is the
              opportune moment to leverage its advantages and embed it within
              your offerings. With our Generative AI solutions, intelligent
              algorithms enhance product designs, boost efficiency, and craft
              personalized solutions for end customers, unlocking new
              possibilities for innovation and success.
            </h5>
            <h5 style={{marginTop:'10px'}}>
              Jonaren Technology harnesses cutting-edge AI software development tools
              and techniques to craft precise applications that elevate human
              potential. Through advanced statistical and mathematical methods
              like deep learning, machine learning, neural networks, and natural
              language processing, we enhance your capabilities and deliver
              tailored AI solutions to meet your specific needs.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics5} />
          </div>
        </div>
      </div>
        <div className="wrapper wrapper-block">
          <h1
            className="offerings-heading"
          >
            Offerings
          </h1>
          <h5 className="offerings-content">
            Jonaren Technology’s enterprise-grade Digital Experience platforms
            help enterprises achieve holistic digital transformations. The
            companies demand innovative and customized solutions with intuitive
            and meaningful digital experiences and a seamless end-to-end
            customer journey. Our range of Digital Experience & Innovation
            offerings include:
          </h5>
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
