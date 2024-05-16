import Banner from "@/components/banner";
import { blog } from "@/constant";
import {
  digital,
  terms,
  qinsightBenifits1,
  qinsightBenifits2,
  qinsightBenifits3,
  qinsightBenifits4,
} from "@/public";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="Live Smarter with Futuristic Smart Home Solutions"
        description="Transforming conventional devices into connected devices"
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
            Home Automation
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
          <div style={{ flexBasis: "100%", color: "#333", fontSize: "16px" }}>
            <p>
              A truly connected home is no longer a figment of imagination but a
              proper functioning reality. The number of connected devices is
              steadily rising, and some brand-new platforms and technologies are
              being adopted at an astonishing pace. IoT-based smart connected
              homes have made life hassle-free and more comfortable. In the
              meantime, we need to overcome hurdles such as security, data
              privacy, connecting multiple large devices, converting legacy
              systems, and vie with evolving technologies. From home security
              systems to online shopping and entertainment to energy management,
              tech-savvy connected consumers can depend on ACL Digital for
              interactive and immersive experiences.
            </p>
            <p>
              We have sound knowledge and in-depth experience with industry
              standards, connectivity protocols, and integrating legacy devices
              with home automation solutions. Our experts develop futuristic,
              modern, customizable, and secure Smart home solutions development
              compatible with numerous home IoT devices, delivering an
              integrated and extraordinary user experience. For OEMs and device
              manufacturers, we provide a ready-to-use and pre-integrated IoT
              home automation platform via HomeBridge®. At ACL Digital, we
              transform conventional devices into connected devices, design, and
              integrate AV-enabled Smart home solutions with voice assistant
              platforms, including Google, Alexa, and others.
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
            <Image src={digital} style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#004275", paddingBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto", color: "#fff" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
            Industry Requirements
          </h1>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "2rem",
            }}
          >
            <div style={{ flexBasis: "100%" }}>
              <div></div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                End-to-end Product Engineering Support
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Development support at all levels consists of IoT Gateway,
                Prototyping, Cloud, Manufacturing, and Manufacturing
              </p>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <div></div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Alliance Standard Compliance
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                ACL Digital as a member of Alliances contributing to Z-Wave,
                Thread, Zigbee, etc. makes it simple for us to help our
                customers commercially roll out/release their products in
                approval through the local and global authorities
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "2rem",
            }}
          >
            <div style={{ flexBasis: "100%" }}>
              <div></div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Virtual Assistance Integration
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Integration with Google Mini/Home, Alexa, Crestron, Control 4,
                Elan, and others. Chromecast, Nest, and HomeKit for smooth and
                real-time connectivity
              </p>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <div></div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Faster Time to Market
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Ready-to-market solutions IoTify, CENTAURI 200, HomeBridge, and
                RF connectivity modules are available to reduce time to market
                substantially
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "2rem",
            }}
          >
            <div style={{ flexBasis: "100%" }}>
              <div></div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Safe and Reliable Connectivity
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Development of secure communication using TLS 1.2, MQTT 3.1.1,
                database and hardware chip-level encryption
              </p>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <div></div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Enabling Connectivity
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Experienced to handle the latest wireless technologies like
                5G/4G/LTE, Wi-Fi, and BLE that connects more devices at superior
                speeds, capacity, and low latency to upscale the performance of
                the smart home devices
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="qinsight-benifits-container">
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontWeight: "700", fontSize: "32px" }}>
            Why Choose ACL Digital?
          </h1>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "2rem",
            }}
          >
            <div style={{ flexBasis: "100%" }}>
              <div>
                <Image src={qinsightBenifits1} />
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Strong Domain Expertise
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Extensive and notable experience with Home Automation OEMs in
                conceptualization, embedded development, hardware development,
                and manufacturing of products for consumers
              </p>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <div>
                <Image src={qinsightBenifits2} />
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Engineering-driven Manufacturing
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Experts in all IoT engineering and connected solutions including
                manufacturing of embedded devices, sensors, and gateway at a
                large scale
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "2rem",
            }}
          >
            <div style={{ flexBasis: "100%" }}>
              <div>
                <Image src={qinsightBenifits3} />
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Home Automation OEM Platforms
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                In-house custom-made reference design platforms such as
                HomeBridge Gateway/Hub, IoTify Cloud, and RF Modules for faster
                time to market and cost savings
              </p>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <div>
                <Image src={qinsightBenifits4} />
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Certification Expertise
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                FCC, CE, ROHS, and territory, country, and region-specific
                certified product delivery
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="child"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
      >
        {blog.map(({ category, heading, background }) => (
          <div
            style={{
              height: "348px",
              background: background,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "1rem 1.5rem",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h4 style={{ fontSize: "14px" }}>{category}</h4>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                  width: "65%",
                }}
              >
                {heading}
              </h2>
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
