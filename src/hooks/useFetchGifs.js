import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//esto es un custom hook, es solo una funciona que retorna algo
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]); 
    const [isLoading, setIsLoading] = useState( true ); 

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);


    return{
        images,
        isLoading
    }


}
