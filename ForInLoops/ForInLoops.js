///////////OBJECTS/////////////////////////////

const student = {
  name: "Jenny",
  school: "UCLA",
  semester: 2,
  major: "Chemical Engineering"
};

// In this object, what am I referring to when I say.... PROPERTY ..... KEY ...... VALUE?

//////Practice accessing data from the following object:

var myApartment = {
  inside: {
    kitchen: {
      refrigerator: [
        "milk",
        "eggs",
        "yogurt",
        "seltzer",
        { fruitDrawer: ["grapes", "oranges", "lemon"] },
        { veggieDrawer: ["broccoli", "green pepper", "mushrooms"] }
      ],
      cabinets: ["cups", "pots", "pans"],
      oven: "rack"
    },
    bedroom: {
      dresser: [
        "clothes",
        {
          sockDrawer: {
            pairOne: ["blue sock 1", "blue sock 2"],
            pairTwo: ["white sock 1", "white sock 2"]
          }
        }
      ],
      nightstand: ["books", "aspirin", "earplugs"]
    }
  },
  outside: {
    yard: ["grass", "benches"]
  }
};

//Use dot or bracket notation to access the following:

//1. refrigerator

console.log(myApartment.inside.kitchen.refrigerator);

//2. 'yogurt'

console.log(myApartment.inside.kitchen.refrigerator[2]);

//3. 'grapes'

console.log(myApartment.inside.kitchen.refrigerator[4].fruitDrawer[0]);

//4. 'pans'

console.log(myApartment.inside.kitchen.cabinets[2]);

//5. 'white socks 1'

console.log(myApartment.inside.bedroom.dresser[1].sockDrawer.pairTwo[0]);

//6. 'ear plugs'

console.log(myApartment.inside.bedroom.nightstand[2]);

//7. 'grass'

console.log(myApartment.outside.yard[0]);

/////////////////////////FOR-IN LOOPS///////////////////////////////////////

//For-in loops are often used with objects. We don't use the other type of for-loop (for statements) with objects because that type of for loop is better for iterating over ordered lists. However, objects are not in a logical order. When you see properties inside an object, you can't expect them to be in any particular order even though it seems like they are. So we need to use a for-in to get into the object and make some changes on the properties.

//Example:

// Write a function called greaterThan10 that takes in an object.
//   Write a for in loop that loops over the object and changes any value that is greater than 10 to the string 'too big'.
//   Return the updated object.
// */

//Code Here

const numsObj = {
  num1: 1,
  num2: 22,
  num3: 3,
  num4: 12
};

function greaterThan10(obj) {
  for (var key in obj) {
    if (obj[key] > 10) {
      obj[key] = "too big";
    }
  }
  return obj;
}

//Why do we use obj[key] in this loop instead of just 'key'?
//Why can't we use dot notation to get to the key?

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Write a function called secrets that will take in an object.
  Create an empty string variable.
  Write a for in loop that loops over the object.
  If the property name starts with an 'sh', concatenate the value to the string variable.
  By the end of the for in loop, you should have a sentence, return that sentence.
*/

//Code Here

let hidden = {
  shhh: "I really",
  one: "this is no secret",
  shake: ", really love ",
  shed: "javascript!",
  two: "this also does not belong"
};

function secrets(obj) {
  let str = "";
  for (var key in obj) {
    if (key[0] + key[1] == "sh") {
      str += obj[key];
    }
  }
  return str;
}

secrets(hidden);

// Write a function called hiddenTreasure that takes in an object.
// Write a for in loop that loops over this object. Each property will have a sentence as it's value.
// If the property value does not contain the word 'treasure', delete the property.
// Return the updated object.

// (hint: the method includes() may be of use...)
// */

//Code Here

let treasureObj = {
  one: "this has none",
  two: "big treasure!",
  three: "only disappointment"
};

function hiddenTreasure(obj) {
  for (var key in obj) {
    if (obj[key].includes("treasure") === false) {
      delete obj[key];
    }
  }
  return obj;
}

hiddenTreasure(treasureObj);
