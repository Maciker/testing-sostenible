import {wordWrap} from "../wordWrap";

describe('WordWrap Tests', () => {
    it('Given a empty string should return an empty string', () => {
        expect(wordWrap('', 5)).toEqual('')
    });
    it('should return the word if the word length is less than the line length', () => {
        expect(wordWrap('hello', 5)).toEqual('hello')
    });
    it('trim a line by the line length', () => {
        expect(wordWrap('longword', 4)).toEqual('long\nword')
        expect(wordWrap('reallylongword', 4)).toEqual('real\nlylo\nngwo\nrd')
    });
