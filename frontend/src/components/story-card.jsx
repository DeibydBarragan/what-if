'use client'
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Plus, Split } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import CreateWhatIfForm from './create-what-if-form';

const StoryCard = ({ card, setActualCard }) => {

  const handleClick = () => {
    setActualCard(card.id)
  }

  const handleDialogClick = (e) => {
    e.stopPropagation()
  }

  return (
    <Card className="group hover:shadow-lg hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer"
      onClick={handleClick}
    >
        <CardHeader>
            <CardDescription>{card.content}</CardDescription>
        </CardHeader>
        <CardContent className='flex justify-end'>
            <div className='flex justify-end items-center w-fit gap-2' onClick={handleDialogClick}>
              <Dialog>
                  <TooltipProvider>
                    <Tooltip>
                      <DialogTrigger>
                        <TooltipTrigger>
                          <Button variant='outline' className='flex gap-2 items-center'>
                            <span className="text-lg text-muted-foreground">{card.whatIfs.length}</span>
                            <Split className="size-6" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side='left'>
                          <p>{card.whatIfs.length} what if's</p>
                        </TooltipContent>
                      </DialogTrigger>
                    </Tooltip>
                  </TooltipProvider>
                <DialogContent className='overflow-y-auto max-h-screen'> 
                  <DialogHeader className='gap-3'>
                    <DialogTitle>What Ifs</DialogTitle>
                    <DialogDescription>
                      Estos son What Ifs para este punto de la historia
                    </DialogDescription>
                  </DialogHeader>
                  {/* What Ifs list /> */}
                  <Link href="1/1">
                    <Card className='hover:bg-primary-foreground transition-all duration-150 ease-in-out'>
                      <CardHeader className='flex'>
                        <CardTitle>Titulo del What If</CardTitle>
                        <CardDescription>Descripcion</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Link href="/home">
                    <Card className='hover:bg-primary-foreground transition-all duration-150 ease-in-out'>
                      <CardHeader className='flex'>
                        <CardTitle>Titulo del What If</CardTitle>
                        <CardDescription>Descripcion</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Link href="/home">
                    <Card className='hover:bg-primary-foreground transition-all duration-150 ease-in-out'>
                      <CardHeader className='flex'>
                        <CardTitle>Titulo del What If</CardTitle>
                        <CardDescription>Descripcion</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Link href="/home">
                    <Card className='hover:bg-primary-foreground transition-all duration-150 ease-in-out'>
                      <CardHeader className='flex'>
                        <CardTitle>Titulo del What If</CardTitle>
                        <CardDescription>Descripcion</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Link href="/home">
                    <Card className='hover:bg-primary-foreground transition-all duration-150 ease-in-out'>
                      <CardHeader className='flex'>
                        <CardTitle>Titulo del What If</CardTitle>
                        <CardDescription>Descripcion</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Link href="/home">
                    <Card className='hover:bg-primary-foreground transition-all duration-150 ease-in-out'>
                      <CardHeader className='flex'>
                        <CardTitle>Titulo del What If</CardTitle>
                        <CardDescription>Descripcion</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Link href="/home">
                    <Card className='hover:bg-primary-foreground transition-all duration-150 ease-in-out'>
                      <CardHeader className='flex'>
                        <CardTitle>Titulo del What If</CardTitle>
                        <CardDescription>Descripcion</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Link href="/home">
                    <Card className='hover:bg-primary-foreground transition-all duration-150 ease-in-out'>
                      <CardHeader className='flex'>
                        <CardTitle>Titulo del What If</CardTitle>
                        <CardDescription>Descripcion</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <Button size="icon" variant="outline">
                    <Plus />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Crear What If</DialogTitle>
                    <DialogDescription>
                      Crea un What If en este punto de la historia
                    </DialogDescription>
                  </DialogHeader>
                  <CreateWhatIfForm />
                </DialogContent>
              </Dialog>
            </div>
        </CardContent>
    </Card>
  )
}

export default StoryCard
