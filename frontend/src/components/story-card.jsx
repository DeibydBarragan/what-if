'use client'
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Split } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const StoryCard = ({ setIsShowingCard, isShowingCard }) => {
  
  const handleClick = () => {
    setIsShowingCard(!isShowingCard)
  }

  return (
    <Card className="group hover:shadow-lg hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer"
      onClick={handleClick}
    >
        <CardHeader>
            <CardDescription>Card content</CardDescription>
        </CardHeader>
        <CardContent>
            <div className='flex justify-end items-center'>
              <Dialog>
                  <TooltipProvider>
                    <Tooltip>
                      <DialogTrigger>
                        <TooltipTrigger>
                          <Button variant='outline' className='flex gap-2 items-center'>
                            <span className="text-lg text-muted-foreground">5</span>
                            <Split className="size-6" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side='left'>
                          <p>5 What Ifs</p>
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
            </div>
        </CardContent>
    </Card>
  )
}

export default StoryCard
