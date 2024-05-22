'use client'

import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '@/styles/global.css'

const Active = ({image,title,paragraph,haveLink=false,link}) => {
  return (
    <div className={styles.card}>
      <Image src={image} style={{width:'100%'}} />
      <div className={styles.cardDetail}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
      {haveLink && <Link href={link} className={styles.cardLink}><span>READ MORE</span></Link>}
    </div>
  )
}

export default Active
