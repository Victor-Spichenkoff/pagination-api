const names = [
        "Victor", "Nicole", "Vera", 'Marina',
        "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
        "Katie", "Leo", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Rachel", "Sam", "Thomas",
        "Aline", "Ana", "Artur", "Bianca", "Bruno", "Clara", "Daniel", "Eva", "Felipe", "Gabriela",
        "Hugo", "Isabela", "João", "Karen", "Lucas", "Mariana", "Nathan", "Natália", "Oscar", "Patrícia",
        "Rafael", "Sofia", "Tiago", "Ursula", "Vitor", "Valentina", "Wagner", "Ximena", "Yasmin", "Zé",   "Alex", "Bella", "Carter", "Diana", "Eli", "Fiona", "Gavin", "Holly", "Ian", "Jasmine",
        "Kevin", "Luna", "Milo", "Natalie", "Oliver", "Penelope", "Quincy", "Riley", "Sasha", "Theo",
        "Victoria", "Wyatt", "Xander", "Yara", "Zane", "Aria", "Benjamin", "Charlotte", "Dominic", "Ella",
        "Felix", "Grace", "Hudson", "Isabel", "Jacob", "Kylie", "Liam", "Mia", "Nora", "Owen", "Peyton",
        "Quinn", "Ronan", "Scarlett", "Tristan", "Vincent", "Willow", "Xavier", "Yasmine", "Zara",
        "Adam", "Brianna", "Caleb", "Daisy", "Ethan", "Felicity", "George", "Hazel", "Isaac", "Jade",
        "Kaleb", "Lila", "Mason", "Nina", "Oscar", "Piper", "Quentin", "Rebecca", "Seth", "Tessa",
        "Ulysses", "Violet", "Wesley", "Xena", "Yuki", "Zachary", "Amelia", "Beckett", "Clara", "Dexter",
        "Evelyn", "Finn", "Georgia", "Harvey", "Isla", "Jackson", "Keira", "Logan", "Maisie", "Nathan",
        "Olive", "Preston", "Quincy", "Rosalie", "Sebastian", "Tabitha", "Vivian", "William", "Xander",
        "Yara", "Zephyr",
        "Axel", "Bianca", "Cameron", "Daphne", "Ezra", "Fiona", "Gideon", "Harper", "Ivy", "Jasper",
        "Kira", "Landon", "Mila", "Nolan", "Olive", "Percy", "Quincy", "Rosalie", "Silas", "Thea",
        "Uma", "Vance", "Willa", "Xavier", "Yara", "Zane", "Alina", "Brady", "Cora", "Damian",
        "Ella", "Felix", "Giselle", "Hayden", "Isla", "Jett", "Kyla", "Liam", "Mia", "Nina",
        "Orion", "Paisley", "Quinn", "Ryder", "Serena", "Tristan", "Ursula", "Wyatt", "Xena",
        "Yasmine"
]

function getRandomName() {
    try {
        const randomNumber = Math.floor(Math.random() * names.length)

        return names[randomNumber]
    } catch(e) { throw 'Error: Name' }
}

export default getRandomName
export { names }