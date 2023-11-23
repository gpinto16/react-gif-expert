import { useEffect,useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {

    const { images,isLoading } = useFetchGifs( category );


//esta parte de codigo se paso para el custom hook 'useFetchGifs'
/*     const [images, setImages] = useState([]); 

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect( () => {
        getImages();
    }, []); */

  
    return (
        <>
            <h3>{ category }</h3>
            {
                //esto es como una condicion IF, si isloading es true carga y si no coloca la etiqueta de h2
                isLoading && ( <h2 >Cargando... </h2> )
            }

            <div className='card-grid'>
                {
                    images.map(( image ) => (
                        <GifItem 
                             key={ image.id }
                              { ...image }
                          />
                     ) )

                    /* images.map(( image ) => (
                       <GifItem 
                            key={ image.id }
                             title={ image.title }
                             url={image.url}
                         />
                    ) ) */
                    /* images.map( image => (
                        <li key={ image.id }>{ image.title }</li>
                     ) ) */
                }
            </div>

        </>
  )
}
