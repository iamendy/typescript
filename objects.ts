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
  name: string,
  age: number,
  isActive: boolean
}

function createNewUser (user: User): User {
  //do db manipulations
  return user
}