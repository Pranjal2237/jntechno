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
            Banking, Financial Services and Insurance
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
              As customer expectations shift, regulatory demands intensify, and
              Fintech disruptors emerge, the banking landscape transforms. Banks
              face the choice: visionary, observer, or explorer. To thrive, they
              must embrace a customer-centric approach, delivering
              hyper-personalized experiences. Adaptability is key in navigating
              this dynamic evolution and securing top-of-mind recognition.
            </p>
            <p>
              Amid shifting customer needs, regulatory demands, and digital
              advancements, the banking landscape undergoes profound shifts.
              Banks face choices: visionary innovator, passive observer, or
              curious explorer. To thrive, they must embrace adaptability and
              strategic foresight, navigating this transformative journey with
              agility and customer-centricity at the forefront.
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
            <Image src={graphics64} style={{ width: "80%" }} />
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
            Offerings
          </h1>
          <p style={{ width: "75%", marginBlock: "12px", fontSize: "16px" }}>
            ACL Digital drives global banking and financial services forward,
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
    </div>
  );
};

export default page;
