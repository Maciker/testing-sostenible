export const fizzBuzz = (value:number) => {
    const isDivisibleBy = (divisor:number)  => {
        return value % divisor === 0
    }
    if (isDivisibleBy(15)) {
        return "fizzbuzz"
    }
    if (isDivisibleBy(5)) {
        return "buzz"
    }
    if (isDivisibleBy(3)) {
        return "fizz"
    }

    return value.toString()
};
