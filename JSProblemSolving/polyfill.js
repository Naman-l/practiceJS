//this is a file where i will practice my polyfill implementations

//Polyfill for Array.flat()


const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];

Array.prototype.myFlat = function(){
    const output = []
    function flattenArray(arr){
        for (let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])){
                flattenArray(arr[i]);
            }else{
                output.push(arr[i]);
            }
        }
        return output;
    }
   const returnValue = flattenArray(this);
   return returnValue;
}
const inputArray = [0, 1, 2, [3, 4, [5,6]], 7];
console.log(inputArray.myFlat());


let arr1 = [8, 5, 9, 6, 3];

// Define a custom myFilter method on the Array prototype
Array.prototype.myFilter = function(callback) {
  let filteredArray = []; // Initialize an empty array to store filtered elements
  for (let i = 0; i < this.length; i++) {
    // Check if the callback returns true for the current element
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]); // Add the element to the filtered array
    }
  }

  return filteredArray; // Return the filtered array
}

// Using the custom myFilter method to filter even numbers from the array
const result = arr1.myFilter((item) => item % 2 === 0);

console.log('result', result); // Output: result [8, 6]
