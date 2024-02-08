import {primeFactors} from "../primeFactors";

describe('Prime Factors', () => {
  it('should return 2 if the given number it is 2', () => {
      expect(primeFactors(2)).toEqual([2])
  })
})
