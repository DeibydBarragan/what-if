'use client'
import CreateCardForm from '@/components/create-card-form';
import StoryCard from '@/components/story-card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {

  const pathName = usePathname()

  const [isShowingCard, setIsShowingCard] = useState(false)

  const [cards, setCards] = useState([])

  return (
    <>
      {isShowingCard && <CardsCarousel setIsShowingCard={setIsShowingCard} isShowingCard={isShowingCard}/>}
      <div>
        <h1>What if Page</h1>
        {pathName}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {cards.map((card) => (
            <StoryCard key={card.id} card={card} setIsShowingCard={setIsShowingCard} />
          ))}
        </div>
      </div>
      <Dialog>
        <DialogTrigger>
          <Button className="absolute bottom-8 right-8 text-5xl size-16 rounded-full" size="icon">
            +
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear nueva tarjeta</DialogTitle>
            <DialogDescription>
              Crea una nueva tarjeta
            </DialogDescription>
          </DialogHeader>
          <CreateCardForm cards={cards} setCards={setCards} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Page;
