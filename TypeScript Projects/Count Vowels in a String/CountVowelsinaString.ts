function countVowels(str: string): number {
    return (str.match(/[aeiou]/gi) || []).length;
}

console.log(countVowels("AEIOU")); // Output: 5
