const dict = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM"
};

const integerToRoman = (int) => {
    let divisors = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = "";

    while (int > 0) {
        for (let divisor of divisors) {
            let result = Math.floor(int / divisor);
            for (let i = 0; i < result; i++) {
                roman += dict[divisor];
            }
            int %= divisor;
        }
    }

    return roman;
};

console.log(integerToRoman(3));
console.log(integerToRoman(4));
console.log(integerToRoman(9));
console.log(integerToRoman(19));
console.log(integerToRoman(58));
console.log(integerToRoman(1900));
console.log(integerToRoman(1994));
console.log(integerToRoman(1440));
console.log(integerToRoman(900));
console.log(integerToRoman(222));
