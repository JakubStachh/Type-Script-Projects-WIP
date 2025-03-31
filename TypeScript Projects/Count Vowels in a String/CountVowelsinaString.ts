function countVowels(str: string): number {
    return (str.match(/[aeiou]/gi) || []).length;
}

console.log(countVowels("typescript")); // Output: 3
