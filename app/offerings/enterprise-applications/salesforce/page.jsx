import Banner from "@/components/banner"
import Active from "@/components/cards/active"
import { blog, innovationOfferings } from "@/constant"
import { digital, graphics63, salesforceBanner, terms } from "@/public"
import Image from "next/image"


const page = () => {
  return (
    <div>
      <Banner image={salesforceBanner} heading="Connected Enterprises – Radically Reforming Companies and Competition" height="560px" />
      <div
        style={{
          padding: "1rem 0",
          boxShadow: "0px 3px 6px #00000029",
          background: "#fff",
          position: "sticky",
          top:'0px'
        }}
      >
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h2
            style={{
              fontSize: "28px",
              color: "#333",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
           Connected Enterprise
          </h2>
        </div>
      </div>
      <div style={{ marginBlock: "2rem" }}>
        <div
          style={{
            width: "1100px",
            marginInline: "auto",
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          <div style={{ flexBasis: "100%", color: "#333", fontSize: "18px" }}>
            <p>
              Digital Experiences today define customers' engagement across
              various channels with an organization's products, services, or
              brand in both B2B and B2C industries. The customer is at the
              center of these experiences, and personas and customer journeys
              are driving purchase, adoption, and consumption, consequently
              impacting business decisions. Hence, it is not enough for
              organizations to just focus on creating products and services.
            </p>
            <p style={{marginTop:'10px'}}>
              Businesses must capture customer needs, behaviors in real-time to
              define and deliver great experiences across all touchpoints, and
              transform internally with digital applications to help, reach, and
              serve customers. Digital Marketing provides the reach to engage,
              target and communicate the right messages through the right
              channels to the intended audience segments and create brand
              recognition, customer interests, leads, faster sales and loyalty.
            </p>
          </div>
          <div
            style={{
              flexBasis: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={graphics63} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      <div style={{ marginBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "0.2rem",
            }}
          >
            Our connected enterprise offerings
          </h1>
          <p style={{ width: "75%", marginBlock: "12px", fontSize: "16px" }}>
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
  )
}

export default page

