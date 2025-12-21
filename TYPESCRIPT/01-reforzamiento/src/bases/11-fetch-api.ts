import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = import.meta.env.VITE_API_KEY;
// const URI = 'http://api.giphy.com/v1/gifs/trending';
const URI = 'http://api.giphy.com/v1/gifs/random';


const myRequest = fetch(`${URI}?api_key=${API_KEY}`);

const createImageInsideDOM = ( url: string ): void =>{
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

myRequest.then((response) => response.json())
        .then( ({data}: GiphyRandomResponse) => {
            const imageUrl: string = data.images.original.url;
            createImageInsideDOM(imageUrl);
        })
        .catch( (err) => console.log(err));

// Versión larga
// myRequest.then( (response) =>{

//     response.json().then( (data) => {
//         const imageUrl = data.data.images.original.url;
//         console.log(imageUrl);
//         const imgElement = document.createElement('img');
//         imgElement.src = imageUrl;

//         document.body.append(imgElement);
//     });
// })
// .catch((err)=>{
//     console.log(err);
// })
