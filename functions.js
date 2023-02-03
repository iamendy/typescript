//function
var hero;
var getHero = function () { return "superman"; };
hero = getHero();
var sum = function (x, y, isReady) {
    if (isReady === void 0) { isReady = false; }
    return x + y;
};
console.log(sum(6, 2));
var names = ['Alice', 'John', 'Jake'];
names.forEach(function (n) { return console.log(n.toUpperCase()); });
var state = true;
var setState = function () { state = false; };
setState();
console.log(state);
