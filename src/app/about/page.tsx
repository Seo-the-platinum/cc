import React from 'react'
import Image from 'next/image'
//static image imports
import churchesOfChrist from '@/public/banners/about/churchesOfChrist.jpg'
import members from '@/public/banners/about/members.jpg'
import plea from '@/public/banners/about/plea.jpg'

const About = () => {
  return (
    <div className='page-container'>
      <h1>About The Church</h1>
      <section className='flex flex-col items-center'>
        <Image src={churchesOfChrist} alt='decorative blue banner for churches of christ section' />
        <p className='bg-blue-200 font-bold'>By: <span className='text-blue-600'>Batsell Barrett Baxter</span></p>
      </section>
      <section className='flex flex-col items-center italic gap-4 font-bold'>
        <Image src={members} alt='decorative blue banner for members of church section' />
        <ul className='list-disc flex flex-col gap-1 text-sm list-inside'>
          <li className='text-blue-600'><span className='text-black'>Seek to duplicate the non-denominational church of the first century.</span></li>
          <li className='text-blue-600'><span className='text-black'>Take the bible as our supreme and only guide.</span></li>
          <li className='text-blue-600'><span className='text-black'>Reject doctrines and practices that were introduced after the close of the new testament.</span></li>
          <li className='text-blue-600'><span className='text-black'>Seek to be Christians only.</span></li>
          <li className='text-blue-600'><span className='text-black'>Believe this is the one and only way to unite all who are seeking to follow Christ.</span></li>
        </ul>
        <p>{`
          The apostle Peter once wrote, "Sanctify in your hearts Christ as Lord, being ready always
          to give answer to every man that asks you a reason concerning the hope that is in you, with
          meekness and fear" (I Peter 3:15.)  Christians are admonished to be ready at all times to give
          a reason for the faith which they hold.`}
        </p>
      </section>
      <section className='flex flex-col items-center'>
        <Image src={plea} alt='decorative blue banner for distinctive plea section' />
        <p>
          {
            `It is primarily a plea for religious unity based upon the bible. In a divided religious world it is
          believed that the bible is the only possible common denominator upon which most, if not all, of the
          God fearing people of the land can unite. This is an appeal to go back to the bible.  It is a plea to
          speak where the bible speaks and to remain silent where the bible is silent in all matters that pertain
          to religion.  It further emphasizes that in everything religious, there must be a "Thus saith the Lord"
          for all that is done.  The objective is religious unity of all believers in Christ.  The basis is the new
          testament.`
          }
        </p>
      </section>
    </div>
  )
}

export default About