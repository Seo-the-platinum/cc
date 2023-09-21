'use client'
import React from 'react'
import Link from 'next/link'
import Hamburger from './Hamburger'
import ResizeHook from '../../utils/ResizeHook'

const Nav = () => {
    const windowWidth = ResizeHook()
    //The hamburger component needs to be wrapped in a parent container with fixed and
    //width 100 so we can move the hamburger menu to the right side of the screen
    if (windowWidth === 'loading') return null
    return (
    <div className='z-10'>
      { windowWidth < 648 ? 
      <div className='fixed w-full'>
        <Hamburger />
      </div>
      :
      <div className='flex flex-col w-full sm:flex-row gap-6 bg-slate-900 text-slate-50 p-2 justify-evenly text-sm'>
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
    }
    </div>
  )
}

export default Nav