import Banner from "@/components/banner";
import { blog } from "@/constant";
import {
  digital,
  terms,
  qinsightBenifits1,
  qinsightBenifits2,
  qinsightBenifits3,
  qinsightBenifits4,
  graphics18,
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
              A truly connected home is now a functioning reality. The number of
              connected devices is steadily rising, and new platforms and
              technologies are being adopted rapidly. IoT-based smart homes have
              made life more comfortable and hassle-free. However, challenges
              like security, data privacy, connecting multiple devices,
              converting legacy systems, and evolving technologies must be
              addressed. From home security and energy management to online
              shopping and entertainment, tech-savvy consumers can rely on ACL
              Digital for interactive and immersive experiences. ACL Digital
              provides solutions that ensure a seamless, secure, and efficient
              smart home environment for today's connected world.
            </p>
            <p>
              We have extensive knowledge and experience with industry
              standards, connectivity protocols, and integrating legacy devices
              into home automation solutions. Our experts develop futuristic,
              customizable, and secure smart home solutions compatible with
              various IoT devices, ensuring an exceptional user experience. For
              OEMs and device manufacturers, we offer a ready-to-use,
              pre-integrated IoT home automation platform through HomeBridge®.
              At ACL Digital, we transform traditional devices into connected
              ones, designing and integrating AV-enabled smart home solutions
              with voice assistants like Google and Alexa. Rely on us for
              modern, efficient, and secure smart home innovations.
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
            <Image src={graphics18} style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#004275", paddingBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto", color: "#fff" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
            Market Demands
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
                Comprehensive Product Engineering Support
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Comprehensive development support includes IoT gateway,
                prototyping, cloud integration, and manufacturing, ensuring
                seamless progression from concept to production at all stages.
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
                Alliance Compliance Standards
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                As an alliance member, ACL Digital facilitates Z-Wave, Thread,
                Zigbee, etc., simplifying product commercialization and approval
                processes with local/global authorities.
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
                Virtual Assistant Integration
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Seamless integration with Google Mini/Home, Alexa, Crestron,
                Control 4, Elan, and other platforms, along with Chromecast,
                Nest, and HomeKit, ensures smooth real-time connectivity.
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
                Accelerate Market Entry
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Streamline time-to-market significantly with readily available
                solutions like IoTify, CENTAURI 200, HomeBridge, and RF
                connectivity modules.
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
                Secure Reliable Connectivity
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px" }}>
                Craft secure communication employing TLS 1.2, MQTT 3.1.1,
                database encryption, and hardware chip-level security for
                enhanced data protection.
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
                Facilitating Connectivity
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
