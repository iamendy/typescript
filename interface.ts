interface User{
  readonly _id: number,
  name: string,
  email: string,
  authToken?: string //optional
  //a method can be declared two ways
  startTrial?: () => string //1
  completeRegistration?(): boolean, //2
  getCoupon?(coupon: string, value: number): string
}

// we can also add (open up) an interface by using the name:
interface User{
  githubProfile: string
}

let newUser: User = {
  _id: 1,
  name: "Nnamdi",
  email: "endeking@gmail.com",
  startTrial: () => "started",
  completeRegistration: () => true,
  getCoupon: (coupon, value) => `Get Coupon for ${value}% off`,

  //to reflect the extension
  githubProfile: "github.com/iamendy"
}

console.log(newUser.getCoupon("77hh", 10));

//We can also extend an interface
interface Admin extends User {
  isAdmin: boolean
}

let admin: Admin = {
  isAdmin: true,
  //rest of the interfaces
  _id: 12,
  name: 'Admin',
  email: "admin@a.co",
  githubProfile: "github"
}
