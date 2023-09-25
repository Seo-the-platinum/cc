'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Hamburger = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className={`${open ? 'translate-x-1/4' : 'translate-x-full'} transform-translate duration-500 ease-in-out absolute right-0`}>
      <div className='flex items-start'>
        <button className='absolute right-full' onClick={toggle}>
          <GiHamburgerMenu className='fill-black' size='2rem' />
        </button>
        <div className='bg-black flex flex-col w-4/5 min-h-screen text-white text-lg gap-4'>
          <Link className='pl-4' href='/' onClick={toggle}>
            Home
          </Link>
          <Link className='pl-4' href='/contact' onClick={toggle}>
            Contact
          </Link>
          <Link className='pl-4' href='/about' onClick={toggle}>
            About
          </Link>
          <Link className='pl-4' href='/meet' onClick={toggle}>
            Meet the Congregation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hamburger