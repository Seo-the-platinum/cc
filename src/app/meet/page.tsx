import React from 'react'
import Image from 'next/image'
import congregants from '@/public/images/congregants1.jpg'


const Meet = () => {
  return (
    <div className='page-container'>
      <div className='flex border-red-500 border-2'>
        <Image 
          alt='Photo of church of christ congregant'
          className=' w-full'
          priority
          sizes='(min-width: 1280px) 60vw, 80vw'
          src={congregants}/>
      </div>
    </div>
  )
}

export default Meet