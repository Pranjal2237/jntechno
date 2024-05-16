import Banner from '@/components/banner'
import { blog, homeBridgeOfferings } from '@/constant'
import { digital, graphics16, homeBanner9, qinsightBenifits1, qinsightBenifits2, qinsightBenifits3, qinsightBenifits4, terms } from '@/public'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner
        image={terms}
        heading="Intelligent Home Automation IoT Gateway Solution"
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
            HomeBridge
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
              HomeBridge® is a smart home automation IoT gateway solution for
              OEMs that offers a cost-effective and secure way of connecting
              Internet of Things devices to industry-leading cloud platforms
              with SDK-based connectivity. HomeBridge® can efficiently manage
              40+ smart edge devices with standard features for industry
              applications. HomeBridge® is available as a white-label smart home
              solution for OEMs and IoT end-device manufacturers to easily alter
              according to their market needs. With ACL Digtal’s IoT gateway,
              device manufacturers can complete their entire solution by
              utilizing a ready-to-production platform with other strategic
              advantages such as OEM customization, faster time to market, and a
              lower cost of ownership to build IoT solutions.
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
            <Image src={graphics16} style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <div style={{paddingBlock:'3rem',color:'#333'}}>
        <div style={{width:'1100px',marginInline:'auto'}}>
            <h1 style={{fontSize:'32px',fontWeight:'600'}}>HomeBridge Offerings</h1>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'30px'}}>
                {
                    homeBridgeOfferings.map(({heading,content})=>(
                        <div style={{flex:'0 1 31%',paddingInline:'1rem',paddingBlock:'3rem',background:'#f7f7f6',boxShadow:'0 3px 6px #00000029'}}>
                            <h3 style={{fontSize:'20px',fontWeight:'600',marginBottom:'7px'}}>{heading}</h3>
                            <p>{content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
      <div className="qinsight-benifits-container">
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontWeight: "700", fontSize: "32px" }}>
          Key Features
          </h1>
          <div style={{display:'flex',flexWrap:'wrap',gap:'2.5rem',marginTop:'30px'}}>
            {
                [1,2,3,4,5,6,7,8].map(()=>(
                    <div style={{ flex:'0 0 30%' }}>
              <div style={{display:'flex',justifyContent:'center'}}>
                <Image src={qinsightBenifits1} />
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                  color: "#000000",
                  textAlign:'center'
                }}
              >
                Enhanced Security System
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px",textAlign:'center' }}>
                Role-based access, password-protected downloads, and control
                file types
              </p>
            </div>
                ))
            }
          </div>
        </div>
      </div>
      <div className="qinsight-benifits-container" style={{marginTop:'30px'}} >
        <div style={{ width: "1100px", marginInline: "auto" }}>
          <h1 style={{ fontWeight: "700", fontSize: "32px",textAlign:'center' }}>
          Industry Applications
          </h1>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',marginTop:'30px'}}>
            {
                [1,2,3,4].map(()=>(
                    <div style={{ flex:'0 0 23%' }}>
              <div style={{display:'flex',justifyContent:'center'}}>
                <Image src={qinsightBenifits1} />
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                  color: "#000000",
                  textAlign:'center'
                }}
              >
                Enhanced Security System
              </h2>
              <p style={{ fontSize: "18px", marginTop: "12px",textAlign:'center' }}>
                Role-based access, password-protected downloads, and control
                file types
              </p>
            </div>
                ))
            }
          </div>
        </div>
      </div>
      <Banner
        image={homeBanner9}
        heading="Technology, Media, and Telecommunication"
        description="With a holistic approach, our experts help TMT companies thrive in the rapidly changing business landscape. Together, we increase adaptability and resilience across industries"
        haveButton={true}
        buttonText="READ MORE"
        height="420px"
      />
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
  )
}

export default page
