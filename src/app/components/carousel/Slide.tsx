import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//types
import { StaticImageData } from 'next/image'

type Slide = {
  slide: {
    header: string,
    source: StaticImageData,
    title: string,
    path: string,
  }
}
//TODO: OPTIMIZE IMAGES
const Slide = ({ slide }: Slide) => {
  return (
    <Link className='flex flex-col min-w-full' href={`/${slide.path}`}>
      <Image
        alt={`${slide.title}`} 
        className='w-full aspect-video'
        priority
        src={slide.source} 
        /> 
      <div className='bg-slate-950 absolute bottom-0 h-20 bg-opacity-60 w-full flex items-center pl-4'>
        <p className='text-slate-100 text-2xl'>{slide.header}</p>
      </div>
    </Link>
  )
}

export default Slide