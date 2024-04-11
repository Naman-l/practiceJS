// problem 1
// Given two arrays, we need to find and return an array containing the common elements present in both arrays.



const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const intersection = findIntersection2(arr1, arr2);
console.log(intersection); // Output: [3, 4]

function findIntersection1(arr1,arr2){
    return arr1.filter(element => arr2.includes(element));
}
function findIntersection2(arr1,arr2){
    let temp = []
    arr1.forEach(element=>{
        if (arr2.indexOf(element) !== -1 && temp.indexOf(element) === -1) {
            temp.push(element)
        }
    })
    return temp
}
