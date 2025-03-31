function longestWord(sentence: string): string {
    return sentence.split(" ").reduce((longest, current) => 
        current.length > longest.length ? current : longest, "");
}

console.log(longestWord("TypeScript is an awesome programming language")); // Output: "programming"
