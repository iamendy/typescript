//declare a variable type by variableName:variableType
//string
var greeting = "hello world";
//number
var num = 6;
var floatNum = 0.62;
//boolean
var isNum = true;
greeting.toLowerCase();
console.log(floatNum.toFixed(1));
console.log(greeting);
var hero;
//function
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
