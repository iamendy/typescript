var newUser = {
    _id: 1,
    name: "Nnamdi",
    email: "endeking@gmail.com",
    startTrial: function () { return "started"; },
    completeRegistration: function () { return true; },
    getCoupon: function (coupon, value) { return "Get Coupon for ".concat(value, "% off"); },
    //to reflect the extension
    githubProfile: "github.com/iamendy"
};
console.log(newUser.getCoupon("77hh", 10));
var admin = {
    isAdmin: true,
    //rest of the interfaces
    _id: 12,
    name: 'Admin',
    email: "admin@a.co",
    githubProfile: "github"
};
