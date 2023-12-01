
// // What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// // Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// My solution
function addLength(str) {

    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + ' ' + arr[i].length;
    }
    return arr;
}

// test cases

const { assert } = require("chai");

describe("Basic tests", () => {
    const testCases = [
        ["apple ban", ["apple 5", "ban 3"]],
        ["you will win", ["you 3", "will 4", "win 3"]],
        ["you", ["you 3"]],
        ["y", ["y 1"]],
        ["x y z", ["x 1", "y 1", "z 1"]],
        ["xyz", ["xyz 3"]],
        ["xyz x y z xyz", ["xyz 3", "x 1", "y 1", "z 1", "xyz 3"]],
        ["a bc cde", ["a 1", "bc 2", "cde 3"]],
        ["a ab abc", ["a 1", "ab 2", "abc 3"]],
        ["a ab abc ab a", ["a 1", "ab 2", "abc 3", "ab 2", "a 1"]],
    ];
    for (const [input, expected] of testCases) {
        it(`Testing for ${JSON.stringify(input)}`, () => {
            assert.deepEqual(addLength(input), expected);
        });
    }
});

describe("Random tests", () => {
    const randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
    const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const addSol = (str) =>
        str
            .split(" ")
            .map((a) => `${a} ${a.length}`);

    for (let i = 0; i < 40; i++) {
        const s = [];
        const len = randint(1, 60);
        for (let j = 0; j < len; j++) {
            s.push(base[randint(0, base.length - 1)]);
        }
        const input = s.join("").trim().replace(/\s{2,100}/g, " ");
        const expected = addSol(input);
        it(`Testing for ${JSON.stringify(input)}`, () => {
            assert.deepEqual(addLength(input), expected);
        });
    }
});