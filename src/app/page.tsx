'use client'
import Image from 'next/image'
import Carousel from './components/carousel/Carousel';
import Slide from './components/carousel/Slide';
import { slides } from './utils/slides';
import map from '@/public/images/map.jpg'
import schedule from '@/public/images/schedule.jpg'

const formattedSlides = slides.map((slide) => {
  return (
    <Slide key={slide.title} slide={slide} />
  )
})

export default function Home() {
  return (
    <main className="page-container">
      <h1>Church of Christ</h1>
      <div className='flex flex-col w-full gap-4 items-center'>
        <div className="flex text-center self-center">
          <p className='text-red-800 italic lg:text-lg'>
            Come to Me, all you who labor and are heavy laden,
            and I will give you rest. Take My yoke upon you and learn from Me,
            for I am gentle and lowly in heart, and you will find rest for your souls.
            For My yoke is easy and My burden light. <span className='text-black'>(Matthew 11:28-30)</span>
          </p>
        </div>
        <Carousel>
          {formattedSlides}
        </Carousel>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-4'>
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='text-2xl font-bold self-center text-red-800'>
            Driving Directions
          </h1>
          <div className='text-center font-bold'>
            <p>Come early to get a good parking spot!</p>
            <p>1609 W. Alhambra Road - Alhambra, CA 91803</p>
          </div>
          <Image src={map} alt='map with church location and nearby streets' />
        </div>
        <div className='flex flex-col justify-center'>
          <Image src={schedule} alt='schedule of services such as bible study and worship days and hours' />
        </div>
      </div>
    </main>
  )
}
