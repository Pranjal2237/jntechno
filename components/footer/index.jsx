import { footer } from '@/constant'
import React from 'react'
import '../../styles/global.css'
import {  facebook, instagram, linkedin, twitter, youtube } from '@/public'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className='footer'>
      <div className='wrapper'>
        {footer.map(({heading,subnav,navLink})=>(
          <div className='footer_content'>
            <h2>{heading}</h2>
            {subnav && subnav.map(({heading,headingLink})=>(
              <Link href={`${navLink}${headingLink}`}>
                {heading}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className='social'>
    <div className='social_box'>
        <div>
          {
            [linkedin,twitter,facebook,youtube,instagram].map((image)=>(
              <div>
                <Link href="/"><Image src={image} /></Link>
              </div>
            ))
          }
        </div>
        <h2>
        business@acldigital.com
        </h2>
        <h2>1234567890</h2>
      </div>
    </div>
    <div className='policies'>
      <div>
        <div>
        <p>© 2024 ACL Digital. All Rights Reserved.</p>
        </div>
        <div style={{display:'flex'}}>
        <Link href='/terms-of-use' >Terms of Use</Link>
        <Link href='/privacy-policy'>Privacy Policy</Link>
        <Link href='/cookies-policy'>Cookie Policy</Link>
        <Link href='/sitemap'>Sitemap</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
