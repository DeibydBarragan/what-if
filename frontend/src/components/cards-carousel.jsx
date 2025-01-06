'use client'
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
 
export function CardsCarousel({ setIsShowingCard, isShowingCard }) {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const handleBackgroundClick = () => {
    setIsShowingCard(!isShowingCard)
  }

  const handleClick = (e) => {
    e.stopPropagation()
  }
 
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full max-w-xl"
        onClick={handleClick}
      >
        <Carousel setApi={setApi}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex items-center justify-center p-6 aspect-square">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  )
}
