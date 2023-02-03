//function
let hero: string;
const getHero = (): string => "superman";
hero = getHero();

const sum = (x: number, y: number, isReady: boolean = false): number => x + y;

console.log(sum(6,2));

let names = ['Alice', 'John', 'Jake']

names.forEach(n => console.log(n.toUpperCase()))

let state = true;

let setState = (): void => {state = false}
setState()
console.log(state)