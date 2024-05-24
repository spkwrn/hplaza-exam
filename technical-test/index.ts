function longestCommonPrefix(strs: string[]): string {
    if (strs.length <= 1 && strs.length <= 200) {
        return ("1 <= strings length <= 200");
    }

    for (let str of strs) {
        if (str.length > 200) {
            return ("0 <= strs[i].length <= 200");
        }

        if (str !== str.toLowerCase()) {
            return ("string consists of only lower-case English letters.");
        }
    }
    const str = strs[0];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        for (let otherStr of strs) {
            if (otherStr[i] !== char) {

                return str.substring(0, i);
            }
        }
    }

    return str;
}

// Example 1
const strs = ["flower", "flow", "flight"];
console.log('Example 1', longestCommonPrefix(strs));

// Example 2
const strs2 = ["dog", "racecar", "car"];
console.log('Example 2', longestCommonPrefix(strs2));

// Example 3
const strs3: any[] = [];
console.log('Example 3', longestCommonPrefix(strs3));

// Example 4
const strs4 = ["Flower", "flow"];
console.log('Example 4', longestCommonPrefix(strs4));

// Example 5
const strs5 = ["flowersssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", "flow"];
console.log('Example 4', longestCommonPrefix(strs5));   