function secondLargest(arr: number[]): number | null {
    let uniqueArr = [...new Set(arr)]; // Remove duplicates
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr.length > 1 ? uniqueArr[1] : null;
}

console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
