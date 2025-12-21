

const API_KEY = 'ew7x9CzKaoxcqQM72cgs737vyEVIHYty';
// const URI = 'http://api.giphy.com/v1/gifs/trending';
const URI = 'http://api.giphy.com/v1/gifs/random';


const myRequest = fetch(`${URI}?api_key=${API_KEY}`);
                   

myRequest.then( (response) =>{

    response.json().then( (data) => {
        const imageUrl = data.data.images.original.url;
        console.log(imageUrl);
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;

        document.body.append(imgElement);
    });
})
.catch((err)=>{
    console.log(err);
})
