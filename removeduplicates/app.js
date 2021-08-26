let num = [31, 56, 12, 31, 45, 12, 31];

const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates(num));
