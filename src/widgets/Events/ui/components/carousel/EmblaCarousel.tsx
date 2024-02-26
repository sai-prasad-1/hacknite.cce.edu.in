import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import { EventsCard } from '../cards'
import Autoplay from 'embla-carousel-autoplay'

const TWEEN_FACTOR = 4.2

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type SlideDataType = {
  frontImageUrl: string;
  backImageUrl: string;
  url: string;
}

const slide1: SlideDataType[] = [
  {
    frontImageUrl: '/images/events/slide1.png',
    backImageUrl: '/images/events/slide1.png',
    url:"mailto:icccd2024@cce.edu.in",
  },
  {
    frontImageUrl: '/images/events/slide2.png',
    backImageUrl: '/images/events/slide21.png',
    url:"https://forms.gle/zhCkh8Nt2pA5WfDJ8",
  },
  {
    frontImageUrl: '/images/events/slide3.png',
    backImageUrl: '/images/events/slide4.png',
    url:"https://designathon24.devfolio.co/",
  },
  {
    frontImageUrl: '/images/events/slide5.png',
    backImageUrl: '/images/events/slide5.png',
    url:"",
  },
  {
    frontImageUrl: '/images/events/slide6.png',
    backImageUrl: '/images/events/slide6.png',
    url:"",
  },
  {
    frontImageUrl: '/images/events/slide7.png',
    backImageUrl: '/images/events/slide7.png',
    url:"https://hacknite.devfolio.co",
  },
  
]

type PropType = {
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = (props) => {

  const slidesData: SlideDataType[] = slide1

  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2500, stopOnMouseEnter: true,stopOnInteraction: false})
  ])

  const [tweenValues, setTweenValues] = useState<number[]>([])

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
      return numberWithinRange(tweenValue, 0, 1)
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return

    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">


          {slidesData.map((_slideData, slideIndex) => (
            <div
              className="embla__slide"
              key={slideIndex}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[slideIndex] })
              }}
            >
              <EventsCard
                frontImageUrl={_slideData.frontImageUrl}
                backImageUrl={_slideData.backImageUrl}
                url ={_slideData.url}
              />
            </div>
          ))}



        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
