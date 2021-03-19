//....Declare a function factorialize(num) that takes an integer num as input and returns the factorial of the provided integer.

// If the integer is represented with the num, a factorial is the product of all positive integers less than or equal to num.

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120



function  factorialize(num) {
    if (num < 0) {
        return -1;
    }
    if (num == 0) {
        return 1;
    } else {
        return (num * factorialize(num - 1));
    }
}
  console.log(factorialize(0));
