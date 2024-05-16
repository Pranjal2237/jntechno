'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '@/styles/global.css'

const Active = ({image,title,paragraph}) => {
  return (
    <div className='card'>
      <Image src={image} style={{width:'100%'}} />
      <div className='card_detail'>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
      <Link href='/' className='card_link'><span>READ MORE</span></Link>
    </div>
  )
}

export default Active
