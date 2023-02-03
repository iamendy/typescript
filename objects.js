var User = {
    name: 'nnamdi',
    email: 'nnamdi@dev.co',
    isActive: true
};
var createUser = function (user) {
    return user;
};
var user = createUser(User);
console.log(user);
function createNewUser(user) {
    //do db manipulations
    return user;
}
var newUser = createNewUser({
    _id: "1121",
    name: "Nnamdi",
    age: 30,
    isActive: true
});
console.log(newUser);
