const isValidCurlyBraces = (curlyBraces) => {
    const stack = [];
    for (let i = 0; i < curlyBraces.length; i++) {
        const brace = curlyBraces[i];

        if (brace === "{") {
            stack.push(brace);
        } else {
            let lastOpen = stack.pop();
            if (lastOpen === undefined) return false;
        }
    }
    return stack.length === 0;
};

console.log(isValidCurlyBraces("{{}{{}"));
console.log(isValidCurlyBraces("{{}"));
console.log(isValidCurlyBraces("{{}}"));
console.log(isValidCurlyBraces("{}"));
console.log(isValidCurlyBraces("{"));
console.log(isValidCurlyBraces("{{"));
console.log(isValidCurlyBraces("}"));
