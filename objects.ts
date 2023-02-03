const User = {
  name: 'nnamdi',
  email: 'nnamdi@dev.co',
  isActive: true
}

const createUser = (user: {name, email: string, isActive: boolean}) : {name: string, email: string, isActive: boolean} => {
  return user;
};

const user = createUser(User)

console.log(user)

//Type Alias
type User = {
  readonly _id: string
  name: string
  age: number
  isActive: boolean
  creditCardDetails?: string
}

function createNewUser (user: User): User {
  //do db manipulations
  return user
}

let newUser = createNewUser({
  _id: "1121",
  name: "Nnamdi",
  age: 30,
  isActive: true
})

console.log(newUser)


