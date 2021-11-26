const firstUniqChar = (str) => {
    let hash = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!hash[char]) {
            hash[char] = {
                count: 1,
                index: i
            };
        } else {
            hash[char].count++;
        }
    }

    for (let j = 0; j < str.length; j++) {
        let char = str[j];
        if (hash[char]["con"] === 1) {
            return hash[char].index;
        }
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("lovel"));
