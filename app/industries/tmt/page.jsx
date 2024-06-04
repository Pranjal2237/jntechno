import Banner from "@/components/banner";
import Active from "@/components/cards/active";
import { bankingOfferings, innovationOfferings } from "@/constant";
import { bankingBanner, digital, graphics64 } from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={bankingBanner}
        heading="Navigating the Digital Banking Landscape."
        description="Empower with Connected, Insightful Banking."
        height="560px"
      />
        <div className="wrapper page-heading">
          <p
          >
            Banking, Financial Services and Insurance
          </p>
        </div>
      <div className="wrapper about-container wrapper-block">
        <div
          className="about-container"
        >
          <div className="about-content-container">
            <p>
              As customer expectations shift, regulatory demands intensify, and
              Fintech disruptors emerge, the banking landscape transforms. Banks
              face the choice: visionary, observer, or explorer. To thrive, they
              must embrace a customer-centric approach, delivering
              hyper-personalized experiences. Adaptability is key in navigating
              this dynamic evolution and securing top-of-mind recognition.
            </p>
            <p style={{marginTop:'10px'}}>
              Amid shifting customer needs, regulatory demands, and digital
              advancements, the banking landscape undergoes profound shifts.
              Banks face choices: visionary innovator, passive observer, or
              curious explorer. To thrive, they must embrace adaptability and
              strategic foresight, navigating this transformative journey with
              agility and customer-centricity at the forefront.
            </p>
          </div>
          <div
            className="about-image-container"
          >
            <Image src={graphics64} style={{ width: "80%" }} />
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
            Jonaren Technology drives global banking and financial services forward,
            enhancing customer experiences, reshaping business models, and
            optimizing operational efficiency. Our track record speaks volumes,
            propelling organizations confidently into the future.
          </p>
          <div className="offering-container">
            {bankingOfferings.map(({ image, title, paragraph }) => (
              <div>
                <Active image={image} title={title} paragraph={paragraph} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default page;
