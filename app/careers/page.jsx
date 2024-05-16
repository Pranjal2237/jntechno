import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import Carousel from "@/components/carousel";
import { HomBannerCarousel, about, careerBannerCarousel, careerEnvironmentArr, careerOfferings, innovationOfferings } from "@/constant";
import { careerBanner1, careerBanner2, careerBanner4, homeBanner9 } from "@/public";
import Image from "next/image";
import "@/styles/global.css";
import CareerCarousel from "@/components/careerCarousel";

const page = () => {
  return (
    <div>
      <Carousel autoplay={true} BannerCarousel={careerBannerCarousel} />
      <div
        style={{
          padding: "1rem 0",
          boxShadow: "0px 3px 6px #00000029",
          background: "#fff",
          position: "sticky",
          top: "0px",
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
            Careers
          </h2>
        </div>
      </div>
      <div className="career-about-container">
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1
            style={{
              fontSize: "34px",
              color: "var(--orange)",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            Why ACL Digital?
          </h1>
          <div className="career-about">
            <div style={{ color: "#333", fontSize: "16px" }}>
              <p>
                ACL Digital believes in the knowledge, dedication, and
                innovative spirit our team. We are in a pursuit to provide a
                platform for our people to grow and excel. Our team members are
                the torchbearers of the company’s determination to redefine the
                boundaries of technology and make a difference to the people and
                the world around us.
              </p>
              <p>
                Are you an IT whiz with a thirst for challenge? Look no further!
                ACL Digital is constantly seeking passionate individuals to join
                our team. We offer more than just a career; we offer the chance
                to push your skills and make a real difference.
              </p>
            </div>
            <Image src={homeBanner9} />
            <Image src={homeBanner9} />
            <Image src={homeBanner9} />
            <Image src={homeBanner9} />
          </div>
        </div>
      </div>
      <div style={{ padding: "1rem 0" }}>
        <div
          style={{
            width: "1100px",
            marginInline: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "0.3rem",
            rowGap: "0.3rem",
          }}
        >
          <div
            style={{
              gridRow: "1/3",
              padding: "4rem 1rem",
              background: "#545454",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "600",
                marginBottom: "2rem",
              }}
            >
              Who we are
            </h1>
            <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
              ACL Digital + ALTEN{" "}
            </h2>
            <p style={{ fontWeight: "16px", marginTop: "10px" }}>
              Digital Product Innovation and Engineering Leader helping clients
              design and build innovative products.
            </p>
          </div>
          {about.map(({ image, heading, description }) => (
            <>
              <Image src={image} style={{ height: "100%" }} />
            </>
          ))}
        </div>
      </div>
      <Banner
        image={careerBanner4}
        heading="ACL Digital Champions Tech Diversity Through Capella Partnership."
        haveButton={true}
        buttonText="READ MORE"
        height="420px"
      />
      <div style={{ marginBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "0.2rem",
            }}
          >
            Career Enablement
          </h1>
          <div className="offering-container">
            {careerOfferings
              .map(({ image, title, paragraph }) => (
                <div>
                  <Active image={image} title={title} paragraph={paragraph} />
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <CareerCarousel /> */}
      <div style={{ marginBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "0.2rem",
            }}
          >
            Life at ACL Digital
          </h1>
          <p style={{ width: "75%", marginBlock: "12px", fontSize: "16px" }}>
            At ACL Digital, we place trust, integrity, teamwork, equality, and
            care at the heart of whatever we do.
          </p>
          <div className="offering-container">
            {careerEnvironmentArr.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Banner
        image={careerBanner1}
        heading="LCA Posting"
        haveButton={true}
        buttonText="VIEW ALL JOB OPENINGS"
        height="420px"
        justify="center"
      />
    </div>
  );
};

export default page;
