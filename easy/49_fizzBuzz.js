const fizzBuzz = (number) => {
    let answers = [];

    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            answers.push("FizzBuzz");
        } else if (i % 5 === 0) {
            answers.push("Buzz");
        } else if (i % 3 === 0) {
            answers.push("Fizz");
        } else answers.push(i.toString());
    }
    return answers;
};

console.log(fizzBuzz(3));
