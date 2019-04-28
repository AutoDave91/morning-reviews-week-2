////////////////////////HIGHER ORDER FUNCTIONS/////////////

//HOF are functions that take other functions as arguments or return a function as output. The functions taken as the argument are callbacks. The function using the callback is the higher order function. For example:

/////CALLBACK:
///I will use the callback 'greeting' in the higher-order function 'greetEveryone':

function greeting(name) {
  console.log(`Hello ${name}`);
}

//////HIGHER ORDER FUNCTION:
//The HOF takes in the array of names, it loops over the array of names to get each specific name (arr[i]), and then it uses that name (arr[i]) as the argument in the callback function 'greeting'.

let names = ["Sara", "Kim", "Jack"];

function greetEveryone(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

greetEveryone(names, greeting);

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

const last = (arr, cb) => {
  return cb(arr[arr.length - 1]);
};

last(candyBag, function(candy) {
  console.log("The last candy in the bag is " + candy);
  return candy;
});

////Using the arrow function style of writing functions:

last(candyBag, candy => {
  console.log("The last candy in the bag is " + candy);
  return candy;
});

//In the above example, we use an anonymous functions as the callback. We write the function itself within the invokation of the 'last' function.  You will get in the habit of writing these types of functions as you use javascript's built in higher order functions.

////////////BUILT IN HIGHER ORDER FUNCTIONS///////////

//Javascript has some built in HOF's that help to make our lives easier when working with arrays. Here are some important ones to know:

//forEach
//filter
//map
//sort
//reduce

//1. forEach

//Instead of using a for-loop like this:


const randomNums = [4, 56, 23, 1, 8, 79, 100];
biggerByTwoNums = [];

for (let i = 0; i < randomNums.length; i++) {
    biggerByTwoNums.push(randomNums[i] + 2);
}

biggerByTwoNums; //prints out => [ 6, 58, 25, 3, 10, 81, 102 ]

//We can use forEach to loop over the array:



randomNums.forEach(function(num) {
    biggerByTwoNums.push(num + 2);
});

biggerByTwoNums; //prints out => [ 6, 58, 25, 3, 10, 81, 102 ]


///forEach takes the callback with the current element as an argument, but it can also take the index as a second argument if you need it for some reason:

randomNums.forEach(function(num, index) {
    biggerByTwoNums.push(`The ${index} index is ${num+2}`)}) 
    
    biggerByTwoNums// prints out => 
    [ 'The 0 index is 6',
    'The 1 index is 58',
    'The 2 index is 25',
    'The 3 index is 3',
    'The 4 index is 10',
    'The 5 index is 81',
    'The 6 index is 102' ]