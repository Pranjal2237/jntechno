import Banner from "@/components/banner"
import Active from "@/components/cards/active"
import { blog, connectedOfferings, innovationOfferings } from "@/constant"
import { connectedEnterpriseBanner, digital, graphics50, terms } from "@/public"
import Image from "next/image"


const page = () => {
  return (
    <div>
      <Banner image={connectedEnterpriseBanner} heading="Transforming Enterprises: Revolutionizing Companies and Competitive Landscapes" height="560px" />
        <div className="wrapper page-heading">
          <h2
          >
           Connected Enterprise
          </h2>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <h5>
              Digital Experiences today define customers' engagement across
              various channels with an organization's products, services, or
              brand in both B2B and B2C industries. The customer is at the
              center of these experiences, and personas and customer journeys
              are driving purchase, adoption, and consumption, consequently
              impacting business decisions. Hence, it is not enough for
              organizations to just focus on creating products and services.
            </h5>
            <h5>
              Businesses must capture customer needs, behaviors in real-time to
              define and deliver great experiences across all touchpoints, and
              transform internally with digital applications to help, reach, and
              serve customers. Digital Marketing provides the reach to engage,
              target and communicate the right messages through the right
              channels to the intended audience segments and create brand
              recognition, customer interests, leads, faster sales and loyalty.
            </h5>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics50} />
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
            {connectedOfferings.map(({ image, title, paragraph }) => (
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
  )
}

export default page

