'use client'
import Carousel from './components/carousel/Carousel';
import Slide from './components/carousel/Slide';
import { slides } from './utils/slides';

const formattedSlides = slides.map((slide) => {
  return (
    <Slide key={slide.title} slide={slide} />
  )
})

export default function Home() {
  return (
    <main className="page-container">
      <p>Church of Christ</p>
      <h1 className='text-red-800 italic'>
        Come to Me, all you who labor and are heavy laden, 
        and I will give you rest. Take My yoke upon you and learn from Me, 
        for I am gentle and lowly in heart, and you will find rest for your souls.
        For My yoke is easy and My burden light. <span>(Matthew 11:28-30)</span>
      </h1>
      <Carousel>
        {formattedSlides}
      </Carousel>
    </main>
  )
}
