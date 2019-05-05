////////// PROBLEM 5 //////////

// Do not edit the code below.
var numsArr = [[1, 2, 3, 4], [5, 6], [7, 8, 9, 10, 11]];
// Do not edit the code above.

/*
  Above is an array of arrays. Use two for loops.
    1. Write a function called 'looper'. 
    2. 'looper' should loop over the arrays.
    3.  If the number is odd, replace it with 'odd'.
        If the number is even, replace it with 'even'.
    4. Return the modified numsArr.
*/

//Code Here

//What is the length of the main array?

console.log(numsArr.length)////returns =====> 3

//How can I find the length of the first sub-array?

console.log(numsArr[0].length)

function looper() {
  for (let i = 0; i < numsArr.length; i++) {
    for (let j = 0; j < numsArr[i].length; j++) {
      if (numsArr[i][j] % 2 != 0) {
        numsArr[i][j] = "odd";
      } else {
        numsArr[i][j] = "even";
      }
    }
  }
  return numsArr;
}

/////////////////////////////////////////////////////////////////////////////////////////

var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];

/*
  The array above represents IDs tied to reported workplace accidents. 
  An employee accidentally entered in duplicates to array, making it look as though there are more accidents this year than there actually are.
    1. Write a function called 'removeDuplicates' that will remove all duplicate entries in the workplaceAccidents array.
    2. Use nested for loops to check for duplicate numbers, and then remove the duplicates from the array.
    3. Return the updated array.
*/

//Code Here

function removeDuplicates() {
  for (let i = 0; i < workplaceAccidents.length; i++) {
    for (let j = i + 1; j < workplaceAccidents.length; j++) {
      //as you loop over again, stay one ahead to compare it to 'i'
      if (workplaceAccidents[i] === workplaceAccidents[j]) {
        workplaceAccidents.splice(i, 1);
      }
    }
  }
  return workplaceAccidents;
}
