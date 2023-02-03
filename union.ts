//unions can make variables of two distict types
let score: string | number;

score = 55; //works great
score = "55" //still works

type User = {
  id: number,
  name: string
}

type Admin = {
  username: string
  id: number
}

let tester: User | Admin = {
  id: 1,
  name: "Nnamdi",
  username: "nnaboy"
}

let address: (number | string)[] = []

address.push(2,4,"3")

console.log(address)

let season: "dry" | "rainy";

//season = "snow"; //will cause error