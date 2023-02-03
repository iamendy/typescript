var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        //getEmail = (): string => this.email
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("Nnamdi", "nnamdi@dev.co");
console.log(user.name);
