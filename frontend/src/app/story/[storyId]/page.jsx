import StoryCard from '@/components/story-card';
import { data } from '@/lib/data';
import React from 'react';

const Page = ({ params }) => {

  return (
    <>
      <div>
        <h1>Story Page</h1>
        {params.storyId}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <StoryCard user={data.user} />
          <StoryCard user={data.user} />
          <StoryCard user={data.user} />
          <StoryCard user={data.user} />
          <StoryCard user={data.user} />
        </div>
      </div>
    </>
  );
}

export default Page;
