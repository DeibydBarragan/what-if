'use client'
import CreateMainStoryForm from "@/components/create-main-story-form";
import MainStoryCard from "@/components/main-story-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function Page() {
  const [mainStories, setMainStories] = useState([]);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {mainStories.map((story) => (
          <MainStoryCard key={story.id} story={story} />
        ))}
      </div>
      <Dialog>
        <DialogTrigger>
          <Button className="absolute bottom-8 right-8 text-5xl size-16 rounded-full" size="icon">
            +
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear nueva historia</DialogTitle>
            <DialogDescription>
              Crea una nueva historia
            </DialogDescription>
          </DialogHeader>
          <CreateMainStoryForm mainStories={mainStories} setMainStories={setMainStories} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

