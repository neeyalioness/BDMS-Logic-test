function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
  
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix.length === 0) return "";
      }
    }
    return prefix;
  }
  
  // Example usage:
  const strs1 = ["flower", "flow", "flight"];
  const strs2 = ["dog", "racecar", "car"];
  
  console.log('strs1:',longestCommonPrefix(strs1)); // Output: "fl"
  console.log('strs2:',longestCommonPrefix(strs2)); // Output: ""