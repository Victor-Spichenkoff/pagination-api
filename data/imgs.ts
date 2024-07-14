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

//const ACCESS_KEY = "STryHTcTTg4sNt-CSYUHQAdUPfkRv7lt7T_6LHfge6c"
  
// const urls = categoriasUnsplash.map(categoria => `https://source.unsplash.com/search/photos?query=${category}&client_id=${ACCESS_KEY}`)
const urls = categoriasUnsplash.map(categoria => `https://picsum.photos/300`)

function getImage() {
    try {
        return urls[Math.floor(Math.random() * urls.length)]
    } catch(e) { throw 'Error: Image' }
}

export default getImage
