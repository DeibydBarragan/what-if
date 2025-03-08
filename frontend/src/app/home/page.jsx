'use client'
import CreateCardForm from "@/components/create-card-form";
import CreateMainStoryForm from "@/components/create-main-story-form";
import MainStoryCard from "@/components/main-story-card";
import StoryCard from "@/components/story-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useMainStoriesContext } from "@/context/MainStoriesContext";
import { useEffect, useState } from "react";
import { ArrowBigLeft, GitBranch, GitCompareArrows, Network } from "lucide-react"
import { CardsCarousel } from "@/components/cards-carousel";
import RelatedStories from "@/components/related-stories";
import CreateRelation from "@/components/create-relation";
import Link from "next/link";

export default function Page() {
  const { mainStories, setMainStories, loading, fetchStories, dir, setDir, actualNode, setActualNode } = useMainStoriesContext();

  const [isShowingCard, setIsShowingCard] = useState(false)

  const [actualCard, setActualCard] = useState(null)

  useEffect(() => {
    fetchStories();
  }, []);

  if (dir.length === 0) return (
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
              title={mainStory.value.title}
              description={mainStory.value.description}
              length={mainStory.children.length}
              setDir={setDir}
            />
          ))
        )}
      </div>
      {/* Dialog para crear nueva historia */}
      <Dialog>
        <DialogTrigger>
          <Button className="fixed bottom-8 right-8 text-5xl size-16 rounded-full" size="icon">
            +
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear nueva historia</DialogTitle>
            <DialogDescription>Crea una nueva historia</DialogDescription>
          </DialogHeader>
          <CreateMainStoryForm mainStories={mainStories} setMainStories={setMainStories} fetchStories={fetchStories} />
        </DialogContent>
      </Dialog>

    </div>
  )

  return (
    <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
      {isShowingCard && <CardsCarousel
        cards={actualNode.children} 
        actualCard={actualCard}
        setActualCard={setActualCard}
        isShowingCard={isShowingCard}
        setIsShowingCard={setIsShowingCard}
      />}
      <div className="m-5">
        <h1>{actualNode?.value.title}</h1>
        <p>{actualNode?.value.description}</p>
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {actualNode?.children.map((card, index) => (
          <StoryCard
            key={index}
            id={index}
            card={card}
            setActualCard={setActualCard}
            dir={dir}
            setDir={setDir}
            setIsShowingCard={setIsShowingCard}
          />
        ))}
      </div>

      <Dialog>
        <DialogTrigger>
          <Button className="fixed bottom-8 right-8 text-5xl size-16 rounded-full" size="icon">
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
          <CreateCardForm 
            fetchStories={fetchStories}
            dir={dir} actualNode={actualNode} 
            setActualNode={setActualNode} 
            mainStories={mainStories}
          />
        </DialogContent>
      </Dialog>
      <Button
        className="fixed bottom-8 right-28 w-16 h-16 rounded-full text-white bg-primary flex items-center justify-center"
        onClick={() => {
          setDir(prevDir => prevDir.length % 2 === 0 ? prevDir.slice(0, -1) : prevDir.slice(0, -2));
        }}
      >
        <ArrowBigLeft  style={{ transform: "scale(2.2)" }} className="text-black"/> {/* Ajusta el tamaño del ícono aquí */}
      </Button>
      
      {dir.length === 1 && (
        <>
          {/* Botón para ver historias conectadas */}
          <Dialog>
            <DialogTrigger>
              <Button
                className="fixed bottom-8 right-48 w-16 h-16 rounded-full text-white bg-primary flex items-center justify-center"
              >
                <GitBranch style={{ transform: "scale(2.2)" }} className="text-black"/> {/* Ajusta el tamaño del ícono aquí */}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Historias conectadas</DialogTitle>
                <DialogDescription>Historias que están conectadas a la actual:</DialogDescription>
              </DialogHeader>
              <RelatedStories dir={dir} setDir={setDir} />
            </DialogContent>
          </Dialog>
          {/* Botón para añadir una relación con otra historia */}
          <Dialog>
            <DialogTrigger>
              <Button
                className="fixed bottom-8 right-72 w-16 h-16 rounded-full text-white bg-primary flex items-center justify-center"
              >
                <GitCompareArrows style={{ transform: "scale(2.2)" }} className="text-black"/> {/* Ajusta el tamaño del ícono aquí */}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Añadir relación</DialogTitle>
                <DialogDescription>Conecta esta historia con otra:</DialogDescription>
              </DialogHeader>
                <CreateRelation dir={dir} />
            </DialogContent>
          </Dialog>
          <Link href={"tree/"+dir[0]}>
            <Button
              className="fixed bottom-8 right-88 w-16 h-16 rounded-full text-white bg-primary flex items-center justify-center"
            >
              <Network style={{ transform: "scale(2.2)" }} className="text-black"/> {/* Ajusta el tamaño del ícono aquí */}
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}
