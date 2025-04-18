function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    // Your code here
    return num / 3
};

// console.log(divideByThree(9))


function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    // Your code here
    let sum = num1 + num2
    return sum / 2
};

// console.log(averageOfTwo(9, 5))


function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Your code here
    let sum = num1 + num2 + num3 + num4
    return sum / 4
};

// console.log(averageOfFour(4, 8, 12, 16))


function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
    let doubled = []
    for(let i = 0; i < nums.length; i++){
        doubled.push(nums[i] * 2)
    }
    return doubled
};

// console.log(doubler([2, 4, 6, 8]))


function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here

   arr1 = arr1.concat(arr2)
   return arr1
};

// console.log(combineArrays([1, 2], [3, 4]))


function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here
    return arr.indexOf(word) !== -1;
};

// console.log(wordWithinArray('art', ['bike', 'green', 'art', 'beach', 'soap']))

// console.log(wordWithinArray('lip', ['coyote', 'battle', 'mars']))


function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here

    return `${str.toUpperCase()} ... ${str} ... ${str.toLowerCase()}`
};

// console.log(echo(`Mom`))


function fizzBuzz(max) {
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here
    let brackets = [];
    for(let i = 0; i < max; i++){
        const num = i;
        if(num % 3 === 0 && num % 5 !== 0){
            brackets.push(num)
        } else if (num % 5 === 0 && num % 3 !== 0){
            brackets.push(num)
        }
    }
    return brackets
};

// console.log(fizzBuzz(19))


function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
    return `Hello, ${name}`
};

// console.log(hello('Gerald'))


function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
    return `Bye, ${name}`
};

// console.log(goodbye(`Felicia`))


function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here
    return num === 5
};

// console.log(isFive(7))

// console.log(isFive(5))


function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here

    return num % 2 !== 0
};

// console.log(isOdd(17))

// console.log(isOdd(4))


function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
    let str1 = searchString.toLowerCase()
    let str2 = subString.toLowerCase()
    return str1.indexOf(str2) !== -1
};

// console.log(isSubString('Alabama', 'bam'))

// console.log(isSubString('Cornucopia', 'bet'))


function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here
    let count = 0
    for(let i = 0; i < word.length; i++){
        let char = word[i]
        if(char === 'a' || char === 'A'){
            count += 1
        }
    }
    return count
};

// console.log(aCounter('onomatopoeia'))

// console.log(aCounter('Alabama'))


module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}







