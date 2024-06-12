function mergingArray(arr1, arr2) {
    let combinedArray = arr1.concat(arr2);
    let uniqueValues = new Set(combinedArray);
    let finalArray = Array.from(uniqueValues).sort((a, b) => a - b);
    return finalArray;
}
let arr1 = [2, 4, 3, 5, 4, 6];
let arr2 = [1, 2, 6, 5, 4, 6];
let finalArr = mergingArray(arr1, arr2);
console.log(finalArr); 