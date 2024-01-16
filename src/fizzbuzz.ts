export const fizzBuzz = (value:number) => {
    const isDivisible = (divisor:number)  => {
        return value % divisor === 0
    }
    if (isDivisible(15)) {
        return "fizzbuzz"
    }
    if (isDivisible(5)) {
        return "buzz"
    }
    if (isDivisible(3)) {
        return "fizz"
    }

    return value.toString()
};
