class User {
  constructor(
    public name: string,
    private email: string) {
    this.email = email;
    this.name = name;
  }

  get getEmail(): string{
    return this.email;
  }

  //getEmail = (): string => this.email

  set setEmail(email: string) {
    this.email = email;
  }
}

let user = new User("Nnamdi", "nnamdi@dev.co")

console.log(user.name)