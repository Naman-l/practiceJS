// You are given a list of sorted non-descending integer arrays, 
// write a function to merge them into one sorted non-descending array.




function merge(arrays) {
    // Helper function to merge two sorted arrays
    function mergeTwoArrays(arr1, arr2) {
        let result = [];
        let i = 0, j = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                result.push(arr1[i]);
                i++;
            } else {
                result.push(arr2[j]);
                j++;
            }
        }

        // Add remaining elements from arr1, if any
        while (i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }

        // Add remaining elements from arr2, if any
        while (j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }

        return result;
    }

    // Base case: if there's only one array, return it
    if (arrays.length === 1) {
        return arrays[0];
    }

     if (arrays.length === 0) {
        return [];
    }

    // Merge arrays pair by pair
    let result = arrays[0];
    for (let i = 1; i < arrays.length; i++) {
        result = mergeTwoArrays(result, arrays[i]);
    }

    return result;
}

merge(
    [
      [1,1,1,100,1000,10000],
      [1,2,2,2,200,200,1000],
      [1000000,10000001],
      [2,3,3]
    ]
  )

