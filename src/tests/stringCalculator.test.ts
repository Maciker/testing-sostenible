import {stringCalculator} from "../stringCalculator";

describe.only('String Calculator tests', () => {
    it('should return 0 if the input is null', () => {
        expect(stringCalculator(null)).toBe(0);
    })
    it('should return 0 if the input is an empty string', () => {
        expect(stringCalculator('')).toBe(0);
    })
    it('should return a number in integer format if only recieve one number', () => {
        expect(stringCalculator('7')).toBe(7);
    })
    it('should return the sum of the given numbers', () => {
        expect(stringCalculator('7,3,5')).toBe(15);
    })
    it('should return the sum of the given numbers and discard the characters', () => {
        expect(stringCalculator('5,a,7,3,b,5')).toBe(20);
    })
    it('should return the sum of the given numbers with a custom separator', () => {
        expect(stringCalculator('/-/5-a-7-3-b-5')).toBe(20);
    })
})