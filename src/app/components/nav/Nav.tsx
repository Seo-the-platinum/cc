'use client'
import React from 'react'
import Link from 'next/link'
import Hamburger from './Hamburger'

const Nav = () => {
  return (
    <nav className='z-10'>
      <div className='fixed w-full sm:hidden'>
        <Hamburger />
      </div>
      <div className='flex w-full justify-evenly text-sm h-16 bg-slate-900 text-slate-50 items-end pb-2 gap-6 sm:flex-row md:text-lg max-sm:hidden'>
        <Link href='/'>
          HOME
        </Link>
        <Link href='/about'>
          WHAT&apos;S THE CHURCH ABOUT?
        </Link>
        <Link href='/contact'>
          CONTACT US
        </Link>
        <Link href='/newsletter'>
          NEWSLETTER
        </Link>
        <Link href='/meet'>
          MEET THE CONGREGATION
        </Link>
      </div>
    </nav>
  )
}

export default Nav