'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import CreateMainStoryForm from "@/components/create-main-story-form";
import MainStoryCard from "@/components/main-story-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useMainStoriesContext } from "@/context/MainStoriesContext";

export default function Page() {
  const { mainStories, setMainStories } = useMainStoriesContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/api/stories")
      .then((response) => {
        // Convertir el objeto en un array de historias
        const storiesArray = Object.entries(response.data).map(([id, story]) => ({
          id, // Usar el ID como clave
          ...story, // Extraer title y description
        }));
        console.log(storiesArray)
        setMainStories(storiesArray)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <p>Cargando...</p>
          </div>
        ) : (
          mainStories.map((mainStory) => (
            <MainStoryCard
              key={mainStory.id}
              id={mainStory.id}
              title={mainStory.root.value.title}
              description={mainStory.root.value.description}
              length={mainStory.root.children.length}
            />
          ))
        )}
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
            <DialogDescription>Crea una nueva historia</DialogDescription>
          </DialogHeader>
          <CreateMainStoryForm mainStories={mainStories} setMainStories={setMainStories} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
