const urls: string[] = [
    "https://source.unsplash.com/featured/?nature",
    "https://source.unsplash.com/featured/?technology",
    "https://source.unsplash.com/featured/?architecture",
    "https://source.unsplash.com/featured/?food",
    "https://source.unsplash.com/featured/?travel",
    "https://source.unsplash.com/featured/?fashion",
    "https://source.unsplash.com/featured/?music",
    "https://source.unsplash.com/featured/?sports",
    "https://source.unsplash.com/featured/?animals",
    "https://source.unsplash.com/featured/?business",
    "https://source.unsplash.com/featured/?people",
    "https://source.unsplash.com/featured/?movies",
    "https://source.unsplash.com/featured/?cars",
    "https://source.unsplash.com/featured/?technology",
    "https://source.unsplash.com/featured/?art"
];

function getImage() {
    return urls[Math.floor(Math.random() * urls.length)]
}

export default getImage