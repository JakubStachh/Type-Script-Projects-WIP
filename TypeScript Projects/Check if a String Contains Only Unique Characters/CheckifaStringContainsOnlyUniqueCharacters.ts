function hasUniqueCharacters(str: string): boolean {
    return new Set(str).size === str.length;
}

console.log(hasUniqueCharacters("abcdef")); // Output: true
console.log(hasUniqueCharacters("hello"));  // Output: false
