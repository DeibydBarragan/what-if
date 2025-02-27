"use client"
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { GalleryHorizontalEnd } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
  

const MainStoryCard = ({ id, title, description, length }) => {
    return (
        <Link href={"/story/"+id}>
            <Card className="hover:shadow-lg hover:scale-105 transition-all duration-150 ease-in-out">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src='https://th.bing.com/th/id/OIP.3ueD_Yrs3YGvvaOZNAG1HgHaHa?rs=1&pid=ImgDetMain' alt='John Doe' />
                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                            </Avatar>
                            <span className="truncate text-lg text-muted-foreground">John Doe</span>
                        </div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className='flex gap-2 items-center'>
                                        <span className="text-lg text-muted-foreground">{length}</span>
                                        <GalleryHorizontalEnd className="size-6" />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side='right'>
                                <p>{length} cards</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export default MainStoryCard;
