//Phase I: Callbacks
let titleize = (array, cb) => {
    let newArr = array.map((ele, i, arr) => {
        return "Mx. " + ele + " Jingleheimer Schmidt"
    })
    cb(newArr)
    return newArr
}


//testing how map works
// console.log( [1,2,3].map((ele, i, array) => {
//     console.log(ele);
//     console.log(i);
//     console.log(array);
// } ));

let myCallback = (arr) => {
    arr.forEach(element => {
        console.log(element);
    });
}

let names = ["Mary", "Brian", "Leo"]
//titleize(names, myCallback)



//Phase II: Constructors, Prototypes, and this
function Elephant(name, height, tricks) {
    this.name = name
    this.height = height
    this.tricks = tricks
}
//Learned fat arrow functions dont work as prototypes as expected
//Because.... https://medium.com/javascript-in-plain-english/javascript-arrow-functions-vs-functions-3f6ce860f8b5
//Can fix with this that pattern 
Elephant.prototype.trumpet = function () {
    console.log(this.name + " the elephant goes 'phrRRRRRR'");
}
Elephant.prototype.grow = function () {
    this.height += 12
}
Elephant.prototype.addTrick = function (newTrick) {
    this.tricks.push(newTrick)
}
Elephant.prototype.play = function () {
    console.log(this.name + " is " + this.tricks[getRandomInt(this.tricks.length)]);
}

//test 
let Donny = new Elephant("Donny", 100, ["Playing BasketBall", "Dunking on Noobs"])

// Donny.trumpet();
// console.log(Donny.height);
// Donny.grow();
// console.log(Donny.height);

// console.log(Donny.tricks);
// Donny.addTrick("Programming Apps")
// console.log(Donny.tricks);

// Donny.play();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Function Invocation
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.prototype.paradeHelper = function (elephant) {
    console.log(elephant.name + " is killing the dance floor");
}

// herd.forEach(ele => {
//     ele.paradeHelper(ele);
// });


//Phase IV: Closures
function dinerBreakfast() {
    let order = "I'd like cheesy scrambled eggs please.";

    return (food) => {
        order = order.slice(0, order.length - 8) + " and " + food + " please."
        return console.log(order);
    }
}


let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");