function longestCommonPrefix(strs) {
    if (strs.length <= 1 && strs.length <= 200) {
        return ("1 <= strings length <= 200");
    }
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var str_1 = strs_1[_i];
        if (str_1.length > 200) {
            return ("0 <= strs[i].length <= 200");
        }
        if (str_1 !== str_1.toLowerCase()) {
            return ("string consists of only lower-case English letters.");
        }
    }
    var str = strs[0];
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        for (var _a = 0, strs_2 = strs; _a < strs_2.length; _a++) {
            var otherStr = strs_2[_a];
            if (otherStr[i] !== char) {
                return str.substring(0, i);
            }
        }
    }
    return str;
}
// Example 1
var strs = ["flower", "flow", "flight"];
console.log('Example 1', longestCommonPrefix(strs));
// Example 2
var strs2 = ["dog", "racecar", "car"];
console.log('Example 2', longestCommonPrefix(strs2));
// Example 3
var strs3 = [];
console.log('Example 3', longestCommonPrefix(strs3));
// Example 4
var strs4 = ["Flower", "flow"];
console.log('Example 4', longestCommonPrefix(strs4));
// Example 5
var strs5 = ["flowersssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", "flow"];
console.log('Example 4', longestCommonPrefix(strs5));
