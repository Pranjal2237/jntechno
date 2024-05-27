import Banner from "@/components/banner";
import { digital, graphics30, graphics62, terms } from "@/public";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="WireZAP - Soft Micro Hub Solution"
        description="Delivering high-end networking performance"
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
            WireZAP
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
              Are you looking to give your COTS server-based hub hardware a
              boost with software-accelerated traffic processing solutions? If
              yes, then Jonaren Technology has a unique solution known as WireZAP that
              can accelerate the packet processing workloads where there is a
              requirement of ultra-low latency and high-bandwidth massive
              interconnect.
            </p>
            <p>
              WireZAP runs on a white box or ODM products and performs
              high-speed traffic aggregation/disaggregation function, and
              reduces latency to a great extent. The solution also addresses the
              improvement of physical safety by reducing wire clutter in data
              rooms, hospitals, and other critical facilities.
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
            <Image src={graphics30} style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <div style={{ padding: "3rem", background: "#4f6bb3", color: "#fff" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontSize: "26px", fontWeight: "600" }}>
            How Jonaren Technology Can Help?
          </h1>
          <p style={{ fontSize: "17px" }}>
            You can count on our experience to develop high-speed white-box
            multiplexer/demultiplexer that delivers high-end networking
            performance supporting several 100Gbps interfaces using DPDK. We
            also help create DPDK-based VNF applications, drivers, and offer
            solutions that are scalable and simplified. Solutions we offer
            include, but are not limited to:
          </p>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div style={{ flexBasis: "100%" }}>
              <h2 style={{ fontSize: "22px", fontWeight: "600" }}>
                For MUX Sub-System
              </h2>
              <ul>
                <li style={{ marginBlock: "2px", fontSize: "18px" }}>
                  Traffic received over multiple interfaces
                </li>
                <li style={{ marginBlock: "2px", fontSize: "18px" }}>
                  Interfaces could be of different interface types and speeds
                </li>
                <li style={{ marginBlock: "2px", fontSize: "18px" }}>
                  Traffic prioritization is based on the received interface
                </li>
              </ul>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <h2 style={{ fontSize: "22px", fontWeight: "600" }}>
                For DE-MUX Sub-System
              </h2>
              <ul>
                <li style={{ marginBlock: "2px", fontSize: "18px" }}>
                  Traffic demux’ed back to the intended interface based on
                  pre-defined logic
                </li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: "18px", marginTop: "30px" }}>
            WireZAP is a unique solution that supports super scalable throughput
            and minimizes latencies down to a few hundred nanoseconds, roughly
            an order of 1000 times improvement. The DPDK-based solution can
            overcome the challenges faced by customers to achieve ultra-low
            latency, high throughput, and low jitter. It addresses the need to
            improve facility design and safety in hospital patient rooms, large
            data rooms and warehouses. It is a low cost, highly scalable and
            reliable software solution for various emerging uses across several 
            industry segments.
          </p>
        </div>
      </div>
      <div style={{ paddingBlock: "3rem" }}>
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontSize: "26px", fontWeight: "600" }}>
            Industries We Cater To
          </h1>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {["HEALTHCARE", "MANUFCTURING", "LOGISTICS", "RETAIL"].map(
              (item, index) => (
                <div
                  style={{
                    width: "170px",
                    height: "170px",
                    borderRadius: "50%",
                    border: "3px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <p>{item}</p>
                  <p>0{index + 1}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div
        style={{ paddingBlock: "3rem", background: "#4f6bb3", color: "#fff" }}
      >
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontSize: "26px", fontWeight: "600" }}>
            Why Choose Jonaren Technology?
          </h1>
          <p style={{ fontSize: "18px", marginTop: "12px" }}>
            All our engineers have years of experience with professionally
            designed expert-led hands-on DPDK training. We are one of the
            leading providers of top-class solutions for Data Plane Development
            Kit. We support our customers in improving the software abilities of
            their present hardware products by using the most advanced
            networking technologies.
          </p>
          <h3
            style={{ marginBlock: "10px", fontSize: "18px", fontWeight: "600" }}
          >
            You should consider working with us because we have the desired
            experience in resolving the top challenges, such as:
          </h3>
          <ul>
            <li style={{ marginBlock: "2px", fontSize: "18px" }}>
              Simplifying the host of cable connecting sources and destination
              endpoints
            </li>
            <li style={{ marginBlock: "2px", fontSize: "18px" }}>
              Device supporting Ethernet to Optical Multiplexing/Demultiplexing
              is expensive
            </li>
            <li style={{ marginBlock: "2px", fontSize: "18px" }}>
              Achieving Throughput, Latency (Nano Second) and Jitter (Nano
              Second) requirement while performing Multiplexing and
              Demultiplexing functionality
            </li>
            <li style={{ marginBlock: "2px", fontSize: "18px" }}>
              Ethernet to Optical Multiplexer/Demultiplexer Device configuration
              to meet complex individual requirements
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
