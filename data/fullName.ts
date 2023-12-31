import { names } from './names'

const lastName = [
    "Spichenkoff",
    "Ivanov", "Smirnov", "Kuznetsov", "Popov", "Vasilyev", "Petrov", "Sokolov", "Mikhailov", "Fedorov", "Morozov",
    "Andreev", "Sergeev", "Kovalev", "Nikitin", "Zaytsev", "Golubev", "Kozlov", "Bogdanov", "Vorobiev", "Orlov",
    "Silva", "Smith", "Martins", "Johnson", "Santos", "Brown", "Ferreira", "Williams", "Pereira", "Jones",
    "Gomes", "Davis", "Rodrigues", "Miller", "Oliveira", "Garcia", "Taylor", "Pinto", "Moore", "Costa",
    "Harris", "Lima", "Jackson", "Sousa", "White", "Mendes", "Martinez", "Thomas", "Almeida", "Clark",
    "Ribeiro", "Hall", "Rocha", "Young", "Fernandes", "Hill", "Freitas", "Clark", "Moura", "Walker",
    "Santana", "Lewis", "Nascimento", "Wilson", "Carvalho", "Allen", "Dias", "Carter", "Nunes", "Cook",
    "Coelho"
]

const letters = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('')


function pickRandomElemnt(array: string[]) {
    const randIndex = Math.floor(Math.random() * array.length)

    return array[randIndex]
}

function getFullName() {
    try {
        const first = pickRandomElemnt(names)
    
        const randNumber = Math.floor(Math.random() * 10)
        const half = randNumber < 3 ? pickRandomElemnt(letters) : '' 
        
        const last = pickRandomElemnt(lastName) 
        
        if(half) return `${first} ${half}. ${last}`
        
        return `${first} ${last}`
    } catch(e) { throw 'Error: Full Name' }
}

export default getFullName