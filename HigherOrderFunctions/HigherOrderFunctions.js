////////////////////////HIGHER ORDER FUNCTIONS/////////////

//Fill in the blank:
      //Functions that are taken as parameters/arguments in another function are called _________________
      //Functions that take another function as parameters/arguments are called _____________________

//HOF are functions that take other functions as arguments or return a function as output. The functions taken as the argument are callbacks. The function using the callback is the higher order function. For example:

//////////////////////////////////////////////////////////////

//////Regular Functions that could be used as callbacks:
function basicGreeting(name) {
  console.log(`Hello ${name}`);
}

basicGreeting('Mary')

function morningGreeting(name) {
  console.log(`Good morning, ${name}`)
}

morningGreeting('Bill')

//////HIGHER ORDER FUNCTION:
//The HOF takes in the array of names, it loops over the array of names to get each specific name (arr[i]), and then it uses that name (arr[i]) as the argument in the callback function 'greeting'.

let names = ["Sara", "Kim", "Jack"];

function greetEveryone(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

greetEveryone(names, morningGreeting);

//Here's another example:

var candyBag = [
  "Reeses",
  "Kisses",
  "Twix",
  "Skittles",
  "Snickers",
  "Sour Patch Kids",
  "Starburst"
];

let last = function (arr, cb) {
  return cb(arr[arr.length - 1]);
};

last(candyBag, function(candy) {
  console.log("The last candy in the bag is " + candy);
  return candy;
});

////Using the arrow function style of writing functions:  //////NOTE: WE'LL LEARN ARROW FUNCTIONS NEXT WEEK

last(candyBag, candy => {
  console.log("The last candy in the bag is " + candy);
  return candy;
});

//In the above example, we use an anonymous functions as the callback. We write the function itself within the invokation of the 'last' function.  You will get in the habit of writing these types of functions as you use javascript's built in higher order functions.


////Similar logic in built-in javascript methods.

//Example: forEach

names.forEach(function(name){console.log(`Hello ${name}`)})

//////////////////////////////////////////////////////////////

////////////BUILT IN HIGHER ORDER FUNCTIONS///////////



//Javascript has some built in HOF's that help to make our lives easier when working with arrays. Here are some important ones to know:

//forEach
//filter
//map
//reduce


//1. forEach

//Instead of using a for-loop like this:

const randomNums = [4, 56, 23, 1, 8, 79, 100];

for (let i = 0; i < randomNums.length; i++) {
    randomNums[i] = randomNums[i] + 2;
}

randomNums; //prints out => [ 6, 58, 25, 3, 10, 81, 102 ]


//We can use forEach to loop over the array and add two to each number:

const randomNums = [4, 56, 23, 1, 8, 79, 100]

randomNums.forEach(function(num, i, arr) {
   arr[i]= num + 2;
})

randomNums

//////////////Check-in///////////////////
//Fill in the blank with one of the higher-order-functions we learned about (forEach, filter, map, reduce)


//1. This array method iterates through an array and takes the values of the elements and returns a single element (most often used to sum the numbers in the array together)

let nums = [3, 5, 78]

nums.reduce(function(total, current){return total + current})

//2. This array method executes the same code on every element in an array and returns a NEW array with the updated elements (It is also a very common method used in React)

let friends = ['Susie', 'Jenny', 'Molly']

let greetFriends = friends.map(function(name){return 'Hi ' + name })

//3. This array method is used to execute the same code on every element in an array but does not change the array and returns undefined.

friends.forEach(function(name){console.log(`Hello ${name}`)})

//4. This array method checks every element to see if it meets certain criteria and returns a new array with the updated elements

let startsWithS = friends.filter(function(name){
  if(name[0]=== 'S'){return name}})

console.log(startsWithS)

//////////////////////////////////////////////////////////////

