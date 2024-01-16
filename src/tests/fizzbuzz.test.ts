import { fizzBuzz } from "../fizzbuzz"

describe('FizzBuzz', () => {
    it('Should return 1 to number 1', () => {
        expect(fizzBuzz(1)).toEqual("1")
    })
    it('Should return "fizz" to number 3', () => {
        expect(fizzBuzz(3)).toEqual('fizz')
    })
    it('Should return "buzz" to number 5', () => {
        expect(fizzBuzz(5)).toEqual('buzz')
    })
    it('Should return "fizzbuzz" to number 15', () => {
        expect(fizzBuzz(15)).toEqual('fizzbuzz')
    })
    it('Should return "fizz" to multiples of 3', () => {
        expect(fizzBuzz(12)).toEqual('fizz')
    })
    it('Should return "buzz" to multiples of 5', () => {
        expect(fizzBuzz(10)).toEqual('buzz')
    })
    it('Should return "fizzbuzz" to multiples of 15', () => {
        expect(fizzBuzz(30)).toEqual('fizzbuzz')
    })
})
