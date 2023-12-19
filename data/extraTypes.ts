function generateId(): string {
    const tamanhoDoId = 10;
    const caracteresPermitidos = '0123456789qwertyuiopasdfghjklzxcvbnm';
    let idAleatorio = '';
  
    for (let i = 0; i < tamanhoDoId; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
      idAleatorio += caracteresPermitidos.charAt(indiceAleatorio);
    }
  
    return idAleatorio;
}

const movies = [  
    "Carros",
    "O Poderoso Chefão",
    "Interestelar",
    "A Origem",
    "Titanic",
    "Avatar",
    "Star Wars: Episódio IV - Uma Nova Esperança",
    "Cidadão Kane",
    "Pulp Fiction",
    "Matrix",
    "Forrest Gump",
    "Jurassic Park",
    "O Rei Leão",
    "O Senhor dos Anéis: A Sociedade do Anel",
    "Harry Potter e a Pedra Filosofal",
    "E.T. - O Extraterrestre",
    "Crepúsculo",
    "Batman: O Cavaleiro das Trevas",
    "A Lista de Schindler",
    "Gladiador",
    "O Silêncio dos Inocentes"
]

function getRandomMovie() {
    const i = Math.floor(Math.random() * movies.length)
    return movies[i]
}

export { getRandomMovie, generateId }