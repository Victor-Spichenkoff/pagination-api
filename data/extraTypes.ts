function generateId(): string {
    try {
        const tamanhoDoId = 10;
        const caracteresPermitidos = '0123456789qwertyuiopasdfghjklzxcvbnm';
        let idAleatorio = '';
      
        for (let i = 0; i < tamanhoDoId; i++) {
          const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
          idAleatorio += caracteresPermitidos.charAt(indiceAleatorio);
        }
      
        return idAleatorio;
    } catch(e) { throw 'Error: Id' }
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
    try {
        const i = Math.floor(Math.random() * movies.length)
        return movies[i]
    } catch(e) { throw 'Error: Movie' }
}

export { getRandomMovie, generateId }



const testeFull = {
    "pagination": {
        "page": 2,
        "pageSize": 1,
        "totalPages": 3
    },
    "fields": {
        "nome": "fullName",
        "ditado": "text_1",
        "likes": {
            "type": "desc", 
            "range": [1, 1000]
        },
        "img": "image",
        "meu_objeto": {
            "type": "object",
            "fields": {
                "nome": "name",
                "idade": {
                    "type": "number",
                    "range": [1, 123]
                },
                "meu_objeto": {
                    "type": "object",
                    "fields": {
                        "nome": "name",
                        "idade": {
                            "type": "number",
                            "range": [1, 123]
                        }
                    }
                }
                    
            }
        }
    }
}
const teste = {
    "pagination": {
        "page": 2,
        "pageSize": 1,
        "totalPages": 3
    },
    "fields": {
        "nome": "fullName",
        "ditado": "text_1",
        "likes": {
            "type": "desc", 
            "range": [1, 1000]
        },
        "img": "image",
        "meu_objeto": {
            "type": "object",
            "fields": {
                "nome": "name",
                "idade": {
                    "type": "number",
                    "range": [1, 123]
                }     
            }
        }
    }
}