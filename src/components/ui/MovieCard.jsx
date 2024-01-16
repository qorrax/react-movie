
import React from 'react';
import {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from '@/components/ui/card';

const MovieCard = (props) => {
  
  // Check if film is present
  if (!props.film) {
    return <div>No movie data available</div>;
  }

  // Destructure nested objects
  const {
    description,
    director,
    title,
    release_date,
    image,
    producer,
    
  } = props.film;

  return (

 
    <Card className="flex flex-col justify-between">
        <CardHeader className='flex-raw gap-4 items-center'>
            <div>
            <CardTitle>Title : {title}</CardTitle>
            </div>
            <p>Director: {director}</p>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
            <img src={image} alt={title} />
        </CardContent>
        <CardFooter className='flex justify-between font-medium text-decoration-line: underline;'>
           
            <p>Producer: {producer}</p>
            <p>Release Date: {release_date}</p>
        </CardFooter>   
    </Card>
    

  )
}

export default MovieCard;





