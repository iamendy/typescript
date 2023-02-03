//there are two kinds of declarations
let superheroes: string[] = [];

superheroes.push('batman')

console.log(superheroes)

//second
let superPowers: Array<number> = []

superPowers.push(20);

console.log(superPowers);

type User = {
  name: string,
  isActive: boolean
}

let allUsers: Array<User> = []

allUsers.push({name: 'Nnamdi', isActive: true})

//example with nested arrays
let ml: number[][] = []

ml.push([255,255,255])
ml.push([0,0,0])

console.log(ml)