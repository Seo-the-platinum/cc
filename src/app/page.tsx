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
      <p className='text-red-800 italic'>
        Come to Me, all you who labor and are heavy laden, 
        and I will give you rest. Take My yoke upon you and learn from Me, 
        for I am gentle and lowly in heart, and you will find rest for your souls.
        For My yoke is easy and My burden light. <span className='text-black'>(Matthew 11:28-30)</span>
      </p>
      <Carousel>
        {formattedSlides}
      </Carousel>
      <div>
        <h1>Driving Directions</h1>
        <p>Come early to get a good parking spot!</p>
        <p>1609 W. Alhambra Road - Alhambra, CA 91803</p>
        <Image src={map} alt='map with church location and nearby streets'/>
      </div>
      <div>
        <Image src={schedule} alt='schedule of services such as bible study and worship days and hours'/>
      </div>
    </main>
  )
}
