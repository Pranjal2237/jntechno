import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import Carousel from "@/components/carousel";
import {  about, careerBannerCarousel, careerEnvironmentArr, careerOfferings, innovationOfferings } from "@/constant";
import { career1, career2, career3, career4, careerBanner1, careerBanner4, homeBanner9 } from "@/public";
import Image from "next/image";
import styles from './styles.module.css'

const page = () => {
  return (
    <div>
      <Carousel autoplay={true} BannerCarousel={careerBannerCarousel} />
        <div className="wrapper page-heading">
          <p>
            Careers
          </p>
        </div>
      <div className={styles.container}>
        <div className="wrapper">
          <h1
            style={{
              fontSize: "34px",
              color: "var(--orange)",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            Why Jonaren Technology?
          </h1>
          <div className={styles.about}>
            <div>
              <h5>
                Jonaren Technology believes in the knowledge, dedication, and
                innovative spirit our team. We are in a pursuit to provide a
                platform for our people to grow and excel. Our team members are
                the torchbearers of the company’s determination to redefine the
                boundaries of technology and make a difference to the people and
                the world around us.
              </h5>
              <h5 style={{marginTop:'10px'}}>
                Are you an IT whiz with a thirst for challenge? Look no further!
                Jonaren Technology is constantly seeking passionate individuals to join
                our team. We offer more than just a career; we offer the chance
                to push your skills and make a real difference.
              </h5>
            </div>
            <Image src={career1} />
            <Image src={career2} />
            <Image src={career3} />
            <Image src={career4} />
          </div>
        </div>
      </div>
      <div
          className="wrapper jonaren_analysis-box wrapper-block"
        >
          <div
          >
            <h1
              style={{
                fontWeight: "600",
                marginBottom: "2rem",
              }}
            >
              Who we are
            </h1>
            <h3 style={{fontWeight: "600" }}>
              Jonaren Technology
            </h3>
            <h5 style={{ marginTop: "10px" }}>
              Digital Product Innovation and Engineering Leader helping clients
              design and build innovative products.
            </h5>
          </div>
          {about.map(({ image, heading, description }) => (
            <>
              <Image src={image} style={{ height: "100%" }} />
            </>
          ))}
        </div>
      <Banner
        image={careerBanner4}
        heading="Jonaren Technology Champions Tech Diversity Through Capella Partnership."
        haveButton={true}
        buttonText="READ MORE"
        height="420px"
      />
      <div className="wrapper-block">
        <div className="wrapper">
          <h1
            style={{
              fontWeight: "700",
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
      <div className="wrapper-block">
        <div className="wrapper">
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "0.2rem",
            }}
          >
            Life at Jonaren Technology
          </h1>
          <h5 className="offerings-content">
            At Jonaren Technology, we place trust, integrity, teamwork, equality, and
            care at the heart of whatever we do.
          </h5>
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
        heading="Job Posting"
        haveButton={true}
        buttonText="VIEW ALL JOB OPENINGS"
        height="420px"
        justify="center"
      />
    </div>
  );
};

export default page;
