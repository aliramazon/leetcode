const firstUniqChar = (str) => {
    let hash = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!hash[char] && hash[char] !== 0) {
            hash[char] = 1;
        } else if (hash[char] || hash[char] === 0) {
            hash[char]++;
        }
    }

    for (let j = 0; j < str.length; j++) {
        let char = str[j];
        if (hash[char] === 1) {
            return j;
        }
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("lovel"));
