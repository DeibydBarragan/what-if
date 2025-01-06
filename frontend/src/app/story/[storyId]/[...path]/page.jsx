'use client'
import StoryCard from '@/components/story-card';
import { data } from '@/lib/data';
import React, { use, useState } from 'react';

const Page = ({ params }) => {

  const { path } = use(params)

  const [isShowingCard, setIsShowingCard] = useState(false)

  return (
    <>
      {isShowingCard ? (
        <>
          <div>
            <h1>Story Page</h1>
            {path}
          </div>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {/* Contenido adicional */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>What If Page</h1>
            {path}
          </div>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              <StoryCard user={data.user} setIsShowingCard={setIsShowingCard} isShowingCard={isShowingCard}/>
              <StoryCard user={data.user} setIsShowingCard={setIsShowingCard} isShowingCard={isShowingCard}/>
              <StoryCard user={data.user} setIsShowingCard={setIsShowingCard} isShowingCard={isShowingCard}/>
              <StoryCard user={data.user} setIsShowingCard={setIsShowingCard} isShowingCard={isShowingCard}/>
              <StoryCard user={data.user} setIsShowingCard={setIsShowingCard} isShowingCard={isShowingCard}/>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Page;
