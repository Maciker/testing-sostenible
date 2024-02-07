import {fibonacci} from "../fibonacci";

describe('Fibonacci by Leonardo de Pisa', () => {
    it('should return 0 if the given number it is 0', () => {
        expect(fibonacci(0)).toBe(0)
    });
    it('should return 1 if the given number it is 1', () => {
        expect(fibonacci(1)).toBe(1)
    });
    it('should return 1 if the given number it is 2', () => {
        expect(fibonacci(2)).toBe(1)
    });
    it('should return the sum of the tow precedents values', () => {
        expect(fibonacci(2)).toBe(fibonacci(1) + fibonacci(0))
        expect(fibonacci(3)).toBe(fibonacci(2) + fibonacci(1))
    });
})