import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?api_key=0hsYicxzfhw4n3J55FivCfRoeFeSRIvj&q=One+Punch&limit=20&offset=0&rating=g&lang=en';

        const resp = await fetch(url);
        const { data } = await resp.json();
        
        const gifs = data.map(img => {
            return {
                id : img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }            
        })

        console.log(gifs);
        setImages(gifs);
    }

  return (
    <>
        <h3>{ category }</h3>
            {
                images.map( img => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }
                    />
                ))
            }
    </>
  )
}

export default GifGrid