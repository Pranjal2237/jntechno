import Banner from '@/components/banner'
import { contact } from '@/constant'
import { contactBanner } from '@/public'
import React from 'react'
import '@/styles/global.css'

const page = () => {
  return (
    <div>
      <Banner heading='Contact Us' height='560px' image={contactBanner} />
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
            Contact Us
          </h2>
        </div>
      </div>
      <div>
        <div style={{ width: "1100px", marginInline: "auto" }}>
            <h1 style={{ marginTop: "4rem", fontSize: "32px", fontWeight: "600" }}>Global Locations</h1>
            <div className='contact-container'>
                {
                  contact.map(({country,company,location:{primary,secondary},phone,email})=>(
                    <div className='contact-box'>
                      <h1>{country}</h1>
                      <h2>{company}</h2>
                      <p>{primary}</p>
                      <p>{secondary}</p>
                      <p>Tel: {phone}</p>
                      <p>Email: {email}</p>
                    </div>
                  ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
