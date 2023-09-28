import React from 'react'
import Image from 'next/image'
//static image imports
import churchesOfChrist from '@/public/banners/about/churchesOfChrist.jpg'
import members from '@/public/banners/about/members.jpg'
import plea from '@/public/banners/about/plea.jpg'
import historicalBackground from '@/public/banners/about/historicalBackground.jpg'
import churches from '@/public/banners/about/howMany.jpg'

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
        <p className='max-w-2xl'>{`
          The apostle Peter once wrote, "Sanctify in your hearts Christ as Lord, being ready always
          to give answer to every man that asks you a reason concerning the hope that is in you, with
          meekness and fear" (I Peter 3:15.)  Christians are admonished to be ready at all times to give
          a reason for the faith which they hold.`}
        </p>
      </section>
      <section className='flex flex-col items-center gap-4'>
        <Image src={plea} alt='decorative blue banner for distinctive plea section' />
        <p className='max-w-2xl'>
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
      <section className='flex flex-col items-center gap-4'>
        <Image src={historicalBackground} alt='decorative blue banner for historical background section' />
        <p className='max-w-2xl'>
          {
            `One of the earliest advocates of the return to new testament Christianity, as a means of
            achieving unity of all believers in Christ, was James O'Kelly of the methodist episcopal church. In
            1793 he withdrew from the Baltimore conference of his church and called upon others to join him
            in taking the bible as the only creed. His influence was largely felt in Virginia and North Carolina
            where history records that some seven thousand communicants followed his leadership toward a
            return to primitive new testament Christianity. In 1802 a similar movement among the baptists in
            New England was led by Abner Jones and Elias Smith. They were concerned about "denominational names and creeds"
            & decided to wear only the name Christian, taking the bible as their only guide.  
            In 1804, in the western frontier state of Kentucky, Barton W. Stone and several
            other presbyterian preachers took similar action declaring that they would take the bible as the "only
            sure guide to heaven."
              
              Thomas Campbell, and his illustrious son, Alexander Campbell, took similar steps in the year
            1809 in what is now the state of West Virginia.  They contended that nothing should be bound
            upon Christians as a matter of doctrine which is not as old as the new testament.  Although these
            four movements were completely independent in their beginnings eventually they became one
            strong restoration movement because of their common purpose and plea.  These men did not
            advocate starting a new church, but rather a return to Christ's church as described in the bible.
            Members of the church of Christ don't conceive of themselves as a new church started near the
            beginning of the 19th century. Rather, the whole movement is designed to reproduce in
            contemporary times the church originally established on Pentecost, A.D. 30. The strength of the
            appeal lies in the restoration of Christ's original church.`
          }
        </p>
      </section>
      <section className='flex flex-col items-center gap-4'>
        <Image src={churches} alt='decorative blue banner for how many churches section' />
        <p className='max-w-2xl'>
          {
            `The most recent dependable estimate lists more than 15,000 individual churches of Christ. The
            "Christian Herald," a general religious publication which presents statistics concerning all the
            churches, estimates that the total membership of the churches of Christ is around 2,000,000.
            There are more than 7000 men who preach publicly. Membership of the church is heaviest in the
            southern states of the United States, particularly Tennessee and Texas, though congregations exist
            in each of the fifty states and in more than eighty foreign countries.  Missionary expansion has been
            most extensive since the second World War in Europe, Asia and Africa.  Many full time workers
            are supported in foreign countries. The churches of Christ now have five times as many members
            as were reported in the U.S. Religious Census of 1936.`
          }
        </p>
      </section>
    </div>
  )
}

export default About