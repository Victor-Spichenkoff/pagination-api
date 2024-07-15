// const urls: string[] = [
//     "https://source.unsplash.com/featured/?nature",
//     "https://source.unsplash.com/featured/?technology",
//     "https://source.unsplash.com/featured/?architecture",
//     "https://source.unsplash.com/featured/?food",
//     "https://source.unsplash.com/featured/?travel",
//     "https://source.unsplash.com/featured/?fashion",
//     "https://source.unsplash.com/featured/?music",
//     "https://source.unsplash.com/featured/?sports",
//     "https://source.unsplash.com/featured/?animals",
//     "https://source.unsplash.com/featured/?business",
//     "https://source.unsplash.com/featured/?people",
//     "https://source.unsplash.com/featured/?movies",
//     "https://source.unsplash.com/featured/?cars",
//     "https://source.unsplash.com/featured/?technology",
//     "https://source.unsplash.com/featured/?art"
// ];

import axios from "axios"

const categoriasUnsplash = [
    'nature',
    'architecture',
    'technology',
    'food',
    'travel',
    'fashion',
    'music',
    'sports',
    'animals',
    'people',
    'cars',
    'business',
    'science',
    'film',
    'health',
    'history',
    'space',
    'ocean',
    'city' , 'mountains',
    'books',
    'night',
    'beach',
    'art',
    'flowers',
    'architecture',
    'fitness',
    'wildlife',
    'holiday',
    'abstract',
    'vintage',
    'technology',
    'industrial',
    'fireworks',
    'patterns',
    'minimal',
    'fantasy',
    'concert',
    'underwater',
    'textures',
    'colors',
    'monochrome',
    'sunrise',
    'sunset',
    'rainbow',
    'vivid',
    'clouds',
    'fire',
    'ice',
    'mountain-biking',
    'neon-lights',
    'modern-art',
    'countryside',
    'cyberpunk',
    'desserts',
    'bokeh',
    'mosaic',
    'street-art',
    'gaming',
    'rivers',
    'drones',
    'double-exposure',
    'macro',
    'meditation',
    'skyscrapers',
    'waterfalls',
    'volcano',
    'parkour',
    'wild-west'
]


const ACCESS_KEY = "STryHTcTTg4sNt-CSYUHQAdUPfkRv7lt7T_6LHfge6c"
  
const getRandomCategoria = () => {
    return categoriasUnsplash[ Math.floor(Math.random() * categoriasUnsplash.length) ]
}


// const urls = categoriasUnsplash.map(categoria => `https://source.unsplash.com/search/photos?query=${categoria}&client_id=${ACCESS_KEY}`)

//safe
// const urls = categoriasUnsplash.map(categoria => `https://picsum.photos/300`)

async function getImage() {
    try {
        const categoria = getRandomCategoria()
        const url = `https://api.unsplash.com/search/photos?query=${categoria}&client_id=${ACCESS_KEY}`
        const res = await axios(url)
        const images = res.data.results

        if (images.length > 0) {
            const randomImage = images[Math.floor(Math.random() * images.length)]
            console.log("\n\n\n", randomImage.urls.regular)
            return randomImage.urls.regular
        }
        throw new Error("erro: IMAGE 121")
        // return urls[Math.floor(Math.random() * urls.length)]
    } catch(e) { throw 'Error: Image' }
}

export default getImage
