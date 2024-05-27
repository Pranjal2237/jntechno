import { footer } from '@/constant'
import React from 'react'
import '../../styles/global.css'
import {  facebook, linkedin, twitter, youtube } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import styles from './styles.module.css'

const poppins=Poppins({subsets:["latin"],weight:['400','500','600','700']})

const Footer = () => {
  return (
    <div className={poppins.className}>
      <div className={styles.footer}>
      <div className='wrapper'>
        {footer.map(({heading,subnav,navLink})=>(
          <div className={styles.footerContent}>
            <h5>{heading}</h5>
            {subnav && subnav.map(({heading,headingLink})=>(
              <Link href={`${navLink}${headingLink}`}>
                {heading}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.social}>
    <div className='wrapper'>
        <div>
          {
            [linkedin,twitter,facebook,youtube].map((image)=>(
              <div>
                <Link href="/"><Image src={image} /></Link>
              </div>
            ))
          }
        </div>
        <h2>
        info@jntechno.com
        </h2>
        <h2>1234567890</h2>
    </div>
    </div>
    <div className={styles.policies}>
      <div className='wrapper'>
        <div>
        <p>© 2024 Jonaren Technology. All Rights Reserved.</p>
        </div>
        <div style={{display:'flex'}}>
        <Link href='/terms-of-use' >Terms of Use</Link>
        <Link href='/privacy-policy'>Privacy Policy</Link>
        <Link href='/cookies-policy'>Cookie Policy</Link>
        <Link href='/sitemap'>Sitemap</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
