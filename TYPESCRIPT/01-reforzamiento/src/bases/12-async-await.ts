import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = import.meta.env.VITE_API_KEY;
const URI = 'http://api.giphy.com/v1/gifs/random';

const createImageInsideDOM = ( url: string ): void =>{
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

const getRandomImageUrk = async () => {

    const response = await fetch(`${URI}?api_key=${API_KEY}`);

    const {data,}: GiphyRandomResponse = await response.json();

    return data.images.original.url;
}

// llamando a función
// getRandomImageUrk().then( (url) => createImageInsideDOM(url));
// Versión simplificada
getRandomImageUrk().then( createImageInsideDOM);
